import React from "react";
import classnames from "classnames";

import "./Sidebar.less";
import { Header, NotebookMenu } from "./__components__";

const Sidebar = props => {
    const tryCloseMenu = () => {
        if (typeof props.closeMenu === "function") {
            props.closeMenu();
        }
    };

    return (
        <div
            className={classnames({
                "sidebar-root": true,
                "gone-small-screen": !props.hamburgerMenu
            })}
        >
            <Header isHamburgerMenu={props.hamburgerMenu} onClose={tryCloseMenu} />
            <NotebookMenu tryCloseMenu={tryCloseMenu} />
        </div>
    );
};

export default Sidebar;
