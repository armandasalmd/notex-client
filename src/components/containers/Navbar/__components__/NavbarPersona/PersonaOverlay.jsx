import React from "react";

import Persona from "./Persona";
import PersonaOptionsMenu from "./PersonaOptionsMenu";

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

export default PersonaOverlay;