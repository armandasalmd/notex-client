import React from "react";

import { Constants } from "@utils";

import "./SettingsPage.less";
import { Row, Col } from "antd";
import SettingsCard, { SectionAppSettings, SectionPersonalDetails, SectionSecurityAccount } from "./SettingsCard";
import SettingsSidebar from "./SettingsSidebar";

const SettingsPage = () => {
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

    const sectionComponents = settingsSections.map(function (section) {
        return (
            <SettingsCard
                key={section.id}
                id={section.id}
                title={section.defaultTitle}
                innerComponent={getSectionComponentByItsName(section.componentName, section)}
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

export default SettingsPage;
