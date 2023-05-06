import AgentInfoContactElement from "./agent-info__contact_element/agent-info__contact_element.jsx";

import "./agent-info__contact.css";

export default function AgentInfoContact({
  agentPhone,
  agentEmail,
  PropertyID,
}) {
  return (
    <div className="agent-info__contact">
      <AgentInfoContactElement
        type="email"
        text={agentEmail}
        PropertyID={PropertyID}
      />
      <AgentInfoContactElement type="phone" text={agentPhone} />
    </div>
  );
}
