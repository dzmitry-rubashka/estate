import Icon from "../../../icon/icon.jsx";

export default function AgentInfoContactElement({ text, type, PropertyID }) {
  const href =
    type === "email"
      ? `mailto:${text}?subject=Property ID: ${PropertyID}`
      : `tel:${text}`;

  return (
    <li className="agent-info__contact-element">
      <Icon iconType={type} fill="#74777C" height="17px" width="17px" />
      <a href={href} className="agent-info__contact-link">
        {text}
      </a>
    </li>
  );
}
