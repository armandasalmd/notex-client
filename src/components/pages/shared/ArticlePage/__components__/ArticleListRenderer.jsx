import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { GlobalUtils, MessageUtils } from "@utils";
import { bookmarkFooterCollectionArticle } from "@actions/readingActions";

import ArticleListCard from "##/ArticleListCard";
import { Row, Col, Empty } from "antd";

export const ArticleListRenderer = (props) => {
    const dispatch = useDispatch();
    const authorised = useSelector((state) => state.auth.isAuthenticated);

    const { source, collectionType } = props;

    if (!GlobalUtils.hasLength(source)) {
        return <Empty style={{ marginTop: 16, marginBottom: 16 }} description="No articles found" />;
    }

    const onBookmark = (newBookmarkState, article) => {
        const identifier = GlobalUtils.getValue(article, "identifier");

        MessageUtils.handleDispatch(
            dispatch,
            bookmarkFooterCollectionArticle(newBookmarkState, identifier, collectionType)
        );
    }

    const cards = source.map((article, index) => {
        return (
            <Col key={index} lg={12} md={24} sm={24}>
                <ArticleListCard onBookmark={authorised ? onBookmark : null} articleData={article} />
            </Col>
        );
    });

    return <Row gutter={[16, 16]}>{cards}</Row>;
};

export default ArticleListRenderer;
