import React from "react";

import { Skeleton } from "antd";

const SkeletonLoading = (props) => {
    const { cardCount } = props;

    const cards = [];
    for (let i = 0; i < cardCount; i++) {
        cards.push(<div className="resultCard" key={i}>
            <Skeleton />
        </div>);
    }

    return (
        <div className="searchResults__cards">
            {cards}
        </div>
    );
};

export default SkeletonLoading;