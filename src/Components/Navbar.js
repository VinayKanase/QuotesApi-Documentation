import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Logo from "../assets/logo.png";
function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  function hamburgerHandler(closeHamburger = false) {
    if (closeHamburger === true) {
      setHamburgerActive(false);
    } else setHamburgerActive(!hamburgerActive);
  }
  return (
    <nav className={hamburgerActive ? "navbar active" : "navbar"}>
      <div className="navbar__logo">
        <Link onClick={() => hamburgerHandler(true)} to="./">
          <img src={Logo} alt="QuotesAPI Logo" />
        </Link>
      </div>
      <div className="navbar__navLinks">
        <ul>
          <li>
            <Link onClick={() => hamburgerHandler(true)} to="./">
              Home
            </Link>
          </li>

          <li>
            <Link onClick={() => hamburgerHandler(true)} to="./searchquote">
              Search for Quotes
            </Link>
          </li>
          <li>
            <Link onClick={() => hamburgerHandler(true)} to="./postquote">
              Post for Quote
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__doc">
        <Link onClick={() => hamburgerHandler(true)} to="./documentation">
          API Documentation
        </Link>
      </div>
      <div onClick={hamburgerHandler} className="navbar__hamburgerWrapper">
        <div className="navbar__hamburger"></div>
      </div>
    </nav>
  );
}

export default Navbar;
