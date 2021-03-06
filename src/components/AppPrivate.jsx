import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { setLocale } from "react-redux-i18n";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { initSettings } from "@actions/settingsActions";

import Navbar from "#/containers/Navbar";
import NotePage from "#/pages/private/NotePage";
import SettingsPage from "#/pages/private/SettingsPage";
import LogoutPage from "#/pages/auth/LogoutPage";

import { GlobalUtils, RouteUtils, I18nUtils } from "@utils";
import { I18n } from "react-redux-i18n";
import RenderPage from "#/RenderPage";

const AppPrivate = props => {
    const noteMenuAvailable = props.location.pathname === RouteUtils.app.private.main.link;

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

    return (
        <>
            <Navbar enableNavbarActions hamburgerEnabled={noteMenuAvailable} menuItems={RouteUtils.getMenuItems(props.auth.isAuthenticated)} />
            <Switch>
                <Route
                    exact
                    path={RouteUtils.app.private.main.link}
                    component={RenderPage(NotePage, I18n.t(RouteUtils.app.private.note.titleTextKey))}
                />
                <Route
                    exact
                    path={RouteUtils.app.private.settings.link}
                    component={RenderPage(SettingsPage, I18n.t(RouteUtils.app.private.settings.titleTextKey))}
                />
                <Route exact path={RouteUtils.app.auth.logout.link} component={LogoutPage} />
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </>
    );
};

AppPrivate.propTypes = {
    auth: PropTypes.object.isRequired,
    currentLanguage: PropTypes.string.isRequired,
    settings: PropTypes.object.isRequired,
    setLocale: PropTypes.func.isRequired,
    initSettings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    currentLanguage: state.i18n.locale,
    settings: state.settings
});

export default connect(mapStateToProps, { setLocale, initSettings })(AppPrivate);
