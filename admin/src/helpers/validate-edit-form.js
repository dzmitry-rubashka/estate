const containsNumbers = (input) => /^\d+$/.test(input);

const startsWithZero = (input) => input.charAt(0) !== "0";

export default function validateEditForm(name, input) {
  if (input !== undefined && input !== "")
    return name === "price" || name === "area"
      ? containsNumbers(input) && startsWithZero(input)
      : containsNumbers(input);
  return true;
}
