import React from "react";
import classnames from "classnames";

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import "./Sidebar.less";

const { SubMenu } = Menu;

class Sidebar extends React.Component {

    constructor() {
        super();
        this.state = {
            current: "1",
        };
    }

    handleClick = e => {
        this.setState({
            current: e.key,
        });

        if (typeof this.props.onItemClick === "function") {
            this.props.onItemClick(e.key);
        }
    };

    render () {
        // console.log(this.props.data);

        return (
            <div className={
                classnames({
                    "sidebar-root": true,
                    "gone-small-screen": !this.props.hamburgerMenu
                })
            }>
                <div className="sidebar-header">
                    <h1 className="header">Your backpack</h1>
                </div>
                <Menu
                    theme="light"
                    onClick={this.handleClick}
                    style={{ width: "100%" }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                    >
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Sidebar;
