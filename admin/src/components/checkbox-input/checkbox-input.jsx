import { Label } from "../index.js";

import "./checkbox-input.css";

export default function CheckboxInput({ name, isChecked, onChange }) {
  return (
    <Label className="label__checkbox">
      <input
        className="checkbox-input"
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {name}
    </Label>
  );
}
