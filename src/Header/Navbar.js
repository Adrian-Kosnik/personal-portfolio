import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div className="outerNavContainer">
            <h1>Hi im here</h1>
            <img src={require("../assets/icons/home.png")} className="home" />
            <img src={require("../assets/icons/briefcase.png")} className="projects" />
            <img src={require("../assets/icons/envelope.png")} className="contact" />
        </div>
    );
};

export default Navbar;