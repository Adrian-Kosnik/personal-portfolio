import React from "react";

function Home() {
    return (
        <div className="outer-outerHomeContainer">
            <div className="outerHomeContainer">
                <div className="titleContainer">
                    <h1>Adrian Kosnik</h1>
                    <h2>Junior Web Developer</h2>
                    <h3>That builds things for the internet.</h3>
                </div>
                <img className="portrait" src={require("../assets/images/adriankosnik-photo-small.JPG")} />
            </div>
        </div>
    );
};

export default Home;