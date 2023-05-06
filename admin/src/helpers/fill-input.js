export default function fillInput(editFormInput, propertyInput) {
  if (editFormInput === "") return "";
  if (editFormInput === undefined) return propertyInput;
  return editFormInput;
}
