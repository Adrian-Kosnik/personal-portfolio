import React from "react";

function Contact() {
    return (
        <div className="masterContainer">
            <div className="leftContainer">
                <h1>Contact info:</h1>
                <ul>
                    <li>Github: <a href="https://github.com/Adrian-Kosnik">https://github.com/Adrian-Kosnik</a></li>
                    <li>Linkedin: <a href="https://www.linkedin.com/in/adrian-kosnik-4a0945201/">https://www.linkedin.com/in/adrian-kosnik-4a0945201/</a></li>
                    <li>Email: <a href="mailto:adriankosnik67@gmail.com">adriankosnik67@gmail.com</a></li>
                </ul>
            </div>
            <div className="rightContainer">
                <form>
                <input placeholder="Your Name" />
                <input placeholder="Your Message" />
                </form>
            </div>
        </div>
    );
};

export default Contact;