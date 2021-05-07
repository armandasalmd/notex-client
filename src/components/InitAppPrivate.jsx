import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setLocale } from "react-redux-i18n";

import { GlobalUtils, I18nUtils } from "@utils"
import { initSettings } from "@actions/settingsActions";

const InitAppPrivate = (props) => {
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if (props.settings.initialised === false) {
            props.initSettings();
        }
    });

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if (props.settings.initialised === true) {
            const lang = GlobalUtils.getValue(props, "settings.appSettings.preferredLanguage", I18nUtils.DEFAULT_LANGUAGE);
    
            if (GlobalUtils.hasLength(lang) && lang !== props.currentLanguage) {
                I18nUtils.saveLanguageLocally(lang); // save to localStorage
                props.setLocale(lang); // swap render language object
            }
        }
    });

    return null;
};

InitAppPrivate.propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    settings: PropTypes.object.isRequired,
    setLocale: PropTypes.func.isRequired,
    initSettings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    currentLanguage: state.i18n.locale,
    settings: state.settings
});

export default connect(mapStateToProps, { setLocale, initSettings })(InitAppPrivate);
