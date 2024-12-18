import React from "react"
import logo from "./img/awlHeaderLogo.png";
import "./Logo.css"

function Logo() {
    return (
        <div className="logo-container"> 
            <img src={logo} alt="Logo" className="logo" /> 
        </div>
    );
}

export default Logo;