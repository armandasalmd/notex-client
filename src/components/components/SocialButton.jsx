import React from "react";
import { I18n } from "react-redux-i18n";

import { Constants } from "@utils";
import { Button, message } from "antd";

const SocialButton = props => {
    const { options = Constants.socialButtonTypes.google } = props;
    const SocialIcon = <img width={props.small ? "18" : "24"} src={options.iconSource} alt={options.title} style={{ marginRight: "8px" }}></img>;

    const notYet = function () {
        message.warn(I18n.t("social.disabledText"));
    };

    const style = { backgroundColor: options.backgroundColor, color: options.textColor, fontWeight: "medium", width: props.width ? props.width : "100%" };

    return (
        <Button onClick={notYet} size={props.small ? "middle": "large"} style={style} icon={SocialIcon}>
            {I18n.t(options.textKey)}
        </Button>
    );
};

export default SocialButton;
