import { Label } from "../index.js";
import DropDownControlItem from "./dropdown-control__item/dropdown-control__item.jsx";

import "./dropdown-control.css";

export default function DropDownControl({
  data,
  name,
  id,
  placeholder,
  onChange,
  value,
  label,
}) {
  const selectClassName =
    value === ""
      ? "dropdown-control__select dropdown-control__select_placeholder"
      : "dropdown-control__select";

  const placeholderData = {
    key: "placeholder",
    className: "dropdown-control__placeholder",
    disabled: false,
    hidden: true,
    value: placeholder,
  };

  const optionsData = data.map((option) => {
    return { key: option, value: option, id };
  });

  const options = [placeholderData, ...optionsData];
  return (
    <Label className="label__dropdown">
      {label}
      <select
        name={name}
        id={id}
        className={selectClassName}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <DropDownControlItem {...option} />
        ))}
      </select>
    </Label>
  );
}
