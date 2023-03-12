import React from "react";

function Contact() {
    return (
        <div className="container outer-contact-container col-12">
            <div className="container inner-outer-contact-container col-12">
                <div className="container title-contact-container col-6">
                    <h1>Get in touch!</h1>
                    <div className="contact-lists-container">
                        <a type="button" className="email-button contact-button" href="mailto:adriankosnik67@gmail.com"><span>Email</span></a>
                        <a type="button" className="contact-button" target="blank" href="https://www.linkedin.com/in/adrian-kosnik-4a0945201/">Linkedin</a>
                        <a type="button" className="contact-button" target="blank" href="https://github.com/Adrian-Kosnik">Github</a>
                    </div>
                </div>
                <div className="container form-contact-container-container col-8">
                    <div className="container form-contact-container">
                            <div className="input-container-title">
                                <h1>Any questions?</h1>
                                <h2>If so drop me a message, I'd love to hear form you!</h2>
                            </div>
                            <form className="container">
                                <div className="name-email-container">
                                    <input className="name-input" placeholder="Name" />
                                    <input className="email-input" placeholder="Email" />
                                </div>
                                <div className="subject-container">
                                    <input className="subject-input" placeholder="Subject" />
                                </div>
                                <div className="message-container">
                                    <textarea className="message-textarea" rows="10" placeholder="Message" />
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Contact;