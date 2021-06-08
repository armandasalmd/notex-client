import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { GlobalUtils } from "@utils";

import "./ArticleBody.less";
import { Skeleton, Image } from "antd";
import TextRendering from "##/TextRendering";

export const ArticleBody = (props) => {

    const getSkeletons = (skeletonCount) => {
        let skeletons = [];

        for (let i = 0; i < skeletonCount; i++) {
            skeletons.push(<Skeleton key={i} active paragraph={{rows: GlobalUtils.getRandomNumber(2, 8)}}></Skeleton>)
        }

        return skeletons;
    }

    return (
        <div className="articlePageBody">
            {props.loading && getSkeletons(4)}
            {!props.loading && <Image className="articlePageBody__coverImage" alt="cover" src="/images/sample-article-cover.jpg" />}
            {!props.loading && <TextRendering />} 
        </div>
    );
};

ArticleBody.propTypes = {
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    loading: state.reading.state.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleBody);
