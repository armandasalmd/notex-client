import React from "react";
import "./SettingsPage.less";

import { Row, Col } from "antd";

import { AppSettings, PersonalDetails, SecurityAccount, SettingsSidebar } from "./__components__";

function SectionComponent(props) {
    const innerComponent = props.innerComponent;

    return (
        <section>
            <h1 className="title title--light title--primary">{props.title}</h1>
            <div className="content-card full-width" style={{minHeight: 128}}>
                {innerComponent}
            </div>
        </section>
    );
}

const SettingsPage = () => {
    return (
        <div className="settings-root">
            <Row justify="center" gutter={[18, 18]}>
                <Col className="settings-sidebar" xs={24} sm={24} md={7} lg={7} xl={6}>
                    <SettingsSidebar />
                </Col>
                <Col className="settings-main" xs={24} sm={24} md={17} lg={17} xl={18}>
                    <SectionComponent title="Personal details" innerComponent={<PersonalDetails />} />
                    <SectionComponent title="App settings" innerComponent={<AppSettings />} />
                    <SectionComponent title="Security and account" innerComponent={<SecurityAccount />} />
                </Col>
            </Row>
        </div>
    );
};

export default SettingsPage;
