import React from "react";
import { useSelector } from "react-redux";

import { Constants } from "@utils";

import "./ArticleHeader.less";
import ArticleDetails from "./ArticleDetails";
import HeaderToolbar from "./HeaderToolbar";
import { Title } from "##/HeadTitle";

export const ArticleHeader = ({ getPageContainer }) => {
    const title = useSelector((state) => state.reading.header.title);

    return (
        <div className="articlePage__header">
            {
                title && <Title title={`${Constants.appName} - ${title}`} />
            }
            <ArticleDetails />
            <HeaderToolbar getPageContainer={getPageContainer} />
        </div>
    );
};

export default ArticleHeader;
