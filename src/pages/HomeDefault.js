import React from 'react';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';

import Copyright from '../common/footer/Copyright';
import { FiArrowRight } from "react-icons/fi";
import Separator from "../elements/separator/Separator";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import AboutTwo from "../elements/about/AboutTwo";
import SectionTitle from "../elements/sectionTitle/SectionTitle";


const SeoAgency = () => {
    return (
        <>
            <SEO title="Doge Roulette BSC" />
            <main className="page-wrapper">
                
                <HeaderOne btnStyle="btn-small btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-6 shape-right height-750">
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                                <div className="inner text-start">
                                    <h1 className="title color-white">Doge <br />Roulette</h1>
                                    <p className="description color-white">The only token on BSC to bring you random Doge-based rewards!</p>
                                    <div className="button-group mt--30 mt_sm--20">
                                        <a className="btn-default btn-medium btn-icon btn-border" target="_blank" href="https://poocoin.app">Purchase Now <i className="icon"><FiArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail">
                                    <img src="./images/banner/dogelogo.png" alt="Banner Images" />
                                </div>
                            </div>
                            <div className="shape-image">
                                <img src="./images/banner/white-shape.svg" alt="Banner Images" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />
                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Roadmap"
                                        title = "Our Master Plan"
                                    />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 mt--50">
                                <TimelineTwo classVar="" />
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />
                <AboutTwo />
                

                
                <Copyright />
            </main>
        </>
    )
}

export default SeoAgency
