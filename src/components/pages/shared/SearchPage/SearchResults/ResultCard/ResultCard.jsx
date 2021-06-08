import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import { GlobalUtils, SearchUtils } from "@utils";

import "./ResultCard.less";
import { ReadOutlined, EyeOutlined, HistoryOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Rate, Tag } from "antd";
import CollectionArticlesMenu from "./CollectionArticlesMenu";

const ResultCard = (props) => {
    const { extraLabel, selected, color, onLovedChange, data, searchTags } = props;
    let { tags, title, description, readTime, views, lastUpdated, authorName, rating, loved, identifier, articlesInCollection, isCollection } = data || {};

    const toggleLoved = () => GlobalUtils.callIfFunction(onLovedChange, !loved);

    const lovedClasses = classnames("resultCard__love", {
        "resultCard__love--active": loved
    });

    const baseClasses = classnames("resultCard", {
        "resultCard--selected": selected,
        "resultCard--secondary": color === "secondary"
    })

    const tagColor = "geekblue";
    const tagElements = (tags || []).map((tag, index) => <Tag key={index} color={searchTags.includes(tag) ? tagColor : undefined}>{tag}</Tag>);

    let titleComponent;

    if (isCollection) {
        titleComponent = <CollectionArticlesMenu title={title} items={articlesInCollection} />;
    } else {
        titleComponent = (
            <p className="resultCard__title">
                <Link to={SearchUtils.pathToArticle(identifier)}>
                    {title}
                </Link>
            </p>
        );
    }

    return (
        <div className={baseClasses}>
            {
                GlobalUtils.hasLength(tagElements) &&
                <div className="resultCard__tags">
                    {tagElements}
                </div>
            }
            {titleComponent}
            <p className="resultCard__description">{description}</p>
            <div className="resultCard__info">
                <div className="resultCard__infoItems">
                    {
                        <span>
                            <ReadOutlined className="resultCard__infoIcon" />{readTime ? 0 : readTime} {readTime > 1 ? "mins": "min"}
                        </span>
                    }
                    {
                        <span>
                            <EyeOutlined className="resultCard__infoIcon" />{views ? 0 : views} {"views"}
                        </span>
                    }
                    <span>
                        <HistoryOutlined className="resultCard__infoIcon" />{GlobalUtils.toDisplayTime(lastUpdated)}
                    </span>
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
                    authorName &&
                    <span className="resultCard__author">by {authorName}</span>
                }
                <div className="resultCard__rating">
                    {
                        rating > 0 && <span style={{marginRight: 8}}>{rating}</span>
                    }
                    <Rate disabled defaultValue={rating} />
                </div>
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