import React from "react";

import "./ArticleDetails.less";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Rate, Tag } from "antd";

import articleDetails from "../../../../../assets/fakeData/articleDetails.json";

const ArticleDetails = (props) => {
    let { data } = props;
    
    data = articleDetails;

    const { details, author, tags } = data;

    return (
        <div className="articleDetails card">
            <div className="articleDetails__details">
                <h1 className="header header--medium">
                    Article details
                </h1>
                <p><strong>Published: </strong>{details.published}</p>
                <p><strong>Last update: </strong>{details.updated}</p>
                <p><strong>Views count: </strong>{details.viewsCount}</p>
            </div>
            <div className="articleDetails__rating">
                <Rate value={details.reviews.rating} />
                <p><strong>Rating: </strong>{details.reviews.rating} ({details.reviews.voteCount})</p>
            </div>
            <div className="articleDetails__author">
                <h1 className="header header--medium">
                    About author
                </h1>
                <p><UserOutlined />{author.name}</p>
                <p><MailOutlined />{author.email}</p>
                <p><PhoneOutlined />{author.phone}</p>
            </div>
            <div className="articleDetails__tags">
                <h1 className="header header--medium">
                    Article tags
                </h1>
                <div className="articleDetails__tagList">
                    {
                        tags?.map((tag, index) => <Tag key={index} color={tag.color}>{tag.value}</Tag>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;