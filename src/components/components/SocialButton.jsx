import React from "react";

import { Constants } from "@utils";
import { Button, message } from "antd";

const SocialButton = props => {
    const { options = Constants.socialButtonTypes.google } = props;
    const SocialIcon = <img width="24" src={options.iconSource} alt={options.title} style={{ marginRight: "8px" }}></img>;

    const notYet = function () {
        message.warn({
            content: "Ups. Not yet! Wait for this feature to arrive",
            duration: 6
        });
    }

    return (
        <Button
            onClick={notYet}
            size="large"
            style={{ backgroundColor: options.backgroundColor, color: options.textColor, fontWeight: "medium", width: "100%" }}
            icon={SocialIcon}
        >
            {options.loginButtonText}
        </Button>
    );
};

export default SocialButton;
