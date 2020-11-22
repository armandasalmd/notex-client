import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Navbar from "#/containers/Navbar";
import NotePage from "#/pages/private/NotePage";
import SettingsPage from "#/pages/private/SettingsPage";
import LogoutPage from "#/pages/auth/LogoutPage";

import { RouteUtils } from "@utils";
import { useTranslation } from "react-i18next";
import RenderPage from "#/RenderPage";

const AppPrivate = props => {
    const { t } = useTranslation();

    return (
        <>
            <Navbar hamburgerEnabled={true} hamburgerMenuData={{}} menuItems={RouteUtils.getMenuItems(props.auth.isAuthenticated)} />
            <Switch>
                <Route
                    exact
                    path={RouteUtils.app.private.main.link}
                    component={RenderPage(NotePage, t(RouteUtils.app.private.note.titleTextKey))}
                />
                <Route
                    exact
                    path={`${RouteUtils.app.private.note.link}/:noteId`}
                    component={RenderPage(NotePage, t(RouteUtils.app.private.note.titleTextKey))}
                />
                <Route
                    exact
                    path={RouteUtils.app.private.settings.link}
                    component={RenderPage(SettingsPage, t(RouteUtils.app.private.settings.titleTextKey))}
                />
                <Route exact path={RouteUtils.app.auth.logout.link} component={LogoutPage} />
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </>
    );
};

AppPrivate.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(AppPrivate);
