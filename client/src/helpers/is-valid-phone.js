export default function isValidPhone(phone) {
  const numericPhone = phone.replace(/\D/g, "");
  if (numericPhone.length >= 7 && numericPhone.length <= 15) {
    return true;
  }
  return false;
}
