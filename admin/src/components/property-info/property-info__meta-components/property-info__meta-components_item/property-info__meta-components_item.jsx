import Icon from "../../../icon/icon.jsx";

import "./property-info__meta-components_item.css";

export default function PropertyInfoAmenitiesItem({ type, text }) {
  return (
    <li className="property-info__meta-item">
      <Icon iconType={type} width="22px" height="22px" />
      {text}
    </li>
  );
}
