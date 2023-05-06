import { useState } from "react";

import { validateEditForm } from "../../helpers";
import {
  Button,
  AmenitiesCheckboxList,
  DropDownControl,
  Textarea,
  TextField,
} from "../index.js";

import "./add-property-form.css";

export default function AddPropertyForm({ handleCreateProperty }) {
  const propertyTypes = ["townhouse", "apartment", "business", "house"];

  const offerTypes = ["sale", "rent"];

  const [newPropertyForm, setNewPropertyForm] = useState({
    title: "",
    location: {
      cityAndCountry: "",
      city: "",
      country: "",
    },
    type: "",
    offer: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    preview: "",
    description: "",
    photos: [],
    floorplans: [],
    amenities: {
      "air conditioning": false,
      "alarm clock": false,
      balcony: false,
      "clothes dryer": false,
      "coffee maker": false,
      "deck or patio": false,
      "dishes and utensils": false,
      dishwasher: false,
      fireplace: false,
      freezer: false,
      garage: false,
      heating: false,
      "ice maker": false,
      internet: false,
      microwave: false,
      "outdoor grill": false,
      oven: false,
      "parking on street": false,
      refrigerator: false,
      "satellite or cable tv": false,
      "security system": false,
      "sofa bed": false,
      stove: false,
      telephone: false,
      toaster: false,
      "washing machine": false,
      "water cooler": false,
    },
  });

  const handleEditForm = (name, item) => {
    if (
      (item === "" && name === "photos") ||
      (item === "" && name === "floorplans")
    ) {
      setNewPropertyForm((prevState) => {
        const copy = { ...prevState };
        copy[name] = "";
        copy[`${name}`] = [];
        return copy;
      });
    } else if (name === "amenities") {
      setNewPropertyForm({
        ...newPropertyForm,
        [name]: { ...newPropertyForm.amenities, ...item },
      });
    } else if (name === "photos" || name === "floorplans") {
      setNewPropertyForm({
        ...newPropertyForm,
        [name]: [...item.split(" ")],
      });
    } else if (name === "location") {
      const [city, country] = item.split(", ");
      setNewPropertyForm({
        ...newPropertyForm,
        [name]: {
          cityAndCountry: item,
          city,
          country,
        },
      });
    } else {
      setNewPropertyForm({ ...newPropertyForm, [name]: item });
    }
  };

  const filteredValues = Object.values(newPropertyForm).filter((value) => {
    return typeof value === "string" || Array.isArray(value);
  });

  const isAnyValueEmpty = filteredValues.some((value) => {
    if (typeof value === "string") {
      return value.trim() === "";
    }
    return value.join("") === "";
  });

  const submitForm = () => {
    handleCreateProperty(newPropertyForm);
  };

  return (
    <form className="add-property-form">
      <TextField
        label="Property Title"
        id="propertyTitle"
        onChange={(item) => handleEditForm("title", item)}
        placeholder="Property Title"
        inputText={newPropertyForm.title}
      />
      <TextField
        label="Location"
        id="location"
        onChange={(item) => handleEditForm("location", item)}
        placeholder="Location"
        inputText={newPropertyForm.location.cityAndCountry}
      />
      <fieldset className="add-property-form__section">
        <DropDownControl
          label="Property Type"
          id="propertyType"
          name="type"
          placeholder="Type"
          data={propertyTypes}
          onChange={(event) => handleEditForm("type", event.target.value)}
          value={newPropertyForm.type}
        />
        <DropDownControl
          label="Offer Type"
          id="offerType"
          name="offer"
          placeholder="Offer Type"
          data={offerTypes}
          onChange={(event) => handleEditForm("offer", event.target.value)}
          value={newPropertyForm.offer}
        />
        <TextField
          label="Price"
          id="price"
          onChange={(item) => handleEditForm("price", item)}
          placeholder="Price"
          inputText={newPropertyForm.price}
        />
        <TextField
          label="Area"
          id="area"
          onChange={(item) => handleEditForm("area", item)}
          placeholder="Area"
          inputText={newPropertyForm.area}
        />
        <TextField
          label="Bedrooms"
          id="bedrooms"
          onChange={(item) => handleEditForm("bedrooms", item)}
          placeholder="Bedrooms"
          inputText={newPropertyForm.bedrooms}
        />
        <TextField
          label="Bathrooms"
          id="bathrooms"
          onChange={(item) => handleEditForm("bathrooms", item)}
          placeholder="Bathrooms"
          inputText={newPropertyForm.bathrooms}
        />
      </fieldset>
      <AmenitiesCheckboxList
        amenities={newPropertyForm.amenities}
        setEditForm={(item) => handleEditForm("amenities", item)}
      />
      <Textarea
        label="Description"
        id="description"
        placeholder="Description"
        inputText={newPropertyForm.description}
        onChange={(item) => handleEditForm("description", item)}
      />
      <Textarea
        label="Preview"
        id="preview"
        placeholder="Preview"
        inputText={newPropertyForm.preview}
        onChange={(item) => handleEditForm("preview", item)}
      />
      <Textarea
        label="Photos"
        id="photos"
        onChange={(item) => handleEditForm("photos", item)}
        placeholder="Property Photos"
        inputText={newPropertyForm.photos}
      />
      <Textarea
        label="Floorplans"
        id="floorplans"
        onChange={(item) => handleEditForm("floorplans", item)}
        placeholder="Floorplans"
        inputText={newPropertyForm.floorplans}
      />
      <Button
        className="add-property-form__button"
        value="Add Property"
        onClick={submitForm}
        disabled={
          isAnyValueEmpty ||
          !validateEditForm("price", newPropertyForm.price) ||
          !validateEditForm("area", newPropertyForm.area) ||
          !validateEditForm("bathrooms", newPropertyForm.bathrooms) ||
          !validateEditForm("bedrooms", newPropertyForm.bedrooms)
        }
      />
    </form>
  );
}
