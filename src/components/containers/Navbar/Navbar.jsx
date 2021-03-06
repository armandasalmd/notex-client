import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { I18n } from "react-redux-i18n";

import "./Navbar.less";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import LanguagePicker from "##/LanguagePicker";
import BackpackMenu from "#/pages/private/NotePage/Sidebar";

const NavbarHamburger = (props) => {
    const { enabled, menuData } = props;

    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const classes = classnames(["navbar__hamburger"], {
        "navbar__hamburger--hidden": !enabled,
    });

    const toggleMenu = () => setMenuCollapsed(!menuCollapsed);
    const closeMenu = () => setMenuCollapsed(true);

    return (
        <div className={classes}>
            <Button onClick={toggleMenu}>
                {React.createElement(menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Drawer placement="left" closable={false} onClose={closeMenu} visible={!menuCollapsed} width="360px">
                <BackpackMenu hamburgerMenu={enabled} data={menuData} closeMenu={closeMenu} />
            </Drawer>
        </div>
    );
};

const NavbarMenu = (props) => {
    const { menuItems, activeKey } = props;

    const menuElements = menuItems.map((item) => {
        const classes = classnames(["navbar__menuItem"], {
            "navbar__menuItem--active": activeKey !== undefined && activeKey === item.link,
        });

        return (
            <li key={item.link} className={classes}>
                <Link to={item.link}>
                    <p className="navbar__menuItemText">{I18n.t(item.navTextKey)}</p>
                </Link>
            </li>
        );
    });

    return <ul className="navbar__menu">{menuElements}</ul>;
};

const NavbarLanguagePicker = (props) => {
    const classes = classnames(["navbar__languagePicker"], {
        "navbar__languagePicker--hidden": !props.enabled,
    });

    return (
        <div className={classes}>
            <LanguagePicker />
        </div>
    );
};

// const NavbarActions = (props) => {


//     return (
//         <div>
//             Navbar actions
//         </div>
//     );
// };

const Navbar = (props) => {
    const { enableLanguagePicker, menuItems, hamburgerEnabled, hamburgerMenuData } = props;
    const path = props.location.pathname;
    const classes = classnames(["navbar"], {
        "navbar--sticky": props.isSticky === undefined ? true : props.isSticky
    });

    return (
        <div className={classes}>
            <NavbarHamburger enabled={hamburgerEnabled} menuData={hamburgerMenuData} />

            <Link to="/" className="navbar__brand">
                <img src="/logo.png" alt="logo" className="navbar__logo" />
                <span className="navbar__name">{I18n.t("appName")}</span>
            </Link>

            <NavbarMenu menuItems={menuItems} activeKey={path} />
            <NavbarLanguagePicker enabled={enableLanguagePicker} />
        </div>
    );
};

Navbar.propTypes = {
    menuItems: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
};

export default withRouter(Navbar);
