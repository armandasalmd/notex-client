import React from "react";
import classnames from "classnames";
import { useHistory } from "react-router-dom";

import { Constants, GlobalUtils, MessageUtils, SearchUtils } from "@utils";

import "./ArticleListCard.less";
import { Popconfirm } from "antd";
import { UpSquareOutlined, EyeOutlined, ReadOutlined, SelectOutlined, CloseCircleOutlined } from "@ant-design/icons";

const ArticleListCard = (props) => {
    const history = useHistory();

    const { onClose, onSelect, articleData, small } = props;

    if (!articleData) return null;

    const { 
        coverSource,
        description,
        identifier,
        overallVotes: votesCount,
        views: viewsCount,
        readTime,
        title
    } = articleData;

    const handleClick = () => {
        if (GlobalUtils.isGuid(identifier)) {
            if (typeof onSelect === "function") {
                onSelect(articleData);
            } else {
                history.push(SearchUtils.pathToArticle(identifier));
            }
        } else {
            MessageUtils.error("Cannot open selected article");
        }
    };

    const classes = classnames("articleListCard", {
        "articleListCard--small": small === true
    });

    let closeElement = null;
    if (typeof onClose === "function") {
        closeElement = (
            <Popconfirm placement="left" title="Do you want to remove this bookmark?" onConfirm={onClose.bind(this, articleData)} okText="Yes" cancelText="No">
                <CloseCircleOutlined />
            </Popconfirm>
        );
    }

    return (
        <div className={classes}>
            <img
                className="articleListCard__cover"
                onClick={handleClick}
                src={coverSource || Constants.defaultArticleCover}
                alt="cover"
            />
            <div className="articleListCard__content">
                <div className="articleListCard__details">
                    <h1 className="articleListCard__title" onClick={handleClick}>
                        {title}
                    </h1>
                    <p className="articleListCard__description">{description}</p>
                    <div className="articleListCard__info">
                        <div className="articleListCard__infoItem">
                            <UpSquareOutlined />
                            <span>{GlobalUtils.toDisplayCount(votesCount)}</span>
                        </div>
                        <div className="articleListCard__infoItem">
                            <EyeOutlined />
                            <span>{GlobalUtils.toDisplayCount(viewsCount)}</span>
                        </div>
                        <div className="articleListCard__infoItem">
                            <ReadOutlined />
                            <span>
                                {readTime} {GlobalUtils.pluralise("min", readTime)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="articleListCard__actions">
                    {typeof onSelect === "function" && <SelectOutlined onClick={onSelect.bind(this, articleData)} />}
                    {closeElement}
                </div>
            </div>
        </div>
    );
};

export default ArticleListCard;
