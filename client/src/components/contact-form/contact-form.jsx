import { isValidEmail, isValidPhone } from "../../helpers";
import { TextArea, TextField, Button, LoadingSpinner } from "../index.js";

import "./contact-form.css";

export default function ContactForm({
  handleContactFormInputs,
  formData,
  handleSubmit,
  isSendingMail,
}) {
  const isFormDisabled =
    !Object.values(formData).every(Boolean) ||
    !isValidPhone(formData.userPhone) ||
    !isValidEmail(formData.userEmail);

  return (
    <div className="contact-form">
      {isSendingMail ? <LoadingSpinner /> : null}
      <h2 className="contact-form__title">Contact Us</h2>
      <fieldset className="contact-form__inputs">
        <TextField
          id="userName"
          placeholder="Enter your name..."
          inputText={formData.userName}
          onChange={(inputText) =>
            handleContactFormInputs("userName", inputText)
          }
        />
        <TextField
          id="userPhone"
          placeholder="Enter your phone number..."
          inputText={formData.userPhone}
          onChange={(inputText) =>
            handleContactFormInputs("userPhone", inputText)
          }
        />
        <TextField
          id="userEmail"
          placeholder="Enter your email..."
          inputText={formData.userEmail}
          onChange={(inputText) =>
            handleContactFormInputs("userEmail", inputText)
          }
        />
        <Button
          value="Send message"
          onClick={handleSubmit}
          disabled={isFormDisabled}
        />
      </fieldset>
      <div className="contact-form__textarea_container">
        <TextArea
          id="userMessage"
          placeholder="Enter your message..."
          inputText={formData.message}
          onChange={(inputText) =>
            handleContactFormInputs("message", inputText)
          }
        />
      </div>
    </div>
  );
}
