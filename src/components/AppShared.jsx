import React from "react";
import { I18n } from "react-redux-i18n";
import { Route } from "react-router-dom";

import ArticlePage from "#/pages/shared/ArticlePage";
import NotFoundPage from "#/pages/public/NotFoundPage";
import SearchPage from "#/pages/shared/SearchPage";
import { withTitle } from "##/HeadTitle";
import { RouteUtils } from "@utils";

const sharedRoutes = () => [
    <Route
        key={RouteUtils.app.shared.article.link}
        exact
        path={RouteUtils.app.shared.article.link}
        component={withTitle({
            component: ArticlePage,
            title: I18n.t(RouteUtils.app.shared.article.titleTextKey),
        })}
    />,
    <Route
        key={RouteUtils.app.shared.search.link}
        exact
        path={RouteUtils.app.shared.search.link}
        component={withTitle({
            component: SearchPage,
            title: I18n.t(RouteUtils.app.shared.search.titleTextKey),
        })}
    />,
    <Route
        key={RouteUtils.app.public.notFound.link}
        exact
        path={RouteUtils.app.public.notFound.link}
        component={withTitle({
            component: NotFoundPage,
            title: I18n.t(RouteUtils.app.public.notFound.titleTextKey),
        })}
    />,
];

export {
    sharedRoutes
};
