import React from "react";

import "./ArticleDetails.less";
import { Avatar, Skeleton, Tag } from "antd";
import { UserOutlined } from "@ant-design/icons";

const DetailsLoading = () => {
    return (
        <div>
            <Skeleton active paragraph={{ rows: 1 }} />
            <Skeleton avatar paragraph={{ rows: 3 }} />
        </div>
    );
};

const ArticleDetails = (props) => {
    const { loading } = props;

    const detailsElement = (
        <div className="articleDetails">
            <h1 className="articleDetails__title">Speed up your Next.js application with Redis</h1>
            <div className="articleDetails__metaData metaData">
                <Avatar className="metaData__authorAvatar" size={36} src="https://notex-profile-pictures.s3.eu-west-2.amazonaws.com/p-60363fb8d039ab0015223123-1622372344097" icon={<UserOutlined />} />
                <p className="metaData__authorName">by <span className="metaData__authorName--highlight">James Williams</span></p>
                <div className="metaData__itemList">
                    <div className="metaData__item">
                        8 days ago
                    </div>
                    <div className="metaData__item">
                        2 min read
                    </div>
                    <div className="metaData__item">
                        1,1K views
                    </div>
                </div>
            </div>
            <div className="articleDetails__tagList">
                <Tag color="geekblue">JavaScript</Tag>
                <Tag color="geekblue">Beginner level</Tag>
                <Tag color="geekblue">Engineering</Tag>
            </div>
            <h2 className="articleDetails__description">This page contains all information related to a particular order. View order details, leavve a review, track the status and directly message the repair center</h2>
        </div>
    );

    return loading === true ? <DetailsLoading /> : detailsElement;
};

export default ArticleDetails;
