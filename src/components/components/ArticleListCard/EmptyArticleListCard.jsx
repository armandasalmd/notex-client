import React from "react";
import classnames from "classnames";

import { Popconfirm } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";


const EmptyArticleListCard = (props) => {
    const { title, description, small, onClose } = props;
    
    const classes = classnames("articleListCard", {
        "articleListCard--small": small === true
    });

    let closeElement = null;
    if (typeof onClose === "function") {
        closeElement = (
            <Popconfirm placement="left" title="Do you want to remove this bookmark?" onConfirm={onClose} okText="Yes" cancelText="No">
                <CloseCircleOutlined />
            </Popconfirm>
        );
    }

    return (
        <div className={classes}>
            <div className="articleListCard__content">
                <div className="articleListCard__details">
                    <h1 className="articleListCard__title articleListCard__title--static">
                        {title}
                    </h1>
                    <p className="articleListCard__description">{description}</p>
                </div>
                <div className="articleListCard__actions">
                    {closeElement}
                </div>
            </div>
        </div>
    );
};

export default EmptyArticleListCard;