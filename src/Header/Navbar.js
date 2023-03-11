import React from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";

// function Navbar() {
//     return (
//         <div className="outerNavContainer">
//             <CustomLink to="/"><img src={require("../assets/icons/home.png")} className="home" /></CustomLink>
//             <CustomLink to="/ProjectGallery"><img src={require("../assets/icons/briefcase.png")} className="projects" /></CustomLink>
//             <CustomLink to="/Contact"><img src={require("../assets/icons/envelope.png")} className="contact" /></CustomLink>
//         </div>
//     );
// };

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// function CustomLink({to, children, ...props}) {
//     const resolvedPath = useResolvedPath(to);
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true })
//     return <Link className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
// };

export default Navbar;