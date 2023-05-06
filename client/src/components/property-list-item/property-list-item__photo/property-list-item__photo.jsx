import { Link } from "react-router-dom";

import { Price } from "../../index.js";

import "./property-list-item__photo.css";

export default function PropertyListItemPhoto({
  propertyID,
  photoUrl,
  propertyType,
  offerType,
  price,
}) {
  return (
    <div>
      <Price propertyType={propertyType} offerType={offerType} price={price} />
      <Link to={`/property/${propertyID}`}>
        <img
          src={photoUrl}
          alt="property"
          className="property-list-item__photo"
        />
      </Link>
    </div>
  );
}
