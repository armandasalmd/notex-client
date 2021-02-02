import React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";

import "./Banner.less";

import { I18n } from "react-redux-i18n";

const Banner = () => {
    return (
        <div className="banner-image">
            <div className="banner-text">
                <h2>
                    {I18n.t("landing.banner.title")}
                </h2>
                <p style={{ marginBottom: "32px" }}>{I18n.t("landing.banner.subtitle")}</p>
                <Button className="banner-btn" size="large">
                    <Link to="/auth/register">{I18n.t("landing.banner.buttonText")}</Link>
                </Button>
            </div>
        </div>
    );
};

export default Banner;
