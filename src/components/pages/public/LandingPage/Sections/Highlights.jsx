import React from "react";
import "./Highlights.less";

const HighlightsListItem = (props) => {
    return (
        <div className="highlights__listItem">
            <img className="highlights__listImage" src="/images/landing/check-icon.svg" alt="list item" />
            <p className="highlights__listText">{props.text}</p>
        </div>
    );
};

const Highlights = () => {
    const FEATURES = [
        "Create notes using intuitive editor interface",
        "Easily manage and publish your articles",
        "Read and bookmark your favorite topics",
        "Import/Export note data"
    ];

    const features = FEATURES.map((item, index) => <HighlightsListItem key={index} text={item} />)

    return (
        <section className="highlights">
            <img src="/images/landing/person-with-laptop.svg" alt="highlights" className="highlights__image" />
            <div className="highlights__display">
                <h1 className="highlights__title">We Provide Many Features You Can Use</h1>
                <p className="highlights__description">You can explore the features that we provide with fun and try them our yourself.</p>
                <div className="highlights__list">{features}</div>
            </div>
        </section>
    );
};

export default Highlights;