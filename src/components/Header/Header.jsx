import React, { useState, useEffect } from "react";
import "../../styles/Header.scss";
import iconPhone from "/public/images/Icon-Phone-call.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);

    return (
        <header>
            <div className="mainImg"></div>

            <section className="topOfHeader">
                <div className="logoOfHeader">
                    <p className="textLogo">THE</p>
                    <p className="textLogo">MET</p>
                </div>
                <div className="navigationOfHeader">
                    <div>
                        <img className="iconPhone" src={iconPhone} alt="Phone Icon" />
                    </div>
                    <div className="burgerMenu">
                        <button onClick={toggleMenu} className={`burgerButton ${isMenuOpen ? "open" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Now on view</a></li>
                                <li><a href="#">Explore Online</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                            <div className="firstContact">
                                <p className="firstP">The Met Fifth Avenue</p>
                                <p className="firstP">+1 212-535-7710</p>

                                <p className="firstP">The Met Cloisters</p>
                                <p className="firstP">+1 212-923-3700</p>
                            </div>
                            <p className="footerLink">call to order</p>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="mainOfHeader">
                <p className="h1Text">Welcome</p>
                <p className="h1Text">to The MET</p>
            </section>
        </header>
    );
};

export default Header;
