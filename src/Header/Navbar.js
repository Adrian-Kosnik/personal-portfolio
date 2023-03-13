import React from "react";
import { Link } from "react-router-dom";
import Pdf from "../assets/Adrian-Kosnik-CV.pdf"

function Navbar() {
    return (
        <nav className="nav-outer navbar sticky-top navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">AK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav-ul navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/ProjectGallery">Projects</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/Skills">My Skills</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={Pdf} target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;