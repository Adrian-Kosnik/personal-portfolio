import React from "react";
import Wrapper from "../Wrapper/Wrapper";

function Home() {
    return (
        <>
            <div className="homeContainer">
                <div className="titleText">
                    <h1>
                        Hi! It's me Adrian, and this is my Portfolio. <br/>
                        I enjoy building web apps and websites just like this one! <br/>
                        I hope you have as much fun checking it out as I did building it!
                    </h1>
                </div>
                <div className="image">
                    <img src="https://via.placeholder.com/500x500" alt="Adrian Kosnik looking at you" />
                </div>
            </div>
        </>
    );
};

export default Home;