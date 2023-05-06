import "./textarea.css";

export default function Textarea({
  id,
  placeholder,
  onChange,
  className,
  inputText,
  disabled,
}) {
  return (
    <textarea
      className={className}
      id={id}
      name={id}
      placeholder={placeholder}
      value={inputText}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
}
