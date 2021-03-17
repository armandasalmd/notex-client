import React from "react";
import classnames from "classnames";

import { GlobalUtils } from "@utils";

import "./ResultCard.less";
import { ReadOutlined, EyeOutlined, HistoryOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Rate, Tag } from "antd";

const ResultCard = (props) => {
    const { extraLabel, selected, color, onClick, onLovedChange, data } = props;
    let { tags, matchingTags, title, description, readTime, views, timeAgo, author, rating, loved } = data || {};

    matchingTags = matchingTags || [];
    // love is only enabled if user is authorised

    console.log(selected);

    function toggleLoved() {
        GlobalUtils.callIfFunction(onLovedChange, !loved);
    }

    const lovedClasses = classnames("resultCard__love", {
        "resultCard__love--active": loved
    });

    const baseClasses = classnames("resultCard", {
        "resultCard--selected": selected,
        "resultCard--secondary": color === "secondary"
    })

    const tagColor = "geekblue";
    const tagElements = (tags || []).map((tag, index) => <Tag key={index} color={matchingTags.includes(tag) ? tagColor : undefined}>{tag}</Tag>);

    return (
        <div className={baseClasses}>
            <div className="resultCard__tags">
                {tagElements}
            </div>
            <h1 className="resultCard__title" onClick={GlobalUtils.callIfFunction(onClick)}>{title}</h1>
            <p className="resultCard__description">{description}</p>
            <div className="resultCard__info">
                <div className="resultCard__infoItems">
                    {
                        readTime &&
                        <span><ReadOutlined className="resultCard__infoIcon" />{readTime}</span>
                    }
                    {
                        views &&
                        <span><EyeOutlined className="resultCard__infoIcon" />{views}</span>
                    }
                    {
                        timeAgo &&
                        <span><HistoryOutlined className="resultCard__infoIcon" />{timeAgo}</span>
                    }
                </div>
                {
                    onLovedChange &&
                    <span className={lovedClasses} onClick={toggleLoved}>
                        {
                            loved ? <HeartFilled /> : <HeartOutlined />
                        }
                    </span>
                }                
            </div>
            <div className="resultCard__footer">
                {
                    author &&
                    <span className="resultCard__author">by {author}</span>
                }
                {
                    rating &&
                    <div className="resultCard__rating">
                        {rating} <Rate disabled defaultValue={rating} />
                    </div>
                }
            </div>
            {
                extraLabel &&
                <div className="resultCard__extraLabel resultCard__extraLabel--secondary">
                    {extraLabel}
                </div>
            }
        </div>
    );
};

export default ResultCard;