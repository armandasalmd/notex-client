import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    const mainStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    };
    return (
        <div style={mainStyle}>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "rgb(55,96,131)" }}>Error 404</h1>
                <p style={{ fontSize: "20px" }}>Page not found!</p>
                <Link to="/" style={{ fontSize: "20px" }}>
                    Go home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
