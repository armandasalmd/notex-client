import React from "react";
import classnames from "classnames";
import { useHistory } from "react-router-dom";

import { Constants, GlobalUtils, MessageUtils, SearchUtils } from "@utils";

import "./ArticleListCard.less";
import { Popconfirm, Tooltip } from "antd";
import { UpSquareOutlined, EyeOutlined, ReadOutlined, BookOutlined, BookFilled, CloseCircleOutlined } from "@ant-design/icons";
import EmptyArticleListCard from "./EmptyArticleListCard";

const ArticleListCard = (props) => {
    const history = useHistory();

    const { onClose, onBookmark, articleData, small } = props;

    if (GlobalUtils.isEmpty(GlobalUtils.getValue(articleData, "title"))) {
        const closeFn = typeof onClose === "function" ? onClose.bind(this, articleData) : null;

        return <EmptyArticleListCard title="Article is unavailable" description="It might be removed or marked as private" small articleData={articleData} onClose={closeFn} />;
    }

    const classes = classnames("articleListCard", {
        "articleListCard--small": small === true
    });
    
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
                onBookmark(articleData);
            } else {
                history.push(SearchUtils.pathToArticle(identifier));
            }
        } else {
            MessageUtils.error("Cannot open selected article");
        }
    };

    let bookmarkIcon = null;
    if (typeof onBookmark === "function") {
        bookmarkIcon = GlobalUtils.getValue(articleData, "isBookmarked", false) ? 
            <Tooltip title="Remove from bookmarks"><BookFilled onClick={onBookmark.bind(this, false, articleData)} /></Tooltip> :
            <Tooltip title="Save to bookmarks"><BookOutlined onClick={onBookmark.bind(this, true, articleData)} /></Tooltip>;
    }

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
                    {bookmarkIcon}
                    {closeElement}
                </div>
            </div>
        </div>
    );
};

export default ArticleListCard;
