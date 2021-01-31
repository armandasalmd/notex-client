import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Spin } from "antd";

const SettingsCard = props => {
    const { t } = useTranslation();

    console.log(props);
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
            <h1 className="title title--light title--primary">{ t(props.titleKey) || props.defaultTitle }</h1>
            <Spin spinning={isSpinning} tip={t("settings.saving")}>
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
