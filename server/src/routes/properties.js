const { Router } = require("express");
const {
  Property,
  Location,
  Photo,
  Amenities,
  Agent,
  Floorplan,
  Message,
} = require("../models");

const mapFormData = require("../helpers/map-form-data.js");

const messages = require("./messages.js");
const createAmenitiesObject = require("../helpers/create-amenities-object.js");

const getAll = async (req, res) => {
  try {
    const properties = await Property.findAll({
      include: [
        Location,
        { model: Photo, as: "photos" },
        { model: Floorplan, as: "floorplans" },
        {
          model: Amenities,
          as: "amenities",
          attributes: { exclude: ["id", "property_id"] },
        },
      ],
    });
    const props = [];
    for (const prop of properties) {
      const refactoredAmenitiesObject = createAmenitiesObject(
        prop.amenities.get(),
        "_",
        " "
      );
      let messageCount = await prop.countMessages(Message, prop.id);
      props.push({
        ...prop.toJSON(),
        amenities: refactoredAmenitiesObject,
        messageCount: messageCount,
      });
    }
    res.status(200).json(props);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getOne = async (req, res) => {
  try {
    const property = await Property.findOne({
      where: { id: req.params.id },
      include: [
        Location,
        { model: Agent, include: [Location] },
        { model: Floorplan, as: "floorplans" },
        {
          model: Amenities,
          as: "amenities",
          attributes: { exclude: ["id", "property_id"] },
        },
        { model: Photo, as: "photos" },
      ],
    });
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    const refactoredAmenitiesObject = createAmenitiesObject(
      property.amenities.get(),
      "_",
      " "
    );
    res.status(200).json({
      property: { ...property.toJSON(), amenities: refactoredAmenitiesObject },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteOne = async (req, res) => {
  try {
    const deletedProperty = await Property.destroy({
      where: { id: req.params.id },
    });
    if (!deletedProperty) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.status(200).json({ deletedPropertyId: req.params.id });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createNewProperty = async (req, res) => {
  try {
    const refactoredObject = createAmenitiesObject(
      req.body.amenities,
      " ",
      "_"
    );
    await Location.findOrCreate({
      where: { city: req.body.location.city },
      defaults: { country: req.body.location.country },
    }).then(async ([location]) => {
      const newProperty = Property.build(
        { ...req.body, amenities: refactoredObject },
        {
          include: ["photos", "floorplans", "amenities"],
        }
      );
      newProperty.location_id = location.dataValues.id;
      await newProperty.save();
      res.status(200).json({ message: `Property successfully created!` });
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(422).json({ error: `Invalid data - ${error.message}` });
    } else {
      res
        .status(500)
        .json({ error: `Internal Server Error - ${error.message}` });
    }
  }
};
const updateProperty = async (req, res) => {
  const data = mapFormData(req.body);
  const { id } = req.params;
  try {
    if (!(await Property.findByPk(id)))
      return res.status(404).json({ error: `Property ID:${id} not found!` });

    if (data.photos) {
      await Photo.destroy({ where: { property_id: id } });
      await Promise.all(
        data.photos.map(async (photo) => {
          await Photo.create({ ...photo, property_id: id });
        })
      );
    }

    if (data.floorplans) {
      await Floorplan.destroy({ where: { property_id: id } });
      await Promise.all(
        data.floorplans.map(async (floorplan) => {
          await Floorplan.create({ ...floorplan, property_id: id });
        })
      );
    }
    if (req.body.amenities) {
      const refactoredObject = createAmenitiesObject(
        req.body.amenities,
        " ",
        "_"
      );
      await Amenities.update(refactoredObject, {
        where: { property_id: id },
      });
    }

    if (req.body.location) {
      await Location.findOrCreate({
        where: { city: req.body.location.city },
        defaults: { country: req.body.location.country },
      }).then(async ([location]) => {
        await Property.update(
          { location_id: location.dataValues.id },
          {
            where: { id: id },
          }
        );
      });
    }

    await Property.update(req.body, {
      where: { id: id },
    });

    res
      .status(200)
      .json({ message: `Property ID:${id} successfully updated!` });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(422).json({ error: `Invalid data - ${error.message}` });
    } else {
      res
        .status(500)
        .json({ error: `Internal Server Error - ${error.message}` });
    }
  }
};

module.exports = Router()
  .get("/", getAll)
  .use("/", messages)
  .get("/:id", getOne)
  .delete("/:id", deleteOne)
  .post("/create", createNewProperty)
  .put("/update/:id", updateProperty);
