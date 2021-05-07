import React, { useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { I18n } from "react-redux-i18n";

import { GlobalUtils } from "@utils";

import NavbarDropdownMenu from "./NavbarDropdownMenu";

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

    const isActive = (activeKey, navItem) => {
        if (GlobalUtils.getValue(navItem, "useStartWithMatch", false)) {
            return activeKey.startsWith(navItem.link);
        } else {
            return activeKey === navItem.link;
        }
    };

    if (mQuery.matches) {
        var menuElements = menuItems.map((item) => {
            const classes = classnames(["navbar__menuItem"], {
                "navbar__menuItem--active": activeKey !== undefined && isActive(activeKey, item),
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

export default NavbarMenu;