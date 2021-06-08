import React from "react";

import "./HeaderToolbar.less";
import { BookOutlined, CommentOutlined, LinkOutlined } from "@ant-design/icons";
import { Voting } from "../../__components__";
import { Space } from "antd";

const HeaderToolbar = () => {

    const scrollToFooter = () => {
        let element = document.getElementById("footer-toolbar");
        
        if (element) {
            let y = element.getBoundingClientRect().top + window.pageYOffset - 64;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <div className="headerToolbar">
            <Voting />
            <Space>
                <button className="ghostButton ghostButton--silent" onClick={scrollToFooter}>
                    Suggestions
                </button>
                <button className="ghostButton ghostButton--noText ghostButton--silent">
                    <span className="ghostButton__icon">
                        <BookOutlined />
                    </span>
                </button>
                <button className="ghostButton ghostButton--noText ghostButton--silent">
                    <span className="ghostButton__icon">
                        <CommentOutlined />
                    </span>
                </button>
                <button className="ghostButton ghostButton--noText ghostButton--silent">
                    <span className="ghostButton__icon">
                        <LinkOutlined />
                    </span>
                </button>
            </Space>
        </div>
    );
};

export default HeaderToolbar;
