import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { GlobalUtils, MessageUtils, RouteVariables } from "@utils";
import { fetchArticleData } from '@actions/readingActions';

import { BackTop } from "antd";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";
import ArticleFooter from "./ArticleFooter";
import Footer from "#/containers/Footer";

export const ArticlePage = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    let { identifier } = useParams();

    useEffect(() => {
        const onError = () => history.replace(RouteVariables.app.public.notFound.link);

        if (GlobalUtils.isGuid(identifier)) {
            MessageUtils.handleDispatch(dispatch, fetchArticleData(identifier), "Article not found", onError);
        } else {
            MessageUtils.error("Article not found");
            onError();
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
