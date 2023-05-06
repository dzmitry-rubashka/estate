import { useEffect, useState } from "react";

import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

import { Header, LogEntry, LoadingSpinner, Button } from "../components";
import { useFetch } from "../hooks";

export default function Test() {
  const [logsData, loading, error] = useFetch({
    url: "/api/properties/6/messages/6/logs",
  });
  const [logs, setLogs] = useState();
  const [editorValue, setEditorValue] = useState("**Hello wordl!!!**");
  useEffect(() => {
    if (logsData) {
      setLogs(logsData.map((log) => ({ ...log, editing: false })).reverse());
    }
  }, [logsData]);

  if (!logsData || !logs) {
    return <LoadingSpinner />;
  }

  const createNewLog = async () => {
    try {
      const log = await fetch(`/api/properties/6/messages/6/logs`, {
        method: "POST",
        body: JSON.stringify({ content: "New log! Enter your note..." }),
        headers: { "Content-Type": "application/json" },
      });
      const newLog = await log.json();
      setLogs((prev) => [newLog.log, ...prev]);
    } catch (error) {}
  };
  const deleteLog = async (id) => {
    try {
      const response = await fetch(`api/properties/6/messages/6/logs/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setLogs((prev) => prev.filter((log) => log.id !== id));
      }
    } catch (error) {}
  };
  const toggleEditMode = (id) => {
    setLogs((prev) =>
      prev.map((log) =>
        log.id === id ? { ...log, editing: !log.editing } : log
      )
    );
  };
  const toggleDoneValue = async (id) => {
    const log = logs.find((log) => log.id === id);
    try {
      const response = await fetch(`/api/properties/6/messages/6/logs/${id}`, {
        method: "PUT",
        body: JSON.stringify({ done: !log.done }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        setLogs((prev) =>
          prev.map((log) => (log.id === id ? { ...log, done: !log.done } : log))
        );
      }
    } catch (error) {}
  };
  const saveLogContent = async (id, newContent) => {
    try {
      const response = await fetch(`/api/properties/6/messages/6/logs/${id}`, {
        method: "PUT",
        body: JSON.stringify({ content: newContent }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        setLogs((prev) =>
          prev.map((log) =>
            log.id === id ? { ...log, content: newContent } : log
          )
        );
        toggleEditMode(id);
      }
    } catch (error) {}
  };
  return (
    <main>
      <Header title="test page" />
      <Button value="Add new log" onClick={createNewLog} />
      {logs.map((log) => (
        <LogEntry
          key={log.id}
          log={{ ...log }}
          deleteLog={deleteLog}
          toggleEditMode={toggleEditMode}
          toggleDoneValue={toggleDoneValue}
          saveLogContent={saveLogContent}
        />
      ))}
      <br />
      <MDEditor value={editorValue} onChange={setEditorValue} />
      <br />
      <MDEditor.Markdown
        source={editorValue}
        style={{ whiteSpace: "pre-wrap" }}
      />
    </main>
  );
}
