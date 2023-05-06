import { useState } from "react";

import { Editor } from "../../index.js";
import LogEntryHeader from "../log-entry__header/log-entry__header.jsx";

export default function LogEntryEditor({
  log,
  toggleEditMode,
  saveLogContent,
}) {
  const [inputValue, setInputValue] = useState(log.content);
  if (!log.editing) return null;
  return (
    <>
      <LogEntryHeader
        log={log}
        saveLogContent={saveLogContent}
        toggleEditMode={toggleEditMode}
        inputValue={inputValue}
      />
      <Editor setValue={setInputValue} value={inputValue} isEditorOpen />
    </>
  );
}
