import React from "react";

function Home() {
    return (
        <div className="container text-center homeContainer">
            <div className="row titleText">
                <div className="col">
                    <h1>
                        Hi! It's me Adrian, and this is my Portfolio. <br/>
                        I enjoy building websites just like this one! <br/>
                        I hope you have as much fun checking it out as I did building it!
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col imageDiv"></div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default Home;