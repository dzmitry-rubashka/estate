import { useState } from "react";

import { validateEditForm, fillInput, isFormFilled } from "../../helpers";
import {
  Button,
  AmenitiesCheckboxList,
  DropDownControl,
  Textarea,
  TextField,
} from "../index";

import "./edit-property-form.css";

export default function EditPropertyForm({ property, handleEdit }) {
  const propertyTypes = ["townhouse", "apartment", "business", "house"];
  const offerTypes = ["sale", "rent"];
  const [editForm, setEditForm] = useState({ amenities: property.amenities });
  const handleSetEditForm = (name, item) => {
    if (name === "amenities")
      setEditForm({
        ...editForm,
        [name]: { ...editForm.amenities, ...item },
      });
    else if (name === "photos" || name === "floorplans") {
      setEditForm({ ...editForm, [name]: [...item.split(" ")] });
    } else if (name === "cityAndCountry") {
      const [city, country] = item.split(" ");
      setEditForm({
        ...editForm,
        cityAndCountry: item,
        location: {
          city: city.slice(0, -1),
          country,
        },
      });
    } else setEditForm({ ...editForm, [name]: item });
  };

  const submitForm = () => {
    handleEdit(property.id, editForm);
  };

  const isDisabled =
    isFormFilled(editForm) ||
    !validateEditForm("price", editForm.price) ||
    !validateEditForm("area", editForm.area) ||
    !validateEditForm("bathrooms", editForm.bathrooms) ||
    !validateEditForm("bedrooms", editForm.bedrooms);

  const inputTextValue = {
    title: fillInput(editForm.title, property.title),
    type: fillInput(editForm.type, property.type),
    offer: fillInput(editForm.offer, property.offer),
    price: fillInput(editForm.price, property.price),
    area: fillInput(editForm.area, property.area),
    bedrooms: fillInput(editForm.bedrooms, property.bedrooms),
    bathrooms: fillInput(editForm.bathrooms, property.bathrooms),
    description: fillInput(editForm.description, property.description),
    preview: fillInput(editForm.preview, property.preview),
    location: fillInput(
      editForm.cityAndCountry,
      `${property.Location.city}, ${property.Location.country}`
    ),
    photos: fillInput(
      editForm.photos
        ? editForm.photos.forEach((photo) => `${photo} `)
        : undefined,
      property.photos.map((photo) => `${photo.photo_url} `)
    ),
    floorplans: fillInput(
      editForm.floorplans
        ? editForm.floorplans.forEach((photo) => `${photo} `)
        : undefined,
      property.floorplans.map((photo) => `${photo.floorplan_url} `)
    ),
  };

  const handleOnChange = {
    title: (item) => handleSetEditForm("title", item),
    location: (item) => handleSetEditForm("cityAndCountry", item),
    type: (event) => handleSetEditForm("type", event.target.value),
    offer: (event) => handleSetEditForm("offer", event.target.value),
    price: (item) => handleSetEditForm("price", item),
    area: (item) => handleSetEditForm("area", item),
    bedrooms: (item) => handleSetEditForm("bedrooms", item),
    bathrooms: (item) => handleSetEditForm("bathrooms", item),
    amenities: (item) => handleSetEditForm("amenities", item),
    description: (item) => handleSetEditForm("description", item),
    preview: (item) => handleSetEditForm("preview", item),
    photos: (item) => handleSetEditForm("photos", item),
    floorplans: (item) => handleSetEditForm("floorplans", item),
  };

  return (
    <form className="edit-property-form">
      <TextField
        label="Property Title"
        id="propertyTitle"
        onChange={handleOnChange.title}
        placeholder="Property Title"
        inputText={inputTextValue.title}
      />
      <TextField
        label="Location"
        id="location"
        onChange={handleOnChange.location}
        placeholder="Location"
        inputText={inputTextValue.location}
      />
      <fieldset className="edit-property-form__section">
        <DropDownControl
          label="Property Type"
          id="propertyType"
          name="propertyType"
          placeholder="Type"
          data={propertyTypes}
          onChange={handleOnChange.type}
          value={inputTextValue.type}
        />
        <DropDownControl
          label="Property Offer"
          id="offerType"
          name="offerType"
          placeholder="Offer Type"
          data={offerTypes}
          onChange={handleOnChange.offer}
          value={inputTextValue.offer}
        />
        <TextField
          label="Price"
          id="price"
          onChange={handleOnChange.price}
          placeholder="Price"
          inputText={inputTextValue.price}
        />
        <TextField
          label="Area"
          id="area"
          onChange={handleOnChange.area}
          placeholder="Area"
          inputText={inputTextValue.area}
        />
        <TextField
          label="Bedrooms"
          id="bedrooms"
          onChange={handleOnChange.bedrooms}
          placeholder="Bedrooms"
          inputText={inputTextValue.bedrooms}
        />
        <TextField
          label="Bathrooms"
          id="bathrooms"
          onChange={handleOnChange.bathrooms}
          placeholder="Bathrooms"
          inputText={inputTextValue.bathrooms}
        />
      </fieldset>
      <AmenitiesCheckboxList
        amenities={editForm.amenities}
        setEditForm={handleOnChange.amenities}
      />
      <Textarea
        label="Description"
        id="description"
        placeholder="Description"
        inputText={inputTextValue.description}
        onChange={handleOnChange.description}
      />
      <Textarea
        label="Preview"
        id="preview"
        placeholder="Preview"
        inputText={inputTextValue.preview}
        onChange={handleOnChange.preview}
      />
      <Textarea
        label="Photos"
        id="photos"
        onChange={handleOnChange.photos}
        placeholder="Property photos"
        inputText={inputTextValue.photos}
      />
      <Textarea
        label="Floorplans"
        id="floorplans"
        onChange={handleOnChange.floorplans}
        placeholder="Floorplans"
        inputText={inputTextValue.floorplans}
      />
      <Button
        className="edit-property-form__button"
        value="Edit property"
        onClick={submitForm}
        disabled={isDisabled}
      />
    </form>
  );
}
