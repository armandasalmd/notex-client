import React from "react";
import classnames from "classnames";

import "./ArticleSuggestions.less";

import fakeSuggestions from "../../../../../assets/fakeData/collectionArticles.json";

const ListItem = (props) => {
    const { author, title, date, readTime, selected } = props;

    const classes = classnames("listItem", {
        "listItem--selected": !!selected
    });

    return (
        <div className={classes}>
            <p className="listItem__author">{author}</p>
            <p className="listItem__title">{title}</p>
            <div className="listItem__details">
                <span>{date}</span>
                <span>{readTime}</span>
            </div>
        </div>
    );
}

const ArticleSuggestions = (props) => {
    // const { collectionSuggestions, relatedArticles } = props;

    let suggestions = fakeSuggestions || [];

    const suggestionItems = suggestions.map((data, index) => <ListItem key={index} {...data} />);

    return (
        <div className="articleSuggestions card">
            <div className="articleSuggestions__nav">
                <h1 className="header header--medium">
                    Article details
                </h1>
                <div className="articleSuggestions__tabs">
                    <button className="ghostButton ghostButton--borderless ghostButton--selected">
                        Collection
                    </button>
                    <button className="ghostButton ghostButton--silent">
                        Related articles
                    </button>
                </div>
            </div>
            <div className="articleSuggestions__list">
                {suggestionItems}
            </div>
        </div>
    );
};

export default ArticleSuggestions;