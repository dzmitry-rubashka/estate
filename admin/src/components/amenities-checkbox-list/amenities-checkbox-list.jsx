import { CheckboxInput } from "../index.js";

import "./amenities-checkbox-list.css";

export default function AmenitiesCheckboxList({ amenities, setEditForm }) {
  const changeAmenitiesForm = (name, isChecked) => {
    setEditForm({ [name]: isChecked });
  };
  return (
    <ul className="amenities-checkbox-list">
      {Object.keys(amenities).map((amenity) => {
        return (
          <CheckboxInput
            key={amenity}
            name={amenity}
            isChecked={amenities[amenity]}
            onChange={(isChecked) => changeAmenitiesForm(amenity, isChecked)}
          />
        );
      })}
    </ul>
  );
}
