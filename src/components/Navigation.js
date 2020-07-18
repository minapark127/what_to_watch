import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="header__nav">
      <Link to="/">
        <h1 className="header__logo">what to watch</h1>
      </Link>
      <Link to="/about">About</Link>
    </header>
  );
}

export default Navigation;
