import React from "react";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { Link } from "react-router-dom";
import { changeLanguage } from "@actions/settingsActions";

import { RouteUtils, I18nUtils, MessageUtils } from "@utils";
import { Menu } from "antd";
import { LogoutOutlined, GlobalOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const __PersonaOptionsMenu = (props) => {
    const { language } = props;

    const languageMenuItems = Object.values(I18nUtils.languages).map((language) => {
        return <Menu.Item key={language.value}>{language.value.toUpperCase()}</Menu.Item>;
    });

    const onLanguageChange = ({ key }) => {
        if (Object.keys(I18nUtils.languages).includes(key)) {
            MessageUtils.handleDispatched(props.changeLanguage(key));
        }
    };

    return (
        <Menu selectedKeys={[language]} mode="inline" onSelect={onLanguageChange}>
            <SubMenu key="changeLanguage" icon={<GlobalOutlined />} title={I18n.t("settings.sections.appSettings.labels.language")}>
                {languageMenuItems}
            </SubMenu>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
                <Link to={RouteUtils.app.auth.logout.link}>{I18n.t(RouteUtils.app.auth.logout.navTextKey)}</Link>
            </Menu.Item>
        </Menu>
    );
};

const PersonaOptionsMenu = connect((state) => {
    return {
        language: state.settings.appSettings.preferredLanguage
    };
}, { changeLanguage })(__PersonaOptionsMenu);

export default PersonaOptionsMenu;