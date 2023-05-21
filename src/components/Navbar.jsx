import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="app_navbar">
      <div className="navbar navbar-expand-lg bg-body-tertiary navbar_container">
        <div className="container-fluid left-container">
          <a className="navbar-brand" href="/">
            EDYODA
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    option
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    option
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    option
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programs <img src="../assets/icons/dropdownIcon.png" alt="" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    option
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    option
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    option
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="container-fluid right-container justify-content-end">
          <a href="/">
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ color: "#0b0c0e" }}
            ></i>
          </a>
          <button className="login-btn">Log in</button>
          <button className="join-btn">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
