import { Link, useParams } from "react-router-dom";

import Button from "../../button/button.jsx";

import "./message__text.css";

export default function MessageText({
  message_id,
  title,
  message,
  handleMsgArchiving,
  propertyTitle,
}) {
  const { id } = useParams();
  return (
    <section className="message__text">
      <ul className="message__buttons">
        <li>
          <Link
            to={`/properties/${id}/messages/${message_id}`}
            state={{ title: propertyTitle }}
          >
            {id && <Button value="LOGS" className="message__button" />}
          </Link>
        </li>
        <li>
          <Button
            value=" ARCHIVE"
            className="message__button"
            onClick={() => handleMsgArchiving(message_id)}
          />
        </li>
      </ul>
      <h3 className="message__text_title">{title}</h3>
      <p className="message__text_message">{message}</p>
    </section>
  );
}
