import React from "react";
import { I18n } from "react-redux-i18n";
import { Route } from "react-router-dom";

import SearchPage from "#/pages/shared/SearchPage";
import { withTitle } from "##/HeadTitle";
import { RouteUtils } from "@utils";

const sharedRoutes = () => [
    <Route
        key={RouteUtils.app.shared.search.link}
        exact
        path={RouteUtils.app.shared.search.link}
        component={withTitle({
            component: SearchPage,
            title: I18n.t(RouteUtils.app.shared.search.titleTextKey),
        })}
    />,
];

export {
    sharedRoutes
};