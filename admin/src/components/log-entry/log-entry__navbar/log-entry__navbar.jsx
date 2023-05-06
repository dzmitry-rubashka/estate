import { Button } from "../../index.js";

import "./log-entry__navbar.css";

export default function LogEntryNavbar({
  log,
  deleteLog,
  toggleEditMode,
  toggleDoneValue,
  saveLogContent,
  inputValue,
}) {
  const classNameOnEditing = log.editing ? "visible" : "not-visible";
  const classNameOnRendering = log.editing ? "not-visible" : "visible";
  const typeIconDone = log.done ? "done" : "not-done";
  return (
    <nav className="log-entry__buttons">
      <Button
        className={`log-entry__button ${classNameOnRendering}`}
        type={typeIconDone}
        height="16px"
        width="16px"
        onClick={() => toggleDoneValue(log.id)}
      />
      <Button
        className={`log-entry__button ${classNameOnRendering}`}
        type="edit"
        height="16px"
        width="16px"
        onClick={() => toggleEditMode(log.id)}
      />
      <Button
        className={`log-entry__button ${classNameOnRendering}`}
        type="delete"
        height="16px"
        width="16px"
        onClick={() => deleteLog(log.id)}
      />

      <Button
        className={`log-entry__button ${classNameOnEditing}`}
        type="approve"
        height="16px"
        width="16px"
        onClick={() => saveLogContent(log.id, inputValue)}
      />
      <Button
        className={`log-entry__button ${classNameOnEditing}`}
        type="cancel"
        height="16px"
        width="16px"
        onClick={() => toggleEditMode(log.id)}
      />
    </nav>
  );
}
