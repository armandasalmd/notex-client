import React from "react";
import { I18n } from "react-redux-i18n";

import { Menu } from "antd";
import { UserOutlined, AppstoreOutlined, SecurityScanOutlined } from "@ant-design/icons";

const SettingsSidebar = ({ sections }) => {
    const handleClick = () => {
        return;
    }

    const iconComponents = [
        <UserOutlined />,
        <AppstoreOutlined />,
        <SecurityScanOutlined />
    ];

    return (
        <nav className="content-card content-card--sticky full-width" style={{ paddingBottom: "8px" }}>
            <h2 className="header" style={{ margin: "10px 0 10px 16px" }}>
                {I18n.t("settings.title")}
            </h2>
            <Menu selectable={false} onClick={handleClick} mode="vertical">
                {
                    sections.map(function (section, index) {
                        const text = I18n.t(section.titleKey);

                        return (
                            <Menu.Item key={index} icon={iconComponents[index]}>
                                <a href={`#${section.id}`}>{text || section.defaultTitle}</a>
                            </Menu.Item>
                        );
                    })
                }
            </Menu>
        </nav>
    );
};

export default SettingsSidebar;
