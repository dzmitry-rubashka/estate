import Message from "../message/message.jsx";

import "./message-list.css";

export default function MessageList({
  messages,
  handleMsgArchiving,
  propertyTitle,
}) {
  return (
    <div className="message-list__container">
      {messages &&
        messages.map((message) => {
          return (
            <Message
              propertyTitle={propertyTitle}
              key={message.id}
              {...message}
              handleMsgArchiving={handleMsgArchiving}
            />
          );
        })}
    </div>
  );
}
