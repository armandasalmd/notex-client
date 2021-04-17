import React from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import { I18n } from "react-redux-i18n";

import "./Navbar.less";

import { NavbarHamburger, NavbarLanguagePicker, NavbarMenu, NavbarActions } from "./__components__";

const Navbar = (props) => {
    const { enableLanguagePicker, enableNavbarActions, menuItems, hamburgerEnabled, hamburgerMenuData } = props;
    const path = props.location.pathname;
    const classes = classnames(["navbar"], {
        "navbar--sticky": props.isSticky === undefined ? true : props.isSticky,
    });

    return (
        <div className={classes}>
            <NavbarHamburger enabled={hamburgerEnabled} menuData={hamburgerMenuData} />

            <Link to="/" className="navbar__brand">
                <img src="/logo.png" alt="logo" className="navbar__logo" />
                <span className="navbar__name">{I18n.t("appName")}</span>
            </Link>

            <div className="navbar__menuContainer">
                <NavbarMenu menuItems={menuItems} activeKey={path} />
                {enableNavbarActions && <NavbarActions />}
                {enableLanguagePicker && <NavbarLanguagePicker enabled />}
            </div>
        </div>
    );
};

export default withRouter(Navbar);
