import { Icon } from "../index.js";

import "./price.css";

export default function Price({ propertyType, offerType, price }) {
  return (
    <div className="price__label">
      <div>
        <Icon iconType={propertyType} fill="#ffffff" fillOpacity="0.6" />{" "}
        <span className="price__offer-type">For {offerType}</span>
      </div>
      <span className="price__price">{price} $</span>
    </div>
  );
}
