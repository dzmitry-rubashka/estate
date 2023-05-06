export default function formatDate(date) {
  const rawDate = new Date(date);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return rawDate.toLocaleString([], options);
}
