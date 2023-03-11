import React from "react";
import Background from "../Wrapper/Background";

function Contact() {
    return (
        <Background>
            <div className="masterContainer">
                <div className="details-container">
                    <h1>Contact Me</h1>
                    <ul>
                        <li>Github: <a href="https://github.com/Adrian-Kosnik">https://github.com/Adrian-Kosnik</a></li>
                        <li>Linkedin: <a href="https://www.linkedin.com/in/adrian-kosnik-4a0945201/">https://www.linkedin.com/in/adrian-kosnik-4a0945201/</a></li>
                        <li>Email: <a href="mailto:adriankosnik67@gmail.com">adriankosnik67@gmail.com</a></li>
                        <li>Resume: <a href="/">My CV PDF</a></li>
                    </ul>
                </div>
                <div className="input-container">
                    <form>
                        <div className="name-email-container">
                            <input className="name-input col-4" placeholder="Name" />
                            <input className="email-input col-4" placeholder="Email" />
                        </div>
                        <div className="subject-container">
                            <input className="subject-input col-8" placeholder="Subject" />
                        </div>
                        <div className="message-container">
                            <textarea className="message-textarea col-8" placeholder="Message" />
                        </div>
                    </form>
                </div>
            </div>
        </Background>
    );
};

export default Contact;