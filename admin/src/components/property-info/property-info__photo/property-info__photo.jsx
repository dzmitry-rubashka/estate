import Price from "../../price/price.jsx";

import "./property-info__photo.css";

export default function PropertyInfoPhoto({
  propertyType,
  offerType,
  price,
  photoUrl,
}) {
  return (
    <>
      <Price propertyType={propertyType} offerType={offerType} price={price} />
      <img className="property-info__photo" src={photoUrl} alt="property" />
    </>
  );
}
