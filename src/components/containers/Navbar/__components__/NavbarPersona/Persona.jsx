import React from "react";
import { connect } from "react-redux";

import { RouteUtils } from "@utils";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const __Persona = (props) => {
    const { name, email, avatarUrl } = props;

    return (
        <div className="persona">
            <Avatar
                className="persona__avatar"
                size={40}
                src={RouteUtils.resolveUrl(avatarUrl)}
                icon={<UserOutlined />}
                style={{ backgroundColor: "#d4be92" }}
            />
            <div className="persona__info">
                <p className="persona__name">{name}</p>
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