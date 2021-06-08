import React from "react";
import { useSelector } from "react-redux";

import { GlobalUtils } from "@utils";

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
    const loading = useSelector((state) => state.reading.state.loading);
    const details = useSelector((state) => state.reading.header);

    const tagElements = Array.isArray(details.tags)
        ? details.tags.map((tag, index) => <Tag key={index} color="geekblue">{tag}</Tag>)
        : [];

    const detailsElement = (
        <div className="articleDetails">
            <h1 className="articleDetails__title">{details.title}</h1>
            <div className="articleDetails__metaData metaData">
                <Avatar
                    className="metaData__authorAvatar"
                    size={36}
                    src={details.articleAuthor.profileImage}
                    icon={<UserOutlined />}
                />
                <p className="metaData__authorName">
                    by <span className="metaData__authorName--highlight">{details.articleAuthor.fullName}</span>
                </p>
                <div className="metaData__itemList">
                    <div className="metaData__item">{GlobalUtils.toDisplayTime(details.updatedOn)}</div>
                    <div className="metaData__item">
                        {details.readingDuration} min{details.readingDuration > 1 ? "s" : ""} read
                    </div>
                    <div className="metaData__item">
                        {GlobalUtils.toDisplayViews(details.viewsCount)} view{details.viewsCount > 1 ? "s" : ""}
                    </div>
                </div>
            </div>
            <div className="articleDetails__tagList">
                {tagElements}
            </div>
            <h2 className="articleDetails__description">
                {details.description}
            </h2>
        </div>
    );

    return loading === true ? <DetailsLoading /> : detailsElement;
};

export default ArticleDetails;
