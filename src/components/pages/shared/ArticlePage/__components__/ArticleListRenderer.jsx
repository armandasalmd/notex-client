import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ArticleListCard from "##/ArticleListCard";
import { Row, Col } from "antd";

export const ArticleListRenderer = (props) => {
    const onLoadMore = () => {
        console.log("Load more...");
    };

    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col lg={12} md={24} sm={24}>
                    <ArticleListCard />
                </Col>
                <Col lg={12} md={24} sm={24}>
                    <ArticleListCard />
                </Col>
                
                <Col lg={12} md={24} sm={24}>
                    <ArticleListCard />
                </Col>
                <Col lg={12} md={24} sm={24}>
                    <ArticleListCard />
                </Col>
                
                <Col lg={12} md={24} sm={24}>
                    <ArticleListCard />
                </Col>
            </Row>
            <Row justify="center">
                <button onClick={onLoadMore} class="ghostButton ghostButton--silent">Load more...</button>
            </Row>
        </div>
    );
};

ArticleListRenderer.propTypes = {
    props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListRenderer);
