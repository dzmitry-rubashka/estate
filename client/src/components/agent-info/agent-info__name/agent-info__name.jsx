import "./agent-info__name.css";

export default function AgentInfoName({ agentName, agentLocation }) {
  return (
    <>
      <h2 className="agent-info__name">{agentName}</h2>
      <h3 className="agent-info__location">{agentLocation}</h3>
    </>
  );
}
