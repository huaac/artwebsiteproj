import React, { useState } from "react";
import {
  Palette,
  MapPin,
  Brush,
  PartyPopper,
  CreditCard,
  PenTool,
  Menu
} from "lucide-react";
import "./Navbar2.css"; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleDropdown = (tab) => {
    setIsDropdownOpen((prev) => ({ ...prev, [tab]: !prev[tab] }));
  };

  return (
    <nav className="navbar">
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li className="navbar-item dropdown">
          <button className="dropdown-btn" onClick={() => toggleDropdown("classes")}>
            <Palette className="icon" />
            Art Classes
          </button>
          {isDropdownOpen.classes && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Regular Classes</li>
              <li className="dropdown-item">Adult Classes</li>
              <li className="dropdown-item">Charter Schools</li>
              <li className="dropdown-item">Girl & Boy Scout Classes</li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown">
          <button className="dropdown-btn" onClick={() => toggleDropdown("locations")}>
            <MapPin className="icon" />
            Locations
          </button>
          {isDropdownOpen.locations && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">La Mesa</li>
              <li className="dropdown-item">Santee</li>
              <li className="dropdown-item">Bonita</li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown">
          <button className="dropdown-btn" onClick={() => toggleDropdown("camps")}>
            <Brush className="icon" />
            Art Camps
          </button>
          {isDropdownOpen.camps && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Summer Camps</li>
              <li className="dropdown-item">Spring Camps</li>
              <li className="dropdown-item">Holiday Camps</li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown">
          <button className="dropdown-btn" onClick={() => toggleDropdown("parties")}>
            <PartyPopper className="icon" />
            Art Parties
          </button>
          {isDropdownOpen.parties && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Birthday Parties</li>
              <li className="dropdown-item">Paint Parties</li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown">
          <button className="dropdown-btn" onClick={() => toggleDropdown("tuition")}>
            <CreditCard className="icon" />
            Tuition
          </button>
          {isDropdownOpen.tuition && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Tuition Policies</li>
              <li className="dropdown-item">Pay Tuition</li>
              <li className="dropdown-item">FAQs</li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown">
          <button className="dropdown-btn" onClick={() => toggleDropdown("about")}>
            <PenTool className="icon" />
            About
          </button>
          {isDropdownOpen.about && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Mission Statement</li>
              <li className="dropdown-item">Instructors</li>
              <li className="dropdown-item">FAQs</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
