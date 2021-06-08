import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./ArticleHeader.less";
import ArticleDetails from "./ArticleDetails";
import HeaderToolbar from "./HeaderToolbar";

export const ArticleHeader = (props) => {
    return (
        <div className="articlePage__header">
            <ArticleDetails loading={props.loading} />
            <HeaderToolbar />
        </div>
    );
};

ArticleHeader.propTypes = {
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    loading: state.reading.state.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleHeader);
