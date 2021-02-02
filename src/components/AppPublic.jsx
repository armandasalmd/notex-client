import React from "react";
import { I18n } from "react-redux-i18n";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Navbar from "#/containers/Navbar";
import AboutPage from "#/pages/public/AboutPage";
import LandingPage from "#/pages/public/LandingPage";
import NotFoundPage from "#/pages/public/NotFoundPage";
import LoginPage from "#/pages/auth/LoginPage";
import RegisterPage from "#/pages/auth/RegisterPage";

import { withTitle } from "##/HeadTitle";
import { RouteUtils } from "@utils";

const AppPublic = (props) => {
    return (
        <>
            <Navbar menuItems={RouteUtils.getMenuItems(props.auth.isAuthenticated)} />
            <Switch>
                <Route
                    exact path={RouteUtils.app.public.landing.link}
                    component={withTitle({
                        component: LandingPage,
                        title: I18n.t(RouteUtils.app.public.landing.titleTextKey)
                    })}
                />
                <Route
                    exact path={RouteUtils.app.public.about.link}
                    component={withTitle({
                        component: AboutPage,
                        title: I18n.t(RouteUtils.app.public.about.titleTextKey)
                    })}
                />
                <Route
                    exact path={RouteUtils.app.auth.register.link}
                    component={withTitle({
                        component: RegisterPage,
                        title: I18n.t(RouteUtils.app.auth.register.titleTextKey)
                    })}
                />
                <Route
                    exact path={RouteUtils.app.auth.login.link}
                    component={withTitle({
                        component: LoginPage,
                        title: I18n.t(RouteUtils.app.auth.login.titleTextKey)
                    })}
                />
                <Route
                    component={withTitle({
                        component: NotFoundPage,
                        title: "Notex - error 404"
                    })}
                />
            </Switch>
        </>
    );
};

AppPublic.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(AppPublic);
