import React from "react";
import { useTranslation } from "react-i18next";

import "./AboutPage.less";
import Footer from "#/containers/Footer";

const About = () => {
    const { t } = useTranslation();

    const aboutParagraphs = t("about.sectionAbout.paragraphs", { returnObjects: true})
        .map((text, i) => {
            return <p key={i} dangerouslySetInnerHTML={{ __html: text }}></p>
        });

    const authorParagraphs = t("about.sectionAuthor.paragraphs", { returnObjects: true})
        .map((text, i) => {
            return <p key={i} dangerouslySetInnerHTML={{ __html: text }}></p>
        });

    return (
        <>
            <div className="about-page" style={{ marginBottom: '48px' }}>
                <div className="about-image"/>
                <div className="about-content">
                    <div className="section">
                        <h1 className="header">{t("about.sectionAbout.title")}</h1>
                        <article>
                            {aboutParagraphs}
                        </article>
                    </div>
                    <div className="section">
                        <h1 className="header">{t("about.sectionAuthor.title")}</h1>
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