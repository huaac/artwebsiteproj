import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./img/awlHeaderLogo.gif";
import { Palette, MapPin, Pencil, PartyPopper, Brush, PenTool, CreditCard} from 'lucide-react';


function Navbar() {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <div>
      <div className="logo-container">
        <NavLink exact to="/" className="nav-logo">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-menu">
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink exact to="/" className="nav-links">
                <Palette className="nav-icon"/>
                Art Classes
              </NavLink>
              {dropdown === "home" && (
                <ul className="dropdown-menu">
                  <li><NavLink to="/regularclasses" className="dropdown-link">Regular Classes</NavLink></li>
                  <li><NavLink to="/adultclasses" className="dropdown-link">Adult Classes</NavLink></li>
                  <li><NavLink to="/charterschools" className="dropdown-link">Charter Schools</NavLink></li>
                  <li><NavLink to="/scout" className="dropdown-link">Girl & Boy Scout Classes</NavLink></li>
                </ul>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("locations")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink exact to="/locations" className="nav-links">
               <MapPin className="nav-icon"/>
                Locations
              </NavLink>
              {dropdown === "locations" && (
                <ul className="dropdown-menu">
                  <li><NavLink to="/lamesa" className="dropdown-link">La Mesa</NavLink></li>
                  <li><NavLink to="/santee" className="dropdown-link">Santee</NavLink></li>
                  <li><NavLink to="/bonita" className="dropdown-link">Bonita</NavLink></li>
                </ul>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("camps")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink exact to="/camps" className="nav-links">
                <Pencil className="nav-icon"/>
                Art Camps
              </NavLink>
              {dropdown === "camps" && (
                <ul className="dropdown-menu">
                  <li><NavLink to="/summercamps" className="dropdown-link">Summer Camps</NavLink></li>
                  <li><NavLink to="/springcamps" className="dropdown-link">Spring Camps</NavLink></li>
                  <li><NavLink to="/holidaycamps" className="dropdown-link">Holiday Camps</NavLink></li>
                </ul>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("parties")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink exact to="/parties" className="nav-links">
               <PartyPopper className="nav-icon"/>
                Art Parties
              </NavLink>
              {dropdown === "parties" && (
                <ul className="dropdown-menu">
                  <li><NavLink to="/birthdayparties" className="dropdown-link">Birthday Parties</NavLink></li>
                  <li><NavLink to="/paintparties" className="dropdown-link">Paint Parties</NavLink></li>
                </ul>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("tuition")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink exact to="/tution" className="nav-links">
               <CreditCard className="nav-icon"/>
                Tuition
              </NavLink>
              {dropdown === "tuition" && (
                <ul className="dropdown-menu">
                  <li><NavLink to="/tuitionpolicies" className="dropdown-link">Tuition Policies</NavLink></li>
                  <li><NavLink to="/paytuition" className="dropdown-link">Pay Tuition</NavLink></li>
                  <li><NavLink to="/faq" className="dropdown-link">FAQs</NavLink></li>
                </ul>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink exact to="/about" className="nav-links">
               <Brush className="nav-icon"/>
                About Us
              </NavLink>
              {dropdown === "about" && (
                <ul className="dropdown-menu">
                  <li><NavLink to="/mission" className="dropdown-link">Mission Statement</NavLink></li>
                  <li><NavLink to="/team" className="dropdown-link">Instructors</NavLink></li>
                  <li><NavLink to="/faq" className="dropdown-link">FAQs</NavLink></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
