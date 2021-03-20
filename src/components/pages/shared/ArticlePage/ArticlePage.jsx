import React from "react";

import ArticleBody from "./ArticleBody";
import ArticleDetails from "./ArticleDetails";
import ArticleHeader from "./ArticleHeader";
import ArticleSuggestions from "./ArticleSuggestions";
import { Image } from "antd";

import "./ArticlePage.less";

const ArticlePage = (props) => {
    let { coverImage } = props;

    coverImage = "/images/sample-article-cover.jpg";

    return (
        <div className="articlePage">
            {
                coverImage &&
                <Image preview={false} className="articlePage__cover" src={coverImage} />
            }
            <div className="articlePage__header">
                <ArticleHeader darkText={coverImage === undefined} />
            </div>
            <div className="articlePage__body">
                <div className="articlePage__container">
                    <ArticleBody />
                </div>
                <div className="articlePage__sidebar">
                    <ArticleDetails />
                    <ArticleSuggestions />
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;