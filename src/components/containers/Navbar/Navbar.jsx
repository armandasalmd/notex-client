import React, { useState, useRef, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { I18n } from "react-redux-i18n";

import "./Navbar.less";
import { MenuUnfoldOutlined, MenuFoldOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Drawer } from "antd";
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

const NotificationOverlay = (props) => {
    return (
        <div id={props.id} className="navbar__actionItemOverlay content-card">
            NotificationOverlay
        </div>
    );
};

const NavbarNotificationBell = (props) => {
    const { onClick, open } = props;

    return (
        <div className="navbar__actionItem">
            <div className="navbar__actionItemContent" onClick={onClick}>
                <Badge count={5} size="default">
                    <BellOutlined style={{ fontSize: 20 }} />
                </Badge>
            </div>
            { open && <NotificationOverlay id="notificationOverlay" /> }
        </div>
    );
};

const PersonaOverlay = (props) => {
    return (
        <div id={props.id} className="navbar__actionItemOverlay content-card">
            PersonaOverlay
        </div>
    );
};

const NavbarPersona = (props) => {
    const { onClick, open, profileUrl } = props;

    return (
        <div id="navbarPersona" className="navbar__actionItem">
            <div className="navbar__actionItemContent" onClick={onClick}>
                {profileUrl !== undefined ? <Avatar src={profileUrl} /> : <UserOutlined />}
            </div>
            { open && <PersonaOverlay id="personaOverlay" /> }
        </div>
    );
};

function useOutsideClick(ref, callback) {
    useEffect(() => {
        document.addEventListener("mousedown", callback)
        return () => {
            document.removeEventListener("mousedown", callback);
        };
    }, [ref, callback]);
}

const NavbarActions = (props) => {
    const wrapperRef = useRef(null);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [personaOpen, setPersonaOpen] = useState(false);

    const notificationClick = () => {
        if (personaOpen === true) {
            setPersonaOpen(false);
        }

        setNotificationOpen(!notificationOpen);
    };

    const personaClick = () => {
        if (notificationOpen === true) {
            setNotificationOpen(false);
        }

        setPersonaOpen(!personaOpen);
    };

    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            if (notificationOpen === true) {
                setNotificationOpen(false);
            } else if (personaOpen === true) {
                setPersonaOpen(false);
            }
        }
    }

    useOutsideClick(wrapperRef, handleClickOutside);

    return (
        <div ref={wrapperRef} className="navbar__actions">
            <NavbarNotificationBell open={notificationOpen} onClick={notificationClick} />
            <NavbarPersona open={personaOpen} onClick={personaClick} />
        </div>
    );
};

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

Navbar.propTypes = {
    menuItems: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
};

export default withRouter(Navbar);
