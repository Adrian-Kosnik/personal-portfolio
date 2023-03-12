import React from "react";

function Contact() {
    return (
        // <div className="masterContainer">
        //     <div className="details-container">
        //         <h1>Contact Me</h1>
        //         <ul>
        //             <li>Github: <a href="https://github.com/Adrian-Kosnik">https://github.com/Adrian-Kosnik</a></li>
        //             <li>Linkedin: <a href="https://www.linkedin.com/in/adrian-kosnik-4a0945201/">https://www.linkedin.com/in/adrian-kosnik-4a0945201/</a></li>
        //             <li>Email: <a href="mailto:adriankosnik67@gmail.com">adriankosnik67@gmail.com</a></li>
        //             <li>Resume: <a href="/">My CV PDF</a></li>
        //         </ul>
        //     </div>
            // <div className="input-container">
            //     <form>
            //         <div className="name-email-container">
            //             <input className="name-input col-4" placeholder="Name" />
            //             <input className="email-input col-4" placeholder="Email" />
            //         </div>
            //         <div className="subject-container">
            //             <input className="subject-input col-8" placeholder="Subject" />
            //         </div>
            //         <div className="message-container">
            //             <textarea className="message-textarea col-8" placeholder="Message" />
            //         </div>
            //     </form>
            // </div>
        // </div>
        <div className="container outer-contact-container col-12">
            <div className="container inner-outer-contact-container col-12">
                <div className="container title-contact-container col-6">
                    <h1>Get in touch!</h1>
                    <div className="contact-lists-container">
                        {/* <ul className="contact-list-titles">
                            <li>Email</li>
                            <li>Linkedin</li>
                            <li>Github</li>
                        </ul>
                        <ul className="contact-list-values">
                            <li><a href="mailto:adriankosnik67@gmail.com">adriankosnik67@gmail.com</a></li>
                            <li><a href="https://www.linkedin.com/in/adrian-kosnik-4a0945201/">linkedin.com/in/adrian-kosnik-4a0945201</a></li>
                            <li><a href="https://github.com/Adrian-Kosnik">github.com/Adrian-Kosnik</a></li>
                        </ul> */}
                        <a className="contact-button" href="mailto:adriankosnik67@gmail.com">Email</a>
                        <a className="contact-button" href="mailto:adriankosnik67@gmail.com">Linkedin</a>
                        <a className="contact-button" href="mailto:adriankosnik67@gmail.com">Github</a>
                    </div>
                </div>
                <div className="container form-contact-container-container col-8">
                    <div className="container form-contact-container">
                            <div className="input-container-title">
                                <h1>Any questions?</h1>
                                <h2>If so drop me a message, I'd love to hear form you!</h2>
                            </div>
                            <form className="container ">
                                <div className="name-email-container">
                                    <input className="name-input" placeholder="Name" />
                                </div>
                                <div className="name-email-container">
                                    <input className="email-input" placeholder="Email" />
                                </div>
                                <div className="subject-container">
                                    <input className="subject-input" placeholder="Subject" />
                                </div>
                                <div className="message-container">
                                    <input className="message-textarea" placeholder="Message" />
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Contact;