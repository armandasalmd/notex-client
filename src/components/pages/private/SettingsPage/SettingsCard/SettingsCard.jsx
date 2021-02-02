import React from "react";
import { I18n } from "react-redux-i18n";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Spin } from "antd";

const SettingsCard = props => {
    let isSpinning = false;

    switch(props.id) {
        case "section-details":
            isSpinning = props.loadingStates.personalDetails;
            break;
        case "section-app-settings":
            isSpinning = props.loadingStates.appSettings
            break;
        case "section-security":
            isSpinning = props.loadingStates.securitySettings
            break;
        default:
            break;
    }

    return (
        <section id={props.id}>
            <h1 className="title title--light title--primary">{ I18n.t(props.titleKey) || props.defaultTitle }</h1>
            <Spin spinning={isSpinning} tip={I18n.t("settings.saving")}>
                <div className="content-card full-width" style={{ minHeight: 128, padding: "16px" }}>
                    {props.innerComponent}
                </div>
            </Spin>
        </section>
    );
};

SettingsCard.propTypes = {
    loadingStates: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    loadingStates: state.settings.loadingStates
});

export default connect(mapStateToProps, {})(SettingsCard);
