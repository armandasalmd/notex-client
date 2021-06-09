import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { I18n } from "react-redux-i18n";
import copy from "copy-to-clipboard";

import { MessageUtils } from "@utils";
import { bookmarkArticle } from "@actions/readingActions";

import "./HeaderToolbar.less";
import { BookOutlined, BookFilled, LinkOutlined } from "@ant-design/icons";
import { Voting } from "../../__components__";
import { Space, Tooltip } from "antd";

const HeaderToolbar = () => {
    const dispatch = useDispatch();
    const bookmarked = useSelector((state) => state.reading.state.isBookmarked);
    const identifier = useSelector((state) => state.reading.identifier);

    const copyUrl = () => {
        copy(window.location.href);
        MessageUtils.success(I18n.t("common.urlCopy"));
    };

    const scrollToFooter = () => {
        let element = document.getElementById("footer-toolbar");

        if (element) {
            let y = element.getBoundingClientRect().top + window.pageYOffset - 64;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const toggleBookmark = () => {
        MessageUtils.handleDispatchWithLoading(
            dispatch,
            bookmarkArticle(identifier, !bookmarked),
            "Setting bookmark...",
            "Cannot change bookmark state"
        );
    };

    const bookmarkTitle = bookmarked ? "Remove article bookmark" : "Bookmark this article";
    const bookmarkIcon = <Tooltip title={bookmarkTitle}>{bookmarked ? <BookFilled /> : <BookOutlined />}</Tooltip>;

    return (
        <div className="headerToolbar">
            <Voting />
            <Space>
                <button className="ghostButton ghostButton--silent" onClick={scrollToFooter}>
                    Suggestions
                </button>
                <button className="ghostButton ghostButton--noText ghostButton--silent" onClick={toggleBookmark}>
                    <span className="ghostButton__icon">{bookmarkIcon}</span>
                </button>
                <button className="ghostButton ghostButton--noText ghostButton--silent">
                    <span className="ghostButton__icon">
                        <LinkOutlined onClick={copyUrl} />
                    </span>
                </button>
            </Space>
        </div>
    );
};

export default HeaderToolbar;
