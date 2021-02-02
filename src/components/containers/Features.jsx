import React from "react";
import { I18n } from "react-redux-i18n";

import "./Features.less";
import { Card } from "antd";
const { Meta } = Card;

const Features = () => {

    const features = I18n.t("landing.features.cards", { returnObjects: true });

    const cardList = features.map((item, i) => (
        <Card className="feature-card" key={i} hoverable style={{ width: 240 }} size="small" cover={<img alt={item.title} src={item.image} />}>
            <Meta title={item.title} description={item.description} />
        </Card>
    ));

    return (
        <div className="feature-root">
            <h1 className="header">{I18n.t("landing.features.title")}</h1>
            <div className="scrolling-wrapper">{cardList}</div>
        </div>
    );
};

export default Features;
