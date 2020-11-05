import React from "react";

import { Menu } from "antd";
import { UserOutlined, AppstoreOutlined, SecurityScanOutlined } from "@ant-design/icons";

class SettingsSidebar extends React.Component {
    state = {
        current: "mail"
    };

    render() {
        return (
            <div className="content-card content-card--sticky full-width">
                <h2 class="header" style={{margin: "10px 0 10px 16px"}}>Site settings</h2>
                <Menu selectable={false} onClick={this.handleClick} mode="vertical">
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        Personal details
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AppstoreOutlined />}>
                        App settings
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SecurityScanOutlined />}>
                        Security and account
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default SettingsSidebar;
