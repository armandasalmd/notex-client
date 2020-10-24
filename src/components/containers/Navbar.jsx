import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { RouteUtils } from "@utils";
import "./Navbar.less";

import { Layout, Menu } from "antd";
const { Header } = Layout;

const getMenuItems = isAuth => {
    const offlineLinks = [RouteUtils.app.public.landing, RouteUtils.app.public.about, RouteUtils.app.auth.login, RouteUtils.app.auth.register];
    const onlineLinks = [RouteUtils.app.private.main, RouteUtils.app.private.settings, RouteUtils.app.auth.logout];

    return isAuth ? onlineLinks : offlineLinks;
};

const Navbar = props => {
    const { t } = useTranslation();
    const { pathname: path } = props.location;
    const menuItems = getMenuItems(props.auth.isAuthenticated).map(item => {
        return (
            <Menu.Item key={item.link}>
                <p className="menu">{t(item.navTextKey)}</p>
                <Link to={item.link} />
            </Menu.Item>
        );
    });

    return (
        <Header className="navbar">
            <div>
                <div className="logo">
                     <a href="/">
                         <img src="/logo.png" alt="logo" />
                         <span className="title">Notex</span>
                     </a>
                </div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    selectedKeys={[path]}
                    style={{
                        lineHeight: "64px",
                        float: "right",
                        marginRight: "2%"
                    }}
                >
                    {menuItems}
                </Menu>
            </div>
        </Header>
    );
};

Navbar.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Navbar);
