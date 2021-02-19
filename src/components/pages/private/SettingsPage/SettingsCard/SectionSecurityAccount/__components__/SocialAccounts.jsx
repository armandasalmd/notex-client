import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Constants } from "@utils";
import { unlinkSocialAccount } from "@actions/settingsActions";

import SocialButton from "##/SocialButton";

const SocialAccounts = (props) => {
    const tBase = "settings.sections.securityAndAccount";

    const googleOptions = { ...Constants.socialButtonTypes.google };
    const facebookOptions = { ...Constants.socialButtonTypes.facebook };

    const onUnlinkSocialAccount = (socialAcountType) => {
        if (socialAcountType) {
            props.unlinkSocialAccount(socialAcountType);
        }
    };

    if (Array.isArray(props.linkedProviders)) {
        googleOptions.textKey = `${tBase}.${
            props.linkedProviders.includes("google")
            ? "google.unlink"
            : "google.link"
        }`;
        facebookOptions.textKey = `${tBase}.${
            props.linkedProviders.includes("facebook")
            ? "facebook.unlink"
            : "facebook.link"
        }`;
    }

    return (
        <div className="wrap-container">
            <SocialButton small width="256px" options={googleOptions} onClick={!!props.linkedProviders.includes("google") ? () => onUnlinkSocialAccount("google") : null} />
            <SocialButton small width="256px" options={facebookOptions} onClick={!!props.linkedProviders.includes("facebook") ? () => onUnlinkSocialAccount("facebook") : null} />
        </div>
    );
};

SocialAccounts.propTypes = {
    unlinkSocialAccount: PropTypes.func.isRequired
};

export default connect(null, { unlinkSocialAccount })(SocialAccounts);