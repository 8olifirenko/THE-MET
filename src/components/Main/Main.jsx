import React from "react";
import "../../styles/Main.scss";
import layer1 from "/public/images/layer1.jpg";
import layer2 from "/public/images/layer2.jpg";
import layer3 from "/public/images/layer3.jpg";
import layer4 from "/public/images/layer4.jpg";
import layer5 from "/public/images/layer5.jpg";
import layer6 from "/public/images/layer6.jpg";
import layer7 from "/public/images/layer7.jpg";
import layer8 from "/public/images/layer8.jpg";
import layer9 from "/public/images/layer9.jpg";
import layer10 from "/public/images/layer10.jpg";

const Main = () => {
    return (
        <section>
            <section className="museumHours">
                <div className="hoursContainer">
                    <p className="topText">Plan your visit</p>
                    <p className="h1Hours">Museum hours</p>
                </div>
                <div className="calendar">
                    <p className="fifthAvenue">The Met Fifth Avenue</p>
                    <div className="firsrCalendar">
                        <div className="firstData">
                            <ul>
                                <li><b>10 am - 5 pm</b></li>
                                <li><b>10 am - 9 pm</b></li>
                                <li><b>Closed</b></li>
                            </ul>
                        </div>
                        <div className="secondData">
                            <ul>
                                <li>Sun, Mon, Tue, Thu</li>
                                <li>Fri, Sat</li>
                                <li>Wen</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="closed">Closed on</p>
                        <p className="days">Thanksgiving Day, Dec 25, Jan 1, and the first Monday in May.</p>
                    </div>

                    <p className="fifthAvenue">The Met Cloisters</p>
                    <div className="secondCalendar">
                        <div className="firstData">
                            <ul>
                                <li><b>10 am – 4.30 pm</b></li>
                                <li><b>Closed</b></li>
                            </ul>
                        </div>
                        <div className="secondData">
                            <ul>
                                <li>Thu - Tue</li>
                                <li>Wen</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="closed">Closed on</p>
                        <p className="days">Thanksgiving Day, Dec 25, Jan 1</p>
                    </div>
                </div>
            </section>

            <section className="nowOnView">
                <div className="mainText">
                    <p className="firstText">Now On View</p>
                    <p className="secondText">Explore exhibition gallery guides, videos, articles, and more.</p>
                </div>

                <div className="firstGallary">
                    <div className="imgContainer">
                        <img className="imgGallary" src={layer1} alt="Image 1" />
                        <img className="imgGallary" src={layer2} alt="Image 2" />
                    </div>
                    <div className="underImg">
                        <p className="under">A New Look at Old Masters</p>
                        <p className="under">December 12, 2020 – Through Spring 2023</p>
                    </div>

                    <div className="imgContainer">
                        <img className="imgGallary2" src={layer3} alt="Image 1" />
                        <img className="imgGallary2" src={layer4} alt="Image 2" />
                        <img className="imgGallary2" src={layer5} alt="Image 3" />
                    </div>
                    <div className="underImg">
                        <p className="under">Bodhisattvas of Wisdom, Compassion, and Power</p>
                        <p className="under">March 27, 2021 – October 30, 2022</p>
                    </div>

                    <div className="imgContainer">
                        <img className="imgGallary" src={layer6} alt="Image 1" />
                        <img className="imgGallary" src={layer7} alt="Image 2" />
                    </div>
                    <div className="underImg">
                        <p className="under">Inspiring Walt Disney:
                            The Animation of French Decorative Arts</p>
                        <p className="under">December 10, 2021 – March 6, 2022</p>
                    </div>
                    <div className="button">
                        <button className="buttonGallary">View all exhibitions</button>
                    </div>
                </div>
            </section>

            <section className="moreToExploreOnline">
                <p className="mainHead">More to Explore Online</p>
                <div className="wrapper">
                    <div className="wrapper2">
                        <div className="container">
                            <img className="singlImg" src={layer8} alt="Image 1" />
                        </div>
                        <div className="underImg">
                            <p className="under">Collection Areas</p>
                            <p className="under">These collection areas study, exhibit, and care for the objects in The Met collection.</p>
                        </div>
                    </div>

                    <div className="wrapper2">
                        <div>
                            <div className="container">
                                <img className="singlImg" src={layer9} alt="Image 1" />
                            </div>
                            <div className="underImg">
                                <p className="under">Collection Areas</p>
                                <p className="under">These collection areas study, exhibit, and care for the objects in The Met collection.</p>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper2">
                        <div>
                            <div className="container">
                                <img className="singlImg" src={layer10} alt="Image 1" />
                            </div>
                            <div className="underImg">
                                <p className="under">Collection Areas</p>
                                <p className="under">These collection areas study, exhibit, and care for the objects in The Met collection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    );
}

export default Main;
