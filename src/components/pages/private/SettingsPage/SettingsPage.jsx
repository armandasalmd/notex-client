import React from "react";

import { Constants, GlobalUtils } from "@utils";

import "./SettingsPage.less";
import { Row, Col } from "antd";
import SettingsCard, { SectionAppSettings, SectionPersonalDetails, SectionSecurityAccount } from "./SettingsCard";
import SettingsSidebar from "./SettingsSidebar";

const SettingsPage = () => {
    const { settingsSections } = Constants;

    const getSectionComponentByItsName = (sectionName, propsToPass) => {
        switch (sectionName) {
            case GlobalUtils.getComponentName(SectionAppSettings):
                return React.createElement(SectionAppSettings, propsToPass);
            case GlobalUtils.getComponentName(SectionPersonalDetails):
                return React.createElement(SectionPersonalDetails, propsToPass);
            case GlobalUtils.getComponentName(SectionSecurityAccount):
                return React.createElement(SectionSecurityAccount, propsToPass);
            default:
                return <p>Unknown section</p>;
        }
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
