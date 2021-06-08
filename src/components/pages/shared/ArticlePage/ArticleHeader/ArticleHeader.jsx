import React from "react";

import "./ArticleHeader.less";
import ArticleDetails from "./ArticleDetails";
import HeaderToolbar from "./HeaderToolbar";

export const ArticleHeader = () => {
    return (
        <div className="articlePage__header">
            <ArticleDetails />
            <HeaderToolbar />
        </div>
    );
};

export default ArticleHeader;
