import React from "react";
import classnames from "classnames";

import LanguagePicker from "##/LanguagePicker";

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

export default NavbarLanguagePicker;