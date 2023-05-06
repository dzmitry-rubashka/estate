import Price from "../../price/price.jsx";

import "./gallery__main-image.css";

export default function MainImage({
  mainImage,
  propertyType,
  offerType,
  price,
}) {
  return (
    <div className="gallery__main-image_container">
      <Price propertyType={propertyType} offerType={offerType} price={price} />
      <img src={mainImage} alt="main" className="gallery__main-image" />
    </div>
  );
}
