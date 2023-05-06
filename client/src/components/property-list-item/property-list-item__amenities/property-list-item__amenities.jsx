import { Icon } from "../../index.js";

import "./property-list-item__amenities.css";

export default function PropertyListItemAmenities({
  area,
  bedrooms,
  bathrooms,
}) {
  return (
    <ul className="property-list-item__amenities-container">
      <li className="property-list-item__amenities">
        <Icon iconType="area" /> <span>{area} ft&#178;</span>
      </li>
      <li className="property-list-item__amenities">
        <Icon iconType="bed" /> <span>{bedrooms}</span>
      </li>
      <li className="property-list-item__amenities">
        <Icon iconType="bathroom" /> <span>{bathrooms}</span>
      </li>
    </ul>
  );
}
