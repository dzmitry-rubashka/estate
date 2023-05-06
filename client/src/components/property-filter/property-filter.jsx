import { useState } from "react";

import { Button, DropDownControl, Subtitle, TextField } from "../index.js";

import "./property-filter.css";

export default function PropertyFilter({
  handleFilterParams,
  handleIsButtonClicked,
  searchParams,
}) {
  const [values, setValues] = useState({
    title: "",
    type: "",
    offer: "",
    minPrice: "",
    maxPrice: "",
    bathrooms: "",
    bedrooms: "",
    minArea: "",
    maxArea: "",
  });

  const pricesArray = [
    "$200 000",
    "$300 000",
    "$500 000",
    "$750 000",
    "$1 000 000",
    "$2 000 000",
    "$3 000 000",
    "$5 000 000",
    "$10 000 000",
  ];
  const areasArray = [
    "500",
    "1000",
    "1500",
    "2000",
    "3000",
    "5000",
    "7500",
    "10000",
    "15000",
  ];

  const onChangeDropdown = (event) => {
    setValues((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const onChangeTextField = (key, text) => {
    setValues({ ...values, ...{ [key]: text } });
  };

  const onClickSearchButton = () => {
    const filteredStateObject = Object.keys(values).reduce(
      (result, property) => {
        if (values[property] !== "") {
          if (property === "minPrice" || property === "maxPrice") {
            result[property] = values[property].replaceAll(/[^A-Z0-9]/gi, "");
          } else {
            result[property] = values[property];
          }
        }
        return result;
      },
      {}
    );
    handleIsButtonClicked();
    handleFilterParams(filteredStateObject);
  };

  const onClickClearButton = () => {
    setValues({
      title: "",
      type: "",
      offer: "",
      minPrice: "",
      maxPrice: "",
      bathrooms: "",
      bedrooms: "",
      minArea: "",
      maxArea: "",
    });
    handleIsButtonClicked();
    handleFilterParams();
  };

  const isClearButtonVisable =
    !Object.values(values).every((item) => item === "") ||
    Object.keys([...searchParams]).length > 1;

  return (
    <aside className="property-filter__container">
      <Subtitle>property search</Subtitle>
      <fieldset className="property-filter__grid-container">
        <div className="property-filter__propertyTitle">
          <TextField
            id="propertyTitle"
            placeholder="Property Title"
            inputText={values.title}
            onChange={(inputText) => onChangeTextField("title", inputText)}
          />
        </div>
        <div className="property-filter__propertyType">
          <DropDownControl
            id="propertyType"
            name="type"
            placeholder="Type"
            data={["townhouse", "apartment", "business", "house"]}
            onChange={onChangeDropdown}
            value={values.type}
          />
        </div>
        <div className="property-filter__offerType">
          <DropDownControl
            id="offerType"
            name="offer"
            placeholder="Offer Type"
            data={["sale", "rent"]}
            onChange={onChangeDropdown}
            value={values.offer}
          />
        </div>
        <div className="property-filter__minPrice">
          <DropDownControl
            id="minPrice"
            name="minPrice"
            placeholder="Min Price"
            data={pricesArray}
            onChange={onChangeDropdown}
            value={values.minPrice}
          />
        </div>
        <div className="property-filter__maxPrice">
          <DropDownControl
            id="maxPrice"
            name="maxPrice"
            placeholder="Max Price"
            data={pricesArray}
            onChange={onChangeDropdown}
            value={values.maxPrice}
          />
        </div>
        <div className="property-filter__bathrooms">
          <TextField
            id="bathrooms"
            placeholder="Bathrooms"
            inputText={values.bathrooms}
            onChange={(inputText) => onChangeTextField("bathrooms", inputText)}
          />
        </div>
        <div className="property-filter__bedrooms">
          <TextField
            id="bedrooms"
            placeholder="Bedrooms"
            inputText={values.bedrooms}
            onChange={(inputText) => onChangeTextField("bedrooms", inputText)}
          />
        </div>
        <div className="property-filter__minArea">
          <DropDownControl
            id="minArea"
            name="minArea"
            placeholder="Min Area, ft&sup2;"
            data={areasArray}
            onChange={onChangeDropdown}
            value={values.minArea}
          />
        </div>
        <div className="property-filter__maxArea">
          <DropDownControl
            id="minArea"
            name="maxArea"
            placeholder="Max Area, ft&sup2;"
            data={areasArray}
            onChange={onChangeDropdown}
            value={values.maxArea}
          />
        </div>
      </fieldset>

      <div>
        <Button
          onClick={onClickSearchButton}
          value="Search"
          className="property-filter__button"
        />
      </div>
      {isClearButtonVisable ? (
        <div>
          <Button
            onClick={onClickClearButton}
            value="Clear"
            className="property-filter__button"
          />
        </div>
      ) : null}
    </aside>
  );
}
