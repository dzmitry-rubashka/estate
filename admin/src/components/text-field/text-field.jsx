import { Label } from "../index.js";

import "./text-field.css";

export default function TextField({
  id,
  onChange,
  placeholder,
  inputText,
  label,
}) {
  return (
    <Label>
      {label}
      <input
        className="text-field__input"
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        autoComplete="off"
        value={inputText}
        onChange={(e) => onChange(e.target.value)}
      />
    </Label>
  );
}
