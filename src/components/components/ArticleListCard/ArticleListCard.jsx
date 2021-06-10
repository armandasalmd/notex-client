import React from "react";
import { useHistory } from "react-router-dom";

import { Constants, GlobalUtils, MessageUtils, SearchUtils } from "@utils";

import "./ArticleListCard.less";
import { UpSquareOutlined, EyeOutlined, ReadOutlined, SelectOutlined, CloseCircleOutlined } from "@ant-design/icons";

const ArticleListCard = (props) => {
    const history = useHistory();

    const { onClose, onSelect, articleData } = props;

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

    return (
        <div className="articleListCard">
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
                    {typeof onSelect === "function" && <SelectOutlined onClick={onSelect} />}
                    {typeof onClose === "function" && <CloseCircleOutlined onClick={onClose} />}
                </div>
            </div>
        </div>
    );
};

export default ArticleListCard;
