import { formatDate } from "../../../helpers";
import LogEntryNavbar from "../log-entry__navbar/log-entry__navbar.jsx";

import "./log-entry__header.css";

export default function LogEntryHeader({
  log,
  inputValue,
  deleteLog,
  toggleEditMode,
  toggleDoneValue,
  saveLogContent,
}) {
  const headerText = log.editing
    ? "Editing..."
    : `Updated at: ${formatDate(log.updated_at)}`;
  const headerClassName =
    !log.editing && log.done ? "log-entry__header done" : "log-entry__header";
  return (
    <header className={headerClassName}>
      <h2 className="log-entry__title">{`Log No. ${log.id}`}</h2>
      {headerText}
      <LogEntryNavbar
        log={log}
        deleteLog={deleteLog}
        toggleEditMode={toggleEditMode}
        toggleDoneValue={toggleDoneValue}
        saveLogContent={saveLogContent}
        inputValue={inputValue}
      />
    </header>
  );
}
