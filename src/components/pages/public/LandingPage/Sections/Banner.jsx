import React from "react";
import { Link } from "react-router-dom";
import "./Banner.less";
import HeroImage from "./HeroImage";

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__container">
                <div className="banner__display">
                    <h1 className="banner__title">Exchange your knowledge</h1>
                    <p className="banner__description">Create private notes online and turn them into articles so everyone can find it. Notex uses intuitive editor which helps you to express your ideas more easily and it’s FREE.</p>
                    <div className="banner__search">
                        <p className="banner__description">Search among thousand of other articles</p>
                        <div className="banner__searchActions">
                            <Link to="/search">
                                <button className="banner__button">
                                    Search now
                                </button>
                            </Link>
                            <p className="text text--silent banner__displayOr">or</p>
                            <Link to="/auth/login">
                                <p className="banner__link">Login and create notes ›</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <HeroImage className="banner__image" />
            </div>
            <img className="banner__background" src="/images/landing/wave-background.svg" alt="wave" />
        </section>
    );
};

export default Banner;