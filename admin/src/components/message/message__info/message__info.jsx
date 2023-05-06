import Icon from "../../icon/icon.jsx";
import MessageInfoLink from "./message__info_link/message__info_link.jsx";

import "./message__info.css";

export default function MessageInfo({
  id,
  username,
  phone,
  email,
  property_id,
}) {
  return (
    <section className="message__info">
      <ul className="message__info_list">
        <li className="message__info_list-item">message ID: {id}</li>
        <li className="message__info_list-item">
          <Icon iconType="user" fill="#74777C" height="16px" width="16px" />
          {username}
        </li>
        <MessageInfoLink type="email" text={email} emailTitle={property_id} />
        <MessageInfoLink type="phone" text={phone} />
      </ul>
    </section>
  );
}
