/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../img/react-logo.png";

function Header() {
  return (
    <header className="header-wrapper">
      <nav class="header-nav-bar">
        <img className="header-logo" src={logo} alt="React logo" />
        <ul className="header-nav-bar-list">
          <li className="header-nav-bar-items">
            <a className="nav-bar-link" href="#">
              Pricing
            </a>
          </li>
          <li className="header-nav-bar-items">
            <a className="nav-bar-link" href="#">
              About
            </a>
          </li>
          <li className="header-nav-bar-items">
            <a className="nav-bar-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
