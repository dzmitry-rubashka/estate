import { useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "./header__images/header__images_logo.svg";

import "./header.css";

export default function Header({ title }) {
  useEffect(() => {
    window.document.title = title;
  }, [title]);
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <h1 className="header__title">{title}</h1>
      </div>
    </header>
  );
}
