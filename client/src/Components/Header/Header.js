import React from "react";
import { Link } from "react-router-dom";
import images from "../../images/images";
import "./Header.css";

const Header = () => {
  return (
    <div className="navWrap">
      <nav className="d-none d-md-block">
        <div className="laptopItems">
          <div className="logo">
            <Link to="/">
              <img src={images.HomeLogo} alt="logo" />
            </Link>
          </div>
          <ul className="menu">
            <li className="text-decoration-none">
              <Link to="/">Home</Link>
            </li>
            <li>How it Works</li>
            <div className="logout">
              <a href="/signup">Logout</a>
            </div>
          </ul>
        </div>
      </nav>

      <nav className="d-sm-block d-md-none">
        <div className="navItems">
          <div className="logo">
            <img src={images.HomeLogo} alt="logo" />
          </div>

          <div className="dropdown">
            <button
              className="btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="biList bi-list"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="/" className="dropdown-item">
                  Home
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/HowItWorks">
                  How it Works
                </Link>
              </li>
              <li>
                <Link className="dropdown-item logoutPhone" to="/signup">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
