export default function isFormFilled(form) {
  return Object.values(form).some(
    (value) =>
      (Array.isArray(value) && value.includes("")) ||
      (typeof value === "string" && value === "")
  );
}
