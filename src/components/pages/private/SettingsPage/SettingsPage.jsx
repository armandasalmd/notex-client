import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Constants } from "@utils";

import "./SettingsPage.less";
import { Row, Col } from "antd";
import SettingsCard, { SectionAppSettings, SectionPersonalDetails, SectionSecurityAccount } from "./SettingsCard";
import SettingsSidebar from "./SettingsSidebar";

const SettingsPage = (props) => {
    const { settingsSections } = Constants;

    const getSectionComponentByItsName = (sectionName, propsToPass) => {
        const availableSections = {
            "SectionAppSettings": SectionAppSettings,
            "SectionPersonalDetails": SectionPersonalDetails,
            "SectionSecurityAccount": SectionSecurityAccount
        };
        
        const selectedComponent = availableSections[sectionName];

        return selectedComponent ? 
            React.createElement(selectedComponent, propsToPass) :
            <p>Unknown section</p>;
    };

    const dataDictionary = {
        "SectionAppSettings": props.settings.appSettings,
        "SectionPersonalDetails": props.settings.personalDetails,
        "SectionSecurityAccount": props.settings.securitySettings
    }

    const sectionComponents = settingsSections.map(function (section) {
        const props = { 
            ...section,
            data: dataDictionary[section.componentName] || {}
        };

        return (
            <SettingsCard
                key={section.id}
                id={section.id}
                titleKey={section.titleKey}
                defaultTitle={section.defaultTitle}
                innerComponent={getSectionComponentByItsName(section.componentName, props)}
            />
        );
    });

    return (
        <div className="settings-root full-width scroll-container" id="settings-root">
            <Row justify="center" gutter={[18, 18]}>
                <Col className="settings-sidebar" xs={24} sm={24} md={7} lg={7} xl={6}>
                    <SettingsSidebar sections={settingsSections} />
                </Col>
                <Col className="settings-main" xs={24} sm={24} md={17} lg={17} xl={18}>
                    {sectionComponents}
                </Col>
            </Row>
        </div>
    );
};

SettingsPage.propTypes = {
    settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    settings: state.settings
});

export default connect(mapStateToProps)(SettingsPage);
