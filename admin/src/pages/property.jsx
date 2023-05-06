import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  PropertyInfo,
  Page,
  LoadingSpinner,
  Pagination,
  Subtitle,
  MessageList,
  Amenities,
} from "../components";
import { chunkDataFromEnd } from "../helpers";
import { useFetch } from "../hooks";
import { AdminContext } from "../index.jsx";

function PropertyError({ error }) {
  return (
    <Page className="property" title="AGENT DASHBOARD">
      {error}
    </Page>
  );
}

export default function Property() {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const [propertyData, isPropLoading, propError] = useFetch({
    url: `/api/properties/${id}`,
  });
  const [messagesData, isMsgLoading, msgError] = useFetch({
    url: `/api/properties/${id}/messages`,
    method: undefined,
    body: undefined,
    setState: setMessages,
  });
  const { config } = useContext(AdminContext);

  async function handleMsgArchiving(messageID) {
    try {
      const response = await fetch(
        `/api/properties/${id}/messages/${messageID}`,
        { method: "DELETE" }
      );

      setMessages((prev) => {
        const newMessages = [...prev];
        return newMessages.filter((message) => {
          return message.id !== messageID;
        });
      });

      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  const navigate = useNavigate();

  const handleChangePage = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if ((!propertyData || !messagesData) && !propError && !msgError)
    return <LoadingSpinner />;
  if (propError) return <PropertyError error={`${propError}`} />;
  if (config.status !== "authenticated")
    return <PropertyError error="Please login as agent to continue" />;
  if (propertyData.property.Agent.email !== config.agent.email)
    return (
      <PropertyError error="Sorry, you do not have access to this property" />
    );

  let chunks;
  if (!msgError) {
    chunks = chunkDataFromEnd(messages);
  }

  const handleDelete = (propertyId) => {
    fetch(`/api/properties/${propertyId}`, { method: "delete" });
    navigate("/properties/");
  };

  async function handleEdit(propertyId, dataForm) {
    try {
      const response = await fetch(`/api/properties/update/${propertyId}`, {
        method: "PUT",
        body: JSON.stringify(dataForm),
        headers: { "Content-Type": "application/json" },
      });
      window.location.reload();
      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  return (
    <Page
      className="property"
      title="AGENT DASHBOARD"
      config={config}
      propertyName={propertyData.property.title}
    >
      <div className="properties__container">
        <Subtitle>Property Details</Subtitle>
        <PropertyInfo
          messagesLength={messagesData.length}
          property={propertyData.property}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <Amenities amenities={propertyData.property.amenities} />
        <Subtitle>Messages</Subtitle>
        {messages.length > 0 ? (
          <MessageList
            messages={chunks[page - 1]}
            propertyTitle={propertyData.property.title}
            handleMsgArchiving={handleMsgArchiving}
          />
        ) : (
          <i>No messages at the moment</i>
        )}
        {!msgError && (
          <Pagination
            pages={chunks.length}
            page={page}
            onChange={(pageNumber) => handleChangePage(pageNumber)}
          />
        )}
      </div>
    </Page>
  );
}
