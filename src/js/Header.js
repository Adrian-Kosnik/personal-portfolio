import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./Home.js">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link active" href="/Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;