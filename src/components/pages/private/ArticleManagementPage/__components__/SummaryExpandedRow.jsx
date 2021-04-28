import React from "react";
import { Link } from "react-router-dom";

import { ArticleManagementUtils, GlobalUtils, RouteVariables } from "@utils";

import "./SummaryExpandedRow.less";
import { Popconfirm } from "antd";
import { EditFilled, DeleteOutlined, SyncOutlined } from "@ant-design/icons";

const SummaryArticle = (props) => {
    const title = GlobalUtils.getValue(props.article, ArticleManagementUtils.articleSummaryModel.title, "");
    const identifier = GlobalUtils.getValue(props.article, ArticleManagementUtils.articleSummaryModel.identifier, "");

    const onEdit = () => {
        console.log("Edit", identifier);
    };

    const onRemove = () => {
        console.log("Remove", identifier);
    };

    const onSync = () => {
        console.log("Sync article", identifier);
    };

    
    const getArticleLink = () => {
        const route = RouteVariables.app.shared.article;
        
        return route.link.replace(":" + route.paramNames.identifier, identifier)
    };

    return (
        <article>
            <Link to={getArticleLink} target="_blank"><p className="articleSummary__articleTitle">{title}</p></Link>
            <div className="articleSummary__articleActions">
                <EditFilled className="icon" onClick={onEdit} />
                <SyncOutlined className="icon" onClick={onSync} />
                <Popconfirm title="Are you sure to delete this item?" onConfirm={onRemove} okText="Yes" cancelText="No">
                    <DeleteOutlined className="icon icon--delete" />
                </Popconfirm>
            </div>
        </article>
    );
};

const SummaryExpandedRow = (props) => {
    const { articleSummaries = [] } = props;

    const summaries = articleSummaries.map((article, index) => <SummaryArticle key={index} article={article} />);

    return (
        <div className="articleSummary">
            <p className="articleSummary__title">Articles in collection</p>
            <div className="articleSummary__articles">
                {summaries}
            </div>
        </div>
    );
};

export default SummaryExpandedRow;