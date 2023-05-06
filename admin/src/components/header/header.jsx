import { useEffect } from "react";
import { Link } from "react-router-dom";

import { AgentBar } from "../index.js";
import logo from "./header__images/header__images_logo.svg";

import "./header.css";

export default function Header({ title, config }) {
  useEffect(() => {
    window.document.title = title;
  }, [title]);

  const logoutHandler = () => {
    window.open(`${config.URL}/api/auth/logout`, "_self");
  };

  const agentData = config ? config.agent : undefined;

  return (
    <header className="header">
      <Link to="/properties">
        <img src={logo} className="header__logo" alt="logo" />
      </Link>
      <h1 className="header__title">{title}</h1>
      <AgentBar logoutHandler={logoutHandler} agentData={agentData} />
    </header>
  );
}
