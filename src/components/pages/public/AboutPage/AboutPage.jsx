import React from "react";
import { I18n } from "react-redux-i18n";

import { I18nUtils } from "@utils";

import "./AboutPage.less";
import Footer from "#/containers/Footer";

const About = () => {
    const aboutParagraphs = I18nUtils.tObject(I18n, "about.sectionAbout.paragraphs")
        .map((text, i) => {
            return <p key={i} dangerouslySetInnerHTML={{ __html: text }}></p>
        });

    const authorParagraphs = I18nUtils.tObject(I18n, "about.sectionAuthor.paragraphs")
        .map((text, i) => {
            return <p key={i} dangerouslySetInnerHTML={{ __html: text }}></p>
        });

    return (
        <>
            <div className="about-page">
                <div className="about-image"/>
                <div className="about-content">
                    <div className="section">
                        <h1 className="header">{I18n.t("about.sectionAbout.title")}</h1>
                        <article>
                            {aboutParagraphs}
                        </article>
                    </div>
                    <div className="section">
                        <h1 className="header">{I18n.t("about.sectionAuthor.title")}</h1>
                        <article>
                            {authorParagraphs}
                        </article>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;