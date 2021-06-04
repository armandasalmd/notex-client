import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./ArticleBody.less";
import TextRendering from "##/TextRendering";

export const ArticleBody = (props) => {
    return (
        <div className="articlePageBody">
            <img className="articlePageBody__coverImage" alt="cover" src="/images/sample-article-cover.jpg" />
            <TextRendering />
        </div>
    );
};

ArticleBody.propTypes = {
    props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleBody);
