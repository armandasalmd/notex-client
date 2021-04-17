import React from "react";
import { Link } from "react-router-dom";
import { I18n } from "react-redux-i18n";

import { Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const NavbarDropdownMenu = (props) => {
    const { activeKey, menuItems } = props;

    const menu = (
        <Menu selectedKeys={[activeKey]}>
            {menuItems?.map((item) => {
                return (
                    <Menu.Item key={item.link}>
                        <Link to={item.link}>{I18n.t(item.navTextKey)}</Link>
                    </Menu.Item>
                );
            })}
        </Menu>
    );

    return (
        <div className="navbar__dropdownMenu">
            <Dropdown overlay={menu} placement="bottomRight">
                <MenuOutlined />
            </Dropdown>
        </div>
    );
};

export default NavbarDropdownMenu;