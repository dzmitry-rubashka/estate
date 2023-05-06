import ContactForm from "../contact-form/contact-form.jsx";
import AgentInfoContact from "./agent-info__contact/agent-info__contact.jsx";
import AgentInfoName from "./agent-info__name/agent-info__name.jsx";

import "./agent-info.css";

export default function AgentInfo({
  first_name,
  last_name,
  email,
  phone,
  photo_url,
  handleContactFormInputs,
  formData,
  handleSubmit,
  isSendingMail,
  respondFromSendingMail,
  errorFromSendingMail,
  propertyId,
  Location,
}) {
  const agentFullName = `${first_name} ${last_name}`;
  const agentLocation = `${Location.city}, ${Location.country}`;

  return (
    <div className="agent-info__container">
      <div className="agent-info">
        <img
          src={photo_url}
          alt={`${last_name}_agent_photo`}
          className="agent-info__photo"
        />
        <div className="agent-info__text">
          <AgentInfoName
            agentName={agentFullName}
            agentLocation={agentLocation}
          />
          <hr />
          <AgentInfoContact
            agentEmail={email}
            agentPhone={phone}
            PropertyID={propertyId}
          />
        </div>
      </div>
      <ContactForm
        handleContactFormInputs={handleContactFormInputs}
        formData={formData}
        handleSubmit={handleSubmit}
        isSendingMail={isSendingMail}
        respondFromSendingMail={respondFromSendingMail}
        errorFromSendingMail={errorFromSendingMail}
      />
    </div>
  );
}
