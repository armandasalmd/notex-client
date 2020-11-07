import React from "react";

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
                Site settings
            </h2>
            <Menu selectable={false} onClick={handleClick} mode="vertical">
                {
                    sections.map(function (section, index) {
                        return (
                            <Menu.Item key={index} icon={iconComponents[index]}>
                                <a href={`#${section.id}`}>{section.defaultTitle}</a>
                            </Menu.Item>
                        );
                    })
                }

                {/* <Menu.Item key="2" icon={<AppstoreOutlined />}>
                    App settings
                </Menu.Item>
                <Menu.Item key="3" icon={<SecurityScanOutlined />}>
                    Security and account
                </Menu.Item> */}
            </Menu>
        </nav>
    );
};

export default SettingsSidebar;
