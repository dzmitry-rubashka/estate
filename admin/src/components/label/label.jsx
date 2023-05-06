import "./label.css";

export default function Label({ className, children }) {
  return <label className={`label ${className}`}>{children}</label>;
}
