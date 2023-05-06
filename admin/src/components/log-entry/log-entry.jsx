import LogEntryEditor from "./log-entry__editor/log-entry__editor.jsx";
import LogEntryRenderer from "./log-entry__renderer/log-entry__renderer.jsx";

export default function LogEntry({
  log,
  deleteLog,
  toggleEditMode,
  toggleDoneValue,
  saveLogContent,
}) {
  return (
    <>
      <LogEntryRenderer
        log={log}
        deleteLog={deleteLog}
        toggleEditMode={toggleEditMode}
        toggleDoneValue={toggleDoneValue}
      />
      <LogEntryEditor
        log={log}
        toggleEditMode={toggleEditMode}
        saveLogContent={saveLogContent}
      />
    </>
  );
}
