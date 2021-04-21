import React from "react";

import { ArticleManagementUtils, GlobalUtils } from "@utils";

import "./SummaryExpandedRow.less";
import { Popconfirm } from "antd";
import { EditFilled, DeleteOutlined, SyncOutlined } from "@ant-design/icons";

const SummaryArticle = (props) => {
    const title = GlobalUtils.getValue(props.article, ArticleManagementUtils.articleSummaryModel.title, "");

    const onEdit = () => {
        console.log("Edit");
    };

    const onRemove = () => {
        console.log("Remove");
    };

    const onSync = () => {
        console.log("Sync article");
    };

    return (
        <article>
            <p className="articleSummary__articleTitle">{title}</p>
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