import { Label } from "../index.js";

import "./textarea.css";

export default function Textarea({
  id,
  placeholder,
  onChange,
  inputText,
  disabled,
  label,
}) {
  return (
    <Label>
      {label}
      <textarea
        className="textarea__input"
        id={id}
        name={id}
        placeholder={placeholder}
        defaultValue={inputText}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </Label>
  );
}
