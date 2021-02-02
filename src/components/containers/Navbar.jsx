import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import { I18n } from "react-redux-i18n";

import "./Navbar.less";
import { Drawer, Layout, Menu, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import BackpackMenu from "#/pages/private/NotePage/Sidebar";

const { SubMenu } = Menu;
const { Header } = Layout;

const Navbar = ({menuItems, location, ...rest}) => {
    // ...rest can be: hamburgerEnabled, hamburgerMenuComponent
    const [ menuCollapsed, setMenuCollapsed ] = useState(true);
    const { pathname: path } = location;

    const itemsComponents = menuItems.map(item => {
        return (
            <Menu.Item key={item.link}>
                <p className="menu">{I18n.t(item.navTextKey)}</p>
                <Link to={item.link} />
            </Menu.Item>
        );
    });

    const onCloseMenu = () => {
        setMenuCollapsed(true);
    };

    return (
        <>
            <Header className="navbar navbar--sticky">
                <div className="navbar-inner">
                    <div className="navbar-left">
                        <Button
                            className={classnames({
                                gone: !rest.hamburgerEnabled,
                                "gone-big-screen": true
                            })}
                            onClick={() => setMenuCollapsed(!menuCollapsed)}
                        >
                            {React.createElement(menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                        </Button>
                        <div className="navbar-logo">
                            <Link to="/">
                                <img src="/logo.png" alt="logo" />
                                <span className="title">Notex</span>
                            </Link>
                        </div>
                    </div>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        selectedKeys={[path]}
                        style={{
                            lineHeight: "32px",
                            float: "right",
                            paddingTop: "18px"
                        }}
                    >
                        {itemsComponents}
                    </Menu>
                </div>
            </Header>
            <Drawer
                placement="left"
                closable={false}
                onClose={onCloseMenu}
                visible={!menuCollapsed}
                width="360px"
            >
                <BackpackMenu
                    hamburgerMenu={rest.hamburgerEnabled}
                    data={rest.hamburgerMenuData}
                    closeMenu={onCloseMenu}
                />
            </Drawer>
        </>
    );
};

export default withRouter(Navbar);