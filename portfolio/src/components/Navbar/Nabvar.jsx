import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Navbar = ({ switchTheme, theme }) => {
  const [toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Sifat
        </Link>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <button
                className="nav__link theme-switcher"
                onClick={() => switchTheme()}
              >
                <i
                  className={`uil uil-${
                    theme === "dark" ? "sun" : "moon"
                  } nav__icon`}
                ></i>
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
