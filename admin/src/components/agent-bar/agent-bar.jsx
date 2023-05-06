import { Button } from "../index.js";

import "./agent-bar.css";

export default function AgentBar({ logoutHandler, agentData }) {
  if (!agentData) return null;

  return (
    <nav className="agent-bar">
      <img
        src={agentData.photo_url}
        alt={`${agentData.first_name} ${agentData.last_name} avatar`}
        className="agent-bar__avatar"
      />
      {`${agentData.first_name} ${agentData.last_name}`}
      <br />
      {agentData.email}
      <Button
        className="agent-bar__logout"
        value="logout"
        onClick={logoutHandler}
      />
    </nav>
  );
}
