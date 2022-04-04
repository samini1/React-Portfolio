import React from "react";
import Nav from "./Nav";

function Header() {
    return (
        <header>
            <div className="header-bar">
              <h1>Syrous Amini</h1>  
            </div>
            <Nav></Nav>
        </header>
    );
}

export default Header;