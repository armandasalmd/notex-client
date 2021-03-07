import React, { useState, useRef, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";

import { RouteUtils, I18nUtils } from "@utils";
import { changeLanguage } from "@actions/settingsActions";

import "./Navbar.less";
import { MenuUnfoldOutlined, MenuOutlined, UserOutlined, LogoutOutlined, GlobalOutlined } from "@ant-design/icons";
import { Avatar, Button, Drawer, Menu, Dropdown } from "antd";
import LanguagePicker from "##/LanguagePicker";
import BackpackMenu from "#/pages/private/NotePage/Sidebar";

const { SubMenu } = Menu;

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
                <MenuUnfoldOutlined />
            </Button>
            <Drawer placement="left" closable={false} onClose={closeMenu} visible={!menuCollapsed} width="360px">
                <BackpackMenu hamburgerMenu={enabled} data={menuData} closeMenu={closeMenu} />
            </Drawer>
        </div>
    );
};

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

const NavbarMenu = (props) => {
    const { menuItems, activeKey } = props;
    const [mQuery, setMQuery] = React.useState({
        matches: window.innerWidth > 768 ? true : false,
    });

    useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 768px)");
        mediaQuery.addListener(setMQuery);

        return () => mediaQuery.removeListener(setMQuery);
    }, []);

    if (mQuery.matches) {
        var menuElements = menuItems.map((item) => {
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
    }

    return mQuery.matches ? <ul className="navbar__menu">{menuElements}</ul> : <NavbarDropdownMenu {...props} />;
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

// const NotificationOverlay = (props) => {
//     return (
//         <div id={props.id} className="navbar__actionItemOverlay">
//             NotificationOverlay
//         </div>
//     );
// };

// const NavbarNotificationBell = (props) => {
//     const { onClick, open } = props;

//     return (
//         <div className="navbar__actionItem">
//             <div className="navbar__actionItemContent" onClick={onClick}>
//                 <Badge count={0} size="default">
//                     <BellOutlined style={{ fontSize: 20 }} />
//                 </Badge>
//             </div>
//             {open && <NotificationOverlay id="notificationOverlay" />}
//         </div>
//     );
// };

const __Persona = (props) => {
    const { name, email, avatarUrl } = props;

    return (
        <div className="persona">
            <Avatar
                className="persona__avatar"
                size={40}
                src={RouteUtils.resolveUrl(avatarUrl)}
                icon={<UserOutlined />}
                style={{ backgroundColor: "#d4be92" }}
            />
            <div className="persona__info">
                <p className="persona__name">{name}</p>
                <p className="persona__mail">{email}</p>
            </div>
        </div>
    );
};

const Persona = connect((state) => {
    return {
        name: `${state.settings.personalDetails.firstname} ${state.settings.personalDetails.lastname}`,
        email: state.settings.personalDetails.email,
        avatarUrl: state.settings.personalDetails.avatarUrl
    };
}, { changeLanguage })(__Persona);

const __PersonaOptionsMenu = (props) => {
    const { language } = props;

    const languageMenuItems = Object.values(I18nUtils.languages).map((language) => {
        return <Menu.Item key={language.value}>{language.value.toUpperCase()}</Menu.Item>;
    });

    const onLanguageChange = ({ key }) => {
        if (Object.keys(I18nUtils.languages).includes(key)) {
            props.changeLanguage(key);
        }
    };

    return (
        <Menu selectedKeys={[language]} mode="inline" onSelect={onLanguageChange}>
            <SubMenu key="changeLanguage" icon={<GlobalOutlined />} title={I18n.t("settings.sections.appSettings.labels.language")}>
                {languageMenuItems}
            </SubMenu>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
                <Link to={RouteUtils.app.auth.logout.link}>{I18n.t(RouteUtils.app.auth.logout.navTextKey)}</Link>
            </Menu.Item>
        </Menu>
    );
};

const PersonaOptionsMenu = connect((state) => {
    return {
        language: state.settings.appSettings.preferredLanguage
    };
}, { changeLanguage })(__PersonaOptionsMenu);

const PersonaOverlay = (props) => {
    const { avatarUrl } = props;

    return (
        <div id={props.id} className="navbar__actionItemOverlay" style={{ paddingBottom: 8 }}>
            <Persona name="Armandas Barkauskas" email="armandas.bark@gmail.com" avatarUrl={avatarUrl} />
            <div className="divider" style={{ margin: "-8px 12px 4px 12px" }} />
            <PersonaOptionsMenu />
        </div>
    );
};

const NavbarPersona = (props) => {
    const { onClick, open, avatarUrl } = props;

    return (
        <div id="navbarPersona" className="navbar__actionItem">
            <div className="navbar__actionItemContent" onClick={onClick}>
                <UserOutlined />
            </div>
            {open && <PersonaOverlay id="personaOverlay" avatarUrl={avatarUrl} />}
        </div>
    );
};

function useOutsideClick(ref, callback) {
    useEffect(() => {
        document.addEventListener("mousedown", callback);
        return () => {
            document.removeEventListener("mousedown", callback);
        };
    }, [ref, callback]);
}

const NavbarActions = (props) => {
    const wrapperRef = useRef(null);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [personaOpen, setPersonaOpen] = useState(false);

    // const notificationClick = () => {
    //     if (personaOpen === true) {
    //         setPersonaOpen(false);
    //     }

    //     setNotificationOpen(!notificationOpen);
    // };

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
            {/* <NavbarNotificationBell open={notificationOpen} onClick={notificationClick} /> */}
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
