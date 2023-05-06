import { Button, LogEntry } from "../index.js";

import "./log-list.css";

export default function LogList({
  logs,
  createNewLog,
  deleteLog,
  saveLogContent,
  toggleDoneValue,
  toggleEditMode,
}) {
  return (
    <section className="log-list__section">
      <Button onClick={createNewLog} className="log-list__button" value="+" />
      <ul className="log-list">
        {logs ? (
          logs.map((log) => (
            <LogEntry
              log={log}
              key={log.id}
              deleteLog={deleteLog}
              saveLogContent={saveLogContent}
              toggleDoneValue={toggleDoneValue}
              toggleEditMode={toggleEditMode}
            />
          ))
        ) : (
          <i>No logs at the moment</i>
        )}
      </ul>
    </section>
  );
}
