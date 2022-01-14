import React from "react";
import logo from "../assets/images/lugar-logo.svg";
function Header() {
  return (
    <header>
      <div className="container">
      <div className="row align-items-center py-3" role="banner">
        <div className="col-md-5 col-12">
          <div className="header__brand">
            <img src={logo} aria-label="Lugar" alt="Lugar Logo" />
          </div>
        </div>
        <div className="col-md-7 col-12">
          <nav className="navigation navbar navbar-expand-lg">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  HOME
                </a>
              </li>{" "}
              <li className="nav-item">
                <a href="/" className="nav-link">
                  ABOUT
                </a>
              </li>{" "}
              <li className="nav-item">
                <a href="/" className="nav-link">
                  PROJECTS
                </a>
              </li>{" "}
              <li className="nav-item">
                <a href="/" className="nav-link">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
