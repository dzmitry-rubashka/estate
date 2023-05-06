import Icon from "../../../icon/icon.jsx";

export default function MessageInfoLink({ text, type, emailTitle }) {
  const href =
    type === "email"
      ? `mailto:${text}?subject=Property: ${emailTitle}`
      : `tel:${text}`;

  return (
    <li className="message__info_list-item">
      <Icon iconType={type} fill="#74777C" height="17px" width="17px" />
      <a href={href} className="message__info_link">
        {text}
      </a>
    </li>
  );
}
