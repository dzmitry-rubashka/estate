import MDEditor from "@uiw/react-md-editor";

import LogEntryHeader from "../log-entry__header/log-entry__header.jsx";

import "./log-entry__renderer.css";

export default function LogEntryRenderer({
  log,
  deleteLog,
  toggleEditMode,
  toggleDoneValue,
}) {
  const textClass = log.done ? "log-entry__text done" : "log-entry__text";
  if (log.editing) return null;
  return (
    <>
      <LogEntryHeader
        log={log}
        deleteLog={deleteLog}
        toggleEditMode={toggleEditMode}
        toggleDoneValue={toggleDoneValue}
      />
      <MDEditor.Markdown source={log.content} className={textClass} />
    </>
  );
}
