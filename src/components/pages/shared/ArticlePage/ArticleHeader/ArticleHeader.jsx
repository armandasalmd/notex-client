import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./ArticleHeader.less";
import ArticleDetails from "./ArticleDetails";
import HeaderToolbar from "./HeaderToolbar";

export const ArticleHeader = (props) => {
    return (
        <div className="articlePage__header">
            <ArticleDetails />
            <HeaderToolbar />
        </div>
    );
};

ArticleHeader.propTypes = {
    props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleHeader);
