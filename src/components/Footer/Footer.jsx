import React from "react";
import "../../styles/Footer.scss";

const Footer = () => {
    return (
        <section className="contactUs">
            <p className="pContact">Contact us</p>

            <section className="wrapper">
                <section className="firstContainer">
                    <div className="contactConteiner">
                        <p className="element">The Met Fifth Avenue</p>
                        <p className="element">Phone</p>
                        <p className="element">+1 212-535-7710</p>
                        <p className="element">Address</p>
                        <p className="element">1000 Fifth Avenue
                            New York, NY 10028</p>
                    </div>
                    <div className="contactConteiner">
                        <p className="element">The Met Cloisters</p>
                        <p className="element">Phone</p>
                        <p className="element">+1 212-923-3700</p>
                        <p className="element">Address</p>
                        <p className="element">99 Margaret Corbin Drive
                            Fort Tryon Park New York, NY 10040</p>
                    </div>
                </section>

                <section className="formCallback">
                    <form className="contactForm">
                        <input type="text" name="name" placeholder="Name" className="inputField nameField" />
                        <input type="email" name="email" placeholder="Email" className="inputField emailField" />
                        <textarea name="message" placeholder="Message" className="inputField messageField"></textarea>
                        <button type="submit" className="submitButton">Send</button>
                    </form>
                </section>

            </section>
            <div className="footerImg"></div>
        </section>
    );
};

export default Footer;