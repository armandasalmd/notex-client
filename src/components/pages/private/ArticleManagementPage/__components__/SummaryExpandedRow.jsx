import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ArticleManagementUtils, GlobalUtils, RouteUtils } from "@utils";

import "./SummaryExpandedRow.less";
import { message } from "antd";
import { EditFilled, SyncOutlined } from "@ant-design/icons";

const SummaryArticle = (props) => {
    const { article, collectionId } = props;
    const [syncEnabled, setSyncEnabled] = useState(true);

    const title = GlobalUtils.getValue(article, ArticleManagementUtils.articleSummaryModel.title, "");
    const identifier = GlobalUtils.getValue(article, ArticleManagementUtils.articleSummaryModel.identifier, "");

    const onSync = () => {
        if (syncEnabled) {
            const key = "1";
            message.loading({ content: "Synchronisation in progress", key });
            setSyncEnabled(false);

            ArticleManagementUtils.syncArticleApiCall(identifier)
                .then(() => message.success({  content: "Synchronisation successfull", key }))
                .catch(() => message.error({ content: "Synchronisation failed", key }))
                .finally(() => setTimeout(() => setSyncEnabled(true), 10000));
        }
    };
    
    const getArticleLink = () => {
        const route = RouteUtils.app.shared.article;
        
        return route.link.replace(":" + route.paramNames.identifier, identifier)
    };

    const editArticleLink = (() => {
        const route = RouteUtils.app.private.editArticle;

        if (collectionId && identifier) {
            return route.link.replace(/\/:.*/, "/") + collectionId + "/" + identifier;
        }
    })();

    return (
        <article>
            <Link to={getArticleLink} target="_blank"><p className="articleSummary__articleTitle">{title}</p></Link>
            <div className="articleSummary__articleActions">
                { 
                    !!editArticleLink && 
                    <Link to={editArticleLink}>
                        <EditFilled className="icon" />
                    </Link>
                }
                {
                    syncEnabled &&
                    <SyncOutlined className="icon" onClick={onSync} />
                }
            </div>
        </article>
    );
};

const SummaryExpandedRow = (props) => {
    const { articleSummaries = [], collectionId } = props;
    const summaries = articleSummaries.map((article, index) => <SummaryArticle collectionId={collectionId} key={index} article={article} />);

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