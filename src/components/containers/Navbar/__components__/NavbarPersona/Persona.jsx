import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { RouteUtils } from "@utils";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const __Persona = (props) => {
    const { name, email, avatarUrl } = props;

    return (
        <div className="persona">
            <Link to={RouteUtils.app.private.settings.link}>
                <Avatar
                    className="persona__avatar"
                    size={40}
                    src={RouteUtils.resolveUrl(avatarUrl)}
                    icon={<UserOutlined />}
                    style={{ backgroundColor: "#d4be92" }}
                />
            </Link>
            <div className="persona__info">
                <Link to={RouteUtils.app.private.settings.link}><p className="persona__name">{name}</p></Link>
                <p className="persona__mail">{email}</p>
            </div>
        </div>
    );
};

const Persona = connect((state) => {
    return {
        name: `${state.settings.personalDetails.firstname} ${state.settings.personalDetails.lastname}`,
        email: state.settings.personalDetails.email,
        avatarUrl: state.settings.personalDetails.avatarUrl
    };
}, {})(__Persona);

export default Persona;