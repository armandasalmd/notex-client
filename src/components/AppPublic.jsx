import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutPage from "#/pages/public/AboutPage";
import LandingPage from "#/pages/public/LandingPage";
import NotFoundPage from "#/pages/public/NotFoundPage";
import LoginPage from "#/pages/auth/LoginPage";
import RegisterPage from "#/pages/auth/RegisterPage";

import { withTitle } from "##/HeadTitle";
import { RouteUtils } from "@utils";

const AppPublic = () => {
    return (
        <>
            <Switch>
                <Route
                    exact path={RouteUtils.app.public.landing}
                    component={withTitle({
                        component: LandingPage,
                        title: "Welcote to Notex"
                    })}
                />
                <Route
                    exact path={RouteUtils.app.public.about}
                    component={withTitle({
                        component: AboutPage,
                        title: "Welcote to Notex"
                    })}
                />
                <Route
                    exact path={RouteUtils.app.auth.register}
                    component={withTitle({
                        component: RegisterPage,
                        title: "Notex - Register"
                    })}
                />
                <Route
                    exact path={RouteUtils.app.auth.login}
                    component={withTitle({
                        component: LoginPage,
                        title: "Notex - Login"
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
