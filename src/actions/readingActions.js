import { INIT_READING_DATA } from "@actions/types";

import { RouteUtils } from "@utils";
import { pushMessage, MESSAGE_TYPES } from "./messageActions";

export const fetchArticleData = (identifier) => {
    return function (dispatch) {
        const route = RouteUtils.api.articles.read;

        route.path = _getRequestUrl();
        RouteUtils.sendApiRequest(route)
            .then((res) => {
                if (typeof res.data === "object") {
                    dispatch({
                        type: INIT_READING_DATA,
                        payload: res.data
                    });
                }
            })
            .catch((err) => {
                dispatch(
                    pushMessage("Something failed!", MESSAGE_TYPES.error)
                );
            });

        function _getRequestUrl() {
            return route.path.replace(":" + route.paramNames.articleIdentifier, identifier);
        }
    };
};
