import "./loading-spinner.css";

export default function LoadingSpinner({ className }) {
  const spinnerClassName = className ? `spinner ${className}` : "spinner";
  return <div className={spinnerClassName} />;
}
