import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./img/awlHeaderLogo.gif"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <img src={logo} alt="Logo" />
        </NavLink>
        
        {/* Navigation Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-links">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/locations" className="nav-links">
              Locations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/team" className="nav-links">
              Team
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/services" className="nav-links">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/services" className="nav-links">
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/services" className="nav-links">
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
