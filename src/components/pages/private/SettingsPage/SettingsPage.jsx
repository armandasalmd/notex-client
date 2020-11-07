import React from "react";

import { Constants } from "@utils";

import "./SettingsPage.less";
import { Row, Col } from "antd";
import { AppSettings, PersonalDetails, SecurityAccount, SettingsSidebar } from "./__components__";

function SectionComponent(props) {
    const innerComponent = props.innerComponent;

    return (
        <section id={props.id}>
            <h1 className="title title--light title--primary">{props.title}</h1>
            <div className="content-card full-width" style={{minHeight: 128}}>
                {innerComponent}
            </div>
        </section>
    );
}

const SettingsPage = () => {
    const sections = Constants.settingsSections;

    const sectionComponents = [
        <PersonalDetails />,
        <AppSettings />,
        <SecurityAccount />
    ];

    return (
        <div className="settings-root full-width scroll-container" id="settings-root">
            <Row justify="center" gutter={[18, 18]}>
                <Col className="settings-sidebar" xs={24} sm={24} md={7} lg={7} xl={6}>
                    <SettingsSidebar sections={sections} />
                </Col>
                <Col className="settings-main" xs={24} sm={24} md={17} lg={17} xl={18}>
                    {
                        sections.map(function (section, index) {
                            return <SectionComponent key={index} id={section.id} title={section.defaultTitle} innerComponent={sectionComponents[index]} />;
                        })
                    }
                    {/* <SectionComponent id="section-details" title="Personal details" innerComponent={<PersonalDetails />} />
                    <SectionComponent id="section-app-settings" title="App settings" innerComponent={<AppSettings />} />
                    <SectionComponent id="section-security" title="Security and account" innerComponent={<SecurityAccount />} /> */}
                </Col>
            </Row>
        </div>
    );
};

export default SettingsPage;
