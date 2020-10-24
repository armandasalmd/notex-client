import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutPage from "#/pages/public/AboutPage";
import LandingPage from "#/pages/public/LandingPage";
import NotFoundPage from "#/pages/public/NotFoundPage";
import LoginPage from "#/pages/auth/LoginPage";
import RegisterPage from "#/pages/auth/RegisterPage";

import { withTitle } from "##/HeadTitle";
import { RouteUtils } from "@utils";
import { useTranslation } from 'react-i18next';

const AppPublic = () => {
    const { t } = useTranslation();

    return (
        <>
            <Switch>
                <Route
                    exact path={RouteUtils.app.public.landing.link}
                    component={withTitle({
                        component: LandingPage,
                        title: t(RouteUtils.app.public.landing.titleTextKey)
                    })}
                />
                <Route
                    exact path={RouteUtils.app.public.about.link}
                    component={withTitle({
                        component: AboutPage,
                        title: t(RouteUtils.app.public.about.titleTextKey)
                    })}
                />
                <Route
                    exact path={RouteUtils.app.auth.register.link}
                    component={withTitle({
                        component: RegisterPage,
                        title: t(RouteUtils.app.auth.register.titleTextKey)
                    })}
                />
                <Route
                    exact path={RouteUtils.app.auth.login.link}
                    component={withTitle({
                        component: LoginPage,
                        title: t(RouteUtils.app.auth.login.titleTextKey)
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

export default AppPublic;
