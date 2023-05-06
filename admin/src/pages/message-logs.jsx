import { useContext, useEffect, useState } from "react";
import {
  Navigate,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  Page,
  Subtitle,
  Message,
  LogList,
  Pagination,
  LoadingSpinner,
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

export default function MessageLogs() {
  const { config } = useContext(AdminContext);
  const { property_id, message_id } = useParams();
  const { state } = useLocation();

  const [messageData, isMsgLoading, msgError] = useFetch({
    url: `/api/properties/${property_id}/messages/${message_id}`,
  });
  const [logsData, isLogsLoading, logsError] = useFetch({
    url: `/api/properties/${property_id}/messages/${message_id}/logs`,
  });
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [logs, setLogs] = useState();

  useEffect(() => {
    if (logsData) {
      setLogs(logsData.map((log) => ({ ...log, editing: false })));
    }
  }, [logsData]);
  if ((!messageData || !logsData || !logs) && (!logsError || !msgError)) {
    return <LoadingSpinner />;
  }
  if (messageData?.property_id !== Number(property_id)) {
    return <Navigate to={`/properties/${property_id}`} />;
  }
  if (config.status !== "authenticated") {
    return <PropertyError error="Please login as agent to continue" />;
  }

  const handleChangePage = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleMsgArchiving = async (id) => {
    try {
      await fetch(`/api/properties/${property_id}/messages/${id}`, {
        method: "DELETE",
      });
      navigate(`/properties/${property_id}`);
    } catch (error) {
      <PropertyError error={error} />;
    }
  };

  const createNewLog = async () => {
    try {
      const log = await fetch(
        `/api/properties/${property_id}/messages/${message_id}/logs`,
        {
          method: "POST",
          body: JSON.stringify({ content: "New log! Enter your note..." }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const newLog = await log.json();
      setLogs((prev) => [...prev, newLog.log]);
    } catch (error) {
      <PropertyError error={error} />;
    }
  };
  const deleteLog = async (id) => {
    try {
      const response = await fetch(
        `/api/properties/${property_id}/messages/${message_id}/logs/${id}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        setLogs((prev) => prev.filter((log) => log.id !== id));
      }
    } catch (error) {
      <PropertyError error={error} />;
    }
  };
  const toggleEditMode = (id) => {
    setLogs((prev) =>
      prev.map((log) =>
        log.id === id ? { ...log, editing: !log.editing } : log
      )
    );
  };
  const toggleDoneValue = async (id) => {
    const log = logs.find((item) => item.id === id);
    try {
      const response = await fetch(
        `/api/properties/${property_id}/messages/${message_id}/logs/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({ done: !log.done }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        setLogs((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
          )
        );
      }
    } catch (error) {
      <PropertyError error={error} />;
    }
  };
  const saveLogContent = async (id, newContent) => {
    try {
      const response = await fetch(
        `/api/properties/${property_id}/messages/${message_id}/logs/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({ content: newContent }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        setLogs((prev) =>
          prev.map((log) =>
            log.id === id ? { ...log, content: newContent } : log
          )
        );
        toggleEditMode(id);
      }
    } catch (error) {
      <PropertyError error={error} />;
    }
  };

  const chunks = chunkDataFromEnd(logs);

  return (
    <Page
      className="message-logs"
      title="AGENT DASHBOARD"
      config={config}
      propertyName={state.title}
    >
      <Subtitle>
        {state?.title ? state.title : `Message ID: ${messageData.id}`}
      </Subtitle>
      <Message {...messageData} handleMsgArchiving={handleMsgArchiving} />
      <Subtitle>Logs</Subtitle>
      <LogList
        logs={chunks[page - 1]}
        createNewLog={createNewLog}
        deleteLog={deleteLog}
        saveLogContent={saveLogContent}
        toggleDoneValue={toggleDoneValue}
        toggleEditMode={toggleEditMode}
      />

      {!logsError && (
        <Pagination
          pages={chunks.length}
          page={page}
          onChange={(pageNumber) => handleChangePage(pageNumber)}
        />
      )}
    </Page>
  );
}
