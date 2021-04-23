import React from "react";

import "./EditArticleCard.less";

const EditArticleCard = () => {

    return (
        <div className="card editArticleCard" style={{height: 250}}>
            <div className="card__content">
                <h3 className="title title--light">Article settings</h3>
            </div>
        </div>
    );
};

export default EditArticleCard;