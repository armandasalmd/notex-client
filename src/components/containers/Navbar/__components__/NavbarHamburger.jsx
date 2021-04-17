import React, { useState } from "react";
import classnames from "classnames";

import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
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
                <MenuUnfoldOutlined />
            </Button>
            <Drawer placement="left" closable={false} onClose={closeMenu} visible={!menuCollapsed} width="360px">
                <BackpackMenu hamburgerMenu={enabled} data={menuData} closeMenu={closeMenu} />
            </Drawer>
        </div>
    );
};

export default NavbarHamburger;