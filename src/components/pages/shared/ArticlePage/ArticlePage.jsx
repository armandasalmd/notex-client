import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { GlobalUtils, MessageUtils } from "@utils";
import { fetchArticleData } from '@actions/readingActions';

import { BackTop } from "antd";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";
import ArticleFooter from "./ArticleFooter";
import Footer from "#/containers/Footer";

export const ArticlePage = (props) => {
    const dispatch = useDispatch();

    let { identifier } = useParams();

    useEffect(() => {
        if (GlobalUtils.isGuid(identifier)) {
            MessageUtils.handleDispatch(dispatch, fetchArticleData(identifier), "Cannot load article");
        }
    });

    return (
        <div className="articlePage">
            <ArticleHeader />
            <ArticleBody />
            <ArticleFooter />
            <Footer />
            <BackTop />
        </div>
    );
};

export default ArticlePage;
