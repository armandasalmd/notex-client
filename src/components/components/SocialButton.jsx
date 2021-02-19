import React from "react";
import { I18n } from "react-redux-i18n";

import { Constants, RouteUtils } from "@utils";
import { Button } from "antd";

const SocialButton = props => {
    const { options = Constants.socialButtonTypes.google } = props;
    const SocialIcon = <img width={props.small ? "18" : "24"} src={options.iconSource} alt={options.title} style={{ marginRight: "8px" }}></img>;

    const onClick = typeof props.onClick === "function"
        ? props.onClick
        : () => {
            window.open(RouteUtils.resolveHostName() + options.path, "_self");
        };

    const style = { backgroundColor: options.backgroundColor, color: options.textColor, fontWeight: "medium", width: props.width ? props.width : "100%" };

    return (
        <Button onClick={onClick} size={props.small ? "middle": "large"} style={style} icon={SocialIcon}>
            { props.text === undefined ? I18n.t(options.textKey) : props.text }
        </Button>
    );
};

export default SocialButton;
