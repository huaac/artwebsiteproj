import React from 'react';
import './../App.css'; // Your custom CSS
//import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from "../img/awlHeaderLogo.gif"

function Navbar() {
  return (
    <div className="App">
      <header className="row navbar-expand-md navbar">
        <div className="col-6">
          <img src={logo} alt="Header Logo" className="header-logo" />
        </div>

        <button
          type="button"
          className="navbar-toggler justify-content-between col-2"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="header-nav-wrapper collapse navbar-collapse ms-auto col-6" id="navbarCollapse">
          <nav className="header-nav-list">
            <div className="header-nav-item">
              <a href="/">Home</a>
            </div>
            <div className="header-nav-item dropdown">
              <a href="/location-page">Locations</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="header-nav-item">
              <a href="/team">Team</a>
            </div>
            <div className="header-nav-item">
              <a href="/services">Services</a>
            </div>
            <div className="header-nav-item">
              <a href="/faq">FAQ</a>
            </div>
          </nav>
        </div>
      </header>
      </div>
  )}
  export default Navbar;