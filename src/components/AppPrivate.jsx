import React from "react";
import { I18n } from "react-redux-i18n";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Navbar from "#/containers/Navbar";
import NotePage from "#/pages/private/NotePage";
import SettingsPage from "#/pages/private/SettingsPage";
import ArticleManagementPage from "#/pages/private/ArticleManagementPage";
import EditArticlePage from "#/pages/private/EditArticlePage";
import LogoutPage from "#/pages/auth/LogoutPage";
import { sharedRoutes } from "#/AppShared";
import RenderPage from "#/RenderPage";
import InitAppPrivate from "#/InitAppPrivate";

import { RouteUtils } from "@utils";

const AppPrivate = props => {
    const noteMenuAvailable = props.location.pathname === RouteUtils.app.private.main.link;

    return (
        <>
            <InitAppPrivate />
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
                <Route
                    exact
                    path={RouteUtils.app.private.articleManagement.link}
                    component={RenderPage(ArticleManagementPage, I18n.t(RouteUtils.app.private.articleManagement.titleTextKey))}
                />
                <Route
                    exact
                    path={RouteUtils.app.private.editArticle.link}
                    component={RenderPage(EditArticlePage, I18n.t(RouteUtils.app.private.editArticle.titleTextKey))}
                />
                <Route exact path={RouteUtils.app.auth.logout.link} component={LogoutPage} />
                {sharedRoutes()}
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

export default connect(mapStateToProps, {})(AppPrivate);
