import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <div className="outerNavContainer">
            <CustomLink to="/"><img src={require("../assets/icons/home.png")} className="home" /></CustomLink>
            <CustomLink to="/ProjectGallery"><img src={require("../assets/icons/briefcase.png")} className="projects" /></CustomLink>
            <CustomLink to="/Contact"><img src={require("../assets/icons/envelope.png")} className="contact" /></CustomLink>
        </div>
    );
};

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return <Link className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
};

export default Navbar;