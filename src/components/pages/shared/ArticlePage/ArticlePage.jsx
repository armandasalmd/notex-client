import React, { useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { GlobalUtils, MessageUtils, RouteVariables } from "@utils";
import { fetchArticleData, clear as clearReadingData } from '@actions/readingActions';

import { BackTop } from "antd";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";
import ArticleFooter from "./ArticleFooter";
import Footer from "#/containers/Footer";

export const ArticlePage = () => {
    const selfRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const storeIdentifier = useSelector(state => state.reading.identifier);

    let { identifier } = useParams();

    useEffect(() => {
        const onError = () => history.replace(RouteVariables.app.public.notFound.link);

        if (GlobalUtils.isGuid(identifier)) {
            if (storeIdentifier !== identifier) {
                if (GlobalUtils.isGuid(storeIdentifier)) {
                    dispatch(clearReadingData());
                } else {
                    MessageUtils.handleDispatch(dispatch, fetchArticleData(identifier), "Article not found", onError);
                }
            }
        } else {
            MessageUtils.error("Article not found");
            onError();
        }
    });

    return (
        <div ref={selfRef} className="articlePage scroll-container">
            <ArticleHeader getPageContainer={() => selfRef.current} />
            <ArticleBody />
            <ArticleFooter />
            <Footer />
            <BackTop target={() => selfRef.current} />
        </div>
    );
};

export default ArticlePage;
