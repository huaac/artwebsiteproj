import React, { useState } from "react";
import logo from "./img/awlHeaderLogo.png";
import "./Logo.css"
import TemporaryDrawer from "./Menu"

function Logo() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <div className="logo-container"> 
            <img src={logo} alt="Logo" className="logo" /> 
            <TemporaryDrawer open={drawerOpen} onClose={toggleDrawer(false)} />
      </div>
    );
}

export default Logo;