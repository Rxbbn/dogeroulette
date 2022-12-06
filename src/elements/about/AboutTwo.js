import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/banner/chart.png" alt="Tax Chart" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h4 className="subtitle"><span className="theme-gradient">The Real Deal</span></h4>
                                    <h2 className="title mt--10">Tokenomics & More</h2>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p></p>

                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> 100,000,000 Initial Supply</li>
                                        <li><span className="icon"><FiCheck /></span> Total Tax - 10% on Buy & Sell</li>
                                        <li><span className="icon"><FiCheck /></span> Rewards: 5%</li>
                                        <li><span className="icon"><FiCheck /></span> Burn: 1%</li>
                                        <li><span className="icon"><FiCheck /></span> LP: 2%</li>
                                        <li><span className="icon"><FiCheck /></span> Marketing & Development: 2%</li>
                                        
                                    </ul>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutTwo;
