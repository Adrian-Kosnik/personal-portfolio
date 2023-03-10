import React from "react";
import "./style.css";
import Background from "../Wrapper/Background";

function Contact() {
    return (
        <Background>
            <div className="masterContainer">
                <div className="leftContainer">
                    <h1>Contact info:</h1>
                    <ul>
                        <li>Github: <a href="https://github.com/Adrian-Kosnik">https://github.com/Adrian-Kosnik</a></li>
                        <li>Linkedin: <a href="https://www.linkedin.com/in/adrian-kosnik-4a0945201/">https://www.linkedin.com/in/adrian-kosnik-4a0945201/</a></li>
                        <li>Email: <a href="mailto:adriankosnik67@gmail.com">adriankosnik67@gmail.com</a></li>
                        <li>Resume: <a href="/">My CV PDF</a></li>
                    </ul>
                </div>
                <div className="rightContainer">
                    <form>
                        <input placeholder="Your Name" />
                        <input placeholder="Your Message" />
                    </form>
                </div>
            </div>
        </Background>
    );
};

export default Contact;