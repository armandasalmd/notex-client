import React from "react";
import { useTranslation } from "react-i18next";

import "./AboutPage.less";

const About = () => {
    const { t } = useTranslation();

    const aboutParagraphs = t("about.sectionAbout.paragraphs", { returnObjects: true})
        .map(text => {
            return <p dangerouslySetInnerHTML={{ __html: text }}></p>
        });

    const authorParagraphs = t("about.sectionAuthor.paragraphs", { returnObjects: true})
        .map(text => {
            return <p dangerouslySetInnerHTML={{ __html: text }}></p>
        });

    return (
        <div className="about-page" style={{ marginBottom: '48px' }}>
            <div className="about-image"/>
            <div className="about-content">
                <div className="section">
                    <h1>{t("about.sectionAbout.title")}</h1>
                    <article>
                        {aboutParagraphs}
                    </article>
                </div>
                <div className="section">
                    <h1>{t("about.sectionAuthor.title")}</h1>
                    <article>
                        {authorParagraphs}
                    </article>
                </div>
            </div>
        </div>
    );
};

export default About;