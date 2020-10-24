import React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";

import "./Banner.less";
import { useTranslation } from "react-i18next";

const Banner = () => {
    const { t } = useTranslation();

    return (
        <div className="banner-image">
            <div className="banner-text">
                <h2>
                    {t("landing.banner.title")}
                </h2>
                <p style={{ marginBottom: "32px" }}>{t("landing.banner.subtitle")}</p>
                <Button className="banner-btn" size="large">
                    <Link to="/auth/register">{t("landing.banner.buttonText")}</Link>
                </Button>
            </div>
        </div>
    );
};

export default Banner;
