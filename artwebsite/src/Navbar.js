import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./img/awlHeaderLogo.png";
import { Palette, MapPin, Pencil, PartyPopper, Brush, PenTool, CreditCard} from 'lucide-react';
import { TiPencil } from "react-icons/ti";
import navbtn from "./img/navbtn.png";


function Navbar() {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };


  const handleClick = () => {
    console.log("button is clicked");
  };

  const openNav = () => {
    document.getElementById("olNav").style.height = "100%";
  };

  const closeNav = () => {
    document.getElementById("olNav").style.height = "0%";
  };

  const dropDownONav = (iD) => {
//        const disPlay = document.getElementById(iD).style.display;
        if (document.getElementById(iD).style.display == "none") {
        document.getElementById(iD).style.display = "block";
        }
        else {
        document.getElementById(iD).style.display = "none";
        }
//        document.getElementById(iD).style.display = "block";
  };


  return (
    <div>
      <div className="logo-container">
        <NavLink exact to="/" className="nav-logo">
          <img src={logo} alt="Logo" />
        </NavLink>

        <button type="button" className="navbar-toggler" onClick={openNav}>
                <img src={navbtn} className="navbar-toggler-icon"/>
            </button>
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
                <TiPencil className="nav-icon"/>
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
      <div id="olNav" className="overlay">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <div className="overlay-content">
                <a href="javascript:void(0)" onClick={()=>dropDownONav("ArtClassItems")}>Art Classes</a>
                    <div id = "ArtClassItems" className="overlay-content-hidden">
                       <a href="/">Regular Classes</a>
                       <a href="/">Adult Classes</a>
                       <a href="/">Charter Schools</a>
                       <a href="/">Girl & Boy Scout Classes</a>
                    </div>
                <a href="javascript:void(0)" onClick={()=>dropDownONav("LocationItems")}>Locations</a>
                    <div id = "LocationItems" className="overlay-content-hidden">
                           <a href="/">La Mesa</a>
                           <a href="/">Santee</a>
                           <a href="/">Bonita</a>
                    </div>
                <a href="javascript:void(0)" onClick={()=>dropDownONav("ArtCampsItems")}>Art Camps</a>
                    <div id = "ArtCampsItems" className="overlay-content-hidden">
                           <a href="/">Summer Camps</a>
                           <a href="/">Spring Camps</a>
                           <a href="/">Holiday Camps</a>
                    </div>
                <a href="javascript:void(0)" onClick={()=>dropDownONav("ArtPartiesItems")}>Art Parties</a>
                    <div id = "ArtPartiesItems" className="overlay-content-hidden">
                           <a href="/">Birthday Parties</a>
                           <a href="/">Paint Parties</a>
                    </div>
                <a href="javascript:void(0)" onClick={()=>dropDownONav("TuitionItems")}>Tuition</a>
                    <div id = "TuitionItems" className="overlay-content-hidden">
                           <a href="/">Tuition Policies</a>
                           <a href="/">Pay Tuition</a>
                           <a href="/">FAQs</a>
                    </div>
                <a href="javascript:void(0)" onClick={()=>dropDownONav("AboutUsItems")}>About Us</a>
                    <div id = "AboutUsItems" className="overlay-content-hidden">
                           <a href="/">Mission Statement</a>
                           <a href="/">Instructors</a>
                           <a href="/">FAQs</a>
                    </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
