import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Result, Button } from "antd";

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
                <Result
                    status="404"
                    title="404"
                    subTitle={t("errorPage.description")}
                    extra={
                        <Link to="/" style={{ fontSize: "20px" }}>
                            <Button type="primary">{t("errorPage.goHomeLink")}</Button>
                        </Link>
                    }
                />
            </div>
        </div>
    );
};

export default NotFound;
