"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      Property.hasMany(models.Photo, {
        foreignKey: "property_id",
        as: "photos",
      });
      Property.hasMany(models.Floorplan, {
        foreignKey: "property_id",
        as: "floorplans",
      });
      Property.hasMany(models.Message, {
        foreignKey: "property_id",
      });
      Property.hasOne(models.Amenities, {
        foreignKey: "property_id",
        as: "amenities",
      });

      Property.belongsTo(models.Location, {
        foreignKey: "location_id",
      });
      Property.belongsTo(models.Agent, {
        foreignKey: "agent_id",
      });
    }
    async countMessages(msg, id) {
      return msg.count({
        where: { property_id: id },
      });
    }
  }
  Property.init(
    {
      type: {
        type: DataTypes.ENUM,
        values: ["apartment", "business", "house", "townhouse"],
        validate: {
          isIn: [["apartment", "business", "house", "townhouse"]],
        },
      },
      offer: {
        type: DataTypes.ENUM,
        values: ["sale", "rent"],
        validate: {
          isIn: [["sale", "rent"]],
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
        },
      },
      title: DataTypes.STRING,
      preview: DataTypes.TEXT,
      description: DataTypes.TEXT,
      area: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
        },
      },
      bedrooms: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
        },
      },
      bathrooms: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Property",
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    }
  );
  return Property;
};
