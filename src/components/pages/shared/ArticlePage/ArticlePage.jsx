import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { GlobalUtils } from "@utils";
import { fetchArticleData } from '@actions/readingActions';

import { BackTop } from "antd";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";
import ArticleFooter from "./ArticleFooter";
import Footer from "#/containers/Footer";

export const ArticlePage = (props) => {
    let { identifier } = useParams();

    useEffect(() => {
        if (GlobalUtils.isGuid(identifier)) {
            props.fetchArticleData(identifier);
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

ArticlePage.propTypes = {
    fetchArticleData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    fetchArticleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
