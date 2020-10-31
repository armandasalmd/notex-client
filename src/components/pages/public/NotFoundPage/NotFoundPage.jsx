import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
    const mainStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "66vh"
    };
    const { t } = useTranslation();

    return (
        <div style={mainStyle}>
            <div style={{ textAlign: "center" }}>
                <h1 className="header" style={{ color: "rgb(55,96,131)" }}>{t("errorPage.titlePrefix")} 404</h1>
                <p style={{ fontSize: "20px" }}>{t("errorPage.description")}</p>
                <Link to="/" style={{ fontSize: "20px" }}>
                    {t("errorPage.goHomeLink")}
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
