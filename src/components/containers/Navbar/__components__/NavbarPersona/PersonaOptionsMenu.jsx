import React from "react";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { Link } from "react-router-dom";
import { changeLanguage } from "@actions/settingsActions";

import { RouteUtils, I18nUtils, MessageUtils } from "@utils";
import { Menu } from "antd";
import { BookOutlined, LogoutOutlined, GlobalOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const __PersonaOptionsMenu = (props) => {
    const { language, onBookmarkClick } = props;

    const languageMenuItems = Object.values(I18nUtils.languages).map((language) => {
        return <Menu.Item key={language.value}>{language.value.toUpperCase()}</Menu.Item>;
    });

    const onLanguageChange = ({ key }) => {
        if (Object.keys(I18nUtils.languages).includes(key)) {
            MessageUtils.handleDispatched(props.changeLanguage(key));
        }
    };

    return (
        <div>
            <Menu selectedKeys={[language]} mode="inline" onSelect={onLanguageChange}>
                <SubMenu key="changeLanguage" icon={<GlobalOutlined />} title={I18n.t("settings.sections.appSettings.labels.language")}>
                    {languageMenuItems}
                </SubMenu>
                <Menu.Item onClick={onBookmarkClick} key="bookmarks" icon={<BookOutlined />}>
                    {I18n.t("navText.bookmarks")}
                </Menu.Item>
                <Menu.Item key="logout" icon={<LogoutOutlined />}>
                    <Link to={RouteUtils.app.auth.logout.link}>{I18n.t(RouteUtils.app.auth.logout.navTextKey)}</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

const PersonaOptionsMenu = connect((state) => {
    return {
        language: state.settings.appSettings.preferredLanguage
    };
}, { changeLanguage })(__PersonaOptionsMenu);

export default PersonaOptionsMenu;