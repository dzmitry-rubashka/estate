import PropertyInfoAmenitiesItem from "./property-info__meta-components_item/property-info__meta-components_item.jsx";

import "./property-info__meta-components.css";

export default function PropertyInfoAmenities({
  area,
  bedrooms,
  bathrooms,
  propertyID,
  propertyType,
}) {
  return (
    <ul className="property-info__meta-components">
      <PropertyInfoAmenitiesItem type={propertyType} text={propertyType} />
      <hr />
      <PropertyInfoAmenitiesItem type="area" text={area} />
      <hr />
      <PropertyInfoAmenitiesItem type="bed" text={bedrooms} />
      <hr />
      <PropertyInfoAmenitiesItem type="bathroom" text={bathrooms} />
      <li className="property-info__meta-component-id">ID: {propertyID}</li>
    </ul>
  );
}
