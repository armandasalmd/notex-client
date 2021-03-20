import React from "react";
import classnames from "classnames";
import { useHistory } from "react-router-dom";

import "./ArticleHeader.less";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ArticleHeader = (props) => {
    const history = useHistory();
    const { darkText } = props;

    const classes = classnames("articleHeader", {
        "articleHeader--darkText": darkText
    });

    return (
        <div className={classes}>
            <button className="ghostButton ghostButton--borderless" onClick={history.goBack}>
                <span className="ghostButton__icon">
                    <ArrowLeftOutlined />
                </span>
                Go to search
            </button>
            <h1 className="articleHeader__title">Java fundamentals article collection</h1>
            <p className="articleHeader__description">This page contains all information related to a particular order. View order details, leavve a review, track the status and directly message the repair center.</p>
        </div>
    );
};

export default ArticleHeader;