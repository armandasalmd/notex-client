import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { BackTop } from "antd";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";
import ArticleFooter from "./ArticleFooter";
import Footer from "#/containers/Footer";

export const ArticlePage = (props) => {
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
    props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
