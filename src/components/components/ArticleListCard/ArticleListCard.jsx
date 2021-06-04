import React from "react";

import "./ArticleListCard.less";
import { UpSquareOutlined, EyeOutlined, ReadOutlined, SelectOutlined, CloseCircleOutlined } from "@ant-design/icons";

const ArticleListCard = (props) => {
    const { onClose, onSelect } = props;

    return (
        <div className="articleListCard">
            <img className="articleListCard__cover" src="/images/notebooks.jpg" alt="cover" />
            <div className="articleListCard__content">
                <div className="articleListCard__details">
                    <h1 className="articleListCard__title">Any mechanical keyboard enthusiasts in design?</h1>
                    <p className="articleListCard__description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div className="articleListCard__info">
                        <div className="articleListCard__infoItem">
                            <UpSquareOutlined />
                            <span>102</span>
                        </div>
                        <div className="articleListCard__infoItem">
                            <EyeOutlined />
                            <span>1.2K</span>
                        </div>
                        <div className="articleListCard__infoItem">
                            <ReadOutlined />
                            <span>3 mins</span>
                        </div>
                    </div>
                </div>
                <div className="articleListCard__actions">
                    <SelectOutlined onClick={onSelect} />
                    <CloseCircleOutlined onClick={onClose} />
                </div>
            </div>
        </div>
    );
};

export default ArticleListCard;
