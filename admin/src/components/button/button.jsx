import Icon from "../icon/icon.jsx";

import "./button.css";

export default function Button({
  value,
  onClick,
  className,
  disabled,
  type,
  color,
  width,
  height,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button ${className || ""}`}
      disabled={disabled}
    >
      <Icon iconType={type} color={color} width={width} height={height} />
      {value}
    </button>
  );
}
