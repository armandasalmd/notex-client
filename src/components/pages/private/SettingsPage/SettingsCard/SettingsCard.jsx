import React from "react";

const SettingsCard = props => {
    return (
        <section id={props.id}>
            <h1 className="title title--light title--primary">{props.title}</h1>
            <div className="content-card full-width" style={{ minHeight: 128, padding: "16px" }}>
                {props.innerComponent}
            </div>
        </section>
    );
};

export default SettingsCard;
