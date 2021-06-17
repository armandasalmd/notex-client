import React from "react";

import Persona from "./Persona";
import PersonaOptionsMenu from "./PersonaOptionsMenu";

const PersonaOverlay = (props) => {
    const { onBookmarkClick } = props;

    return (
        <div className="navbar__actionItemOverlay" style={{ paddingBottom: 8 }}>
            <Persona />
            <div className="divider" style={{ margin: "-8px 12px 4px 12px" }} />
            <PersonaOptionsMenu onBookmarkClick={onBookmarkClick} />
        </div>
    );
};

export default PersonaOverlay;