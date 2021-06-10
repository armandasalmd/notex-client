import React from "react";

import { GlobalUtils } from "@utils";

import ArticleListCard from "##/ArticleListCard";
import { Row, Col, Empty } from "antd";

export const ArticleListRenderer = (props) => {
    const { source } = props;

    if (!GlobalUtils.hasLength(source)) {
        return <Empty style={{ marginTop: 16 }} description="No articles found" />;
    }

    const cards = source.map((article, index) => {
        return (
            <Col key={index} lg={12} md={24} sm={24}>
                <ArticleListCard articleData={article} />
            </Col>
        );
    });

    return (
        <Row gutter={[16, 16]}>
            {cards}
        </Row>
    );
};

export default ArticleListRenderer;
