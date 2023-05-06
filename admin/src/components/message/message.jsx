import MessageInfo from "./message__info/message__info.jsx";
import MessageText from "./message__text/message__text.jsx";

import "./message.css";

export default function Message(message) {
  return (
    <div className="message__container">
      <MessageInfo {...message} />
      <MessageText
        title={`Message from ${message.username}`}
        propertyTitle={message.propertyTitle}
        message={message.message}
        handleMsgArchiving={message.handleMsgArchiving}
        message_id={message.id}
      />
    </div>
  );
}
