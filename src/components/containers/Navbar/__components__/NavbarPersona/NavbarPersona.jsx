import React from "react";

import { UserOutlined } from "@ant-design/icons";

import PersonaOverlay from "./PersonaOverlay";

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

export default NavbarPersona;