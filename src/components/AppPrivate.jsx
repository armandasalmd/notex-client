import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NotePage from "#/pages/private/NotePage";
import SettingsPage from "#/pages/private/SettingsPage";
import LogoutPage from "#/pages/auth/LogoutPage";

import { withTitle } from "##/HeadTitle";
import { RouteUtils } from "@utils";

export default class AppPrivate extends Component {
    render() {
        document.title = "Notex app";
        return (
			<>
				<Switch>
					<Route
						exact path={RouteUtils.app.private.main}
						component={withTitle({
							component: NotePage,
							title: "Welcote to Notex"
						})}
					/>
					<Route
						exact path={RouteUtils.app.private.note}
						component={withTitle({
							component: NotePage,
							title: "Welcote to Notex"
						})}
					/>
					<Route
						exact path={RouteUtils.app.private.settings}
						component={withTitle({
							component: SettingsPage,
							title: "Welcote to Notex"
						})}
					/>
					<Route
						exact path={RouteUtils.app.auth.logout}
						component={LogoutPage}
					/>
					<Route component={() => <Redirect to="/" />} />
				</Switch>
			</>
        );
    }
}
