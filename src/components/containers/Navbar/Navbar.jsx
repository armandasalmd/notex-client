import React from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { I18n } from "react-redux-i18n";

import "./Navbar.less";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";

const NavbarHamburger = props => {
    const { enabled, onClick, menuCollapsed } = props;
    const classes = classnames(["navbar__hamburger"], {
        "navbar__hamburger--hidden": !enabled
    });

    return (
        <div className={classes}>
            <Button onClick={onClick}>{React.createElement(menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}</Button>
        </div>
    );
};

const NavbarMenu = props => {
    const { menuItems, activeKey } = props;
    
    const menuElements = menuItems.map(item => {
        const classes = classnames(["navbar__menuItem"], {
            "navbar__menuItem--active": activeKey !== undefined && activeKey === item.link
        });

        return (
            <li key={item.link} className={classes}>
                <Link to={item.link}>
                    <p className="navbar__menuItemText">{I18n.t(item.navTextKey)}</p>
                </Link>
            </li>
        );
    });

    return (
        <ul className="navbar__menu">
            {menuElements}
        </ul>
    );
};

// const NavbarLanguagePicker = props => {

//     return (
//         <div className="navbar__languagePicker">
//             Picker
//         </div>
//     );
// };

const Navbar = props => {
    const { enableLanguagePicker, menuItems } = props;
    const path = props.location.pathname;

    return (
        <div className="navbar navbar--sticky">
            <NavbarHamburger />

            <Link to="/" className="navbar__brand">
                <img src="/logo.png" alt="logo" className="navbar__logo" />
                <span className="navbar__name">{I18n.t("appName")}</span>
            </Link>

            <NavbarMenu menuItems={menuItems} activeKey={path} />
        </div>
    );
};

Navbar.propTypes = {
    menuItems: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(Navbar);
