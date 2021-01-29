import React from "react";
import { useTranslation } from "react-i18next";

const SettingsCard = props => {
    const { t } = useTranslation();

    return (
        <section id={props.id}>
            <h1 className="title title--light title--primary">{ t(props.titleKey) || props.defaultTitle }</h1>
            <div className="content-card full-width" style={{ minHeight: 128, padding: "16px" }}>
                {props.innerComponent}
            </div>
        </section>
    );
};

export default SettingsCard;
