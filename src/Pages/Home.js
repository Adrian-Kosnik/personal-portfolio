import React from "react";
import Background from "../Wrapper/Background";
import "./style.css";

function Home() {
    return (
        <>
            <Background className="">
            {/* <div className="container homeContainer col-10"> */}
                <div className="titleContainer">
                    <h1>Adrian Kosnik</h1>
                    <h2>Junior Web Developer</h2>
                    <h3>That builds things for the internet.</h3>
                </div>
                <img className="portrait" src={require("../assets/images/adriankosnik-photo-small.JPG")} />
            {/* </div> */}
            </Background>
        </>
    );
};

export default Home;