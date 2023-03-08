import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/ProjectGallery">Projects</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/Contact">Contact</CustomLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return <Link className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
};

export default Header;