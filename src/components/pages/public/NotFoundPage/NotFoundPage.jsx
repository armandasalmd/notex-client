import React from "react";
import { Link } from "react-router-dom";
import { I18n } from "react-redux-i18n";

import { Result, Button } from "antd";

const NotFound = () => {
    const mainStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };
    
    return (
        <div style={mainStyle}>
            <div style={{ textAlign: "center" }}>
                <Result
                    status="404"
                    title="404"
                    subTitle={I18n.t("errorPage.description")}
                    extra={
                        <Link to="/" style={{ fontSize: "20px" }}>
                            <Button type="primary">{I18n.t("errorPage.goHomeLink")}</Button>
                        </Link>
                    }
                />
            </div>
        </div>
    );
};

export default NotFound;
