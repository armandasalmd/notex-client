import React from "react";
import { Link } from "react-router-dom";
import "./JoinUsPreFooter.less";

const JoinUsPreFooter = () => {
    return (
        <section className="preFooter">
            <div className="preFooter__container">
                <h1 className="preFooter__title">Create your first note or article today</h1>
                <h2 className="preFooter__subtitle">Using Notex is free. Start sharing experience with the world today!</h2>
                <Link to="/auth/register">
                    <button className="preFooter__button">Try out Notex</button>
                </Link>
            </div>
        </section>
    );
};

export default JoinUsPreFooter;