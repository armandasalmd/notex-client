import { INIT_READING_DATA } from "@actions/types";

import { RouteUtils } from "@utils";

export const fetchArticleData = (identifier) => async (dispatch) => {
    const route = RouteUtils.api.articles.read;

    route.path = _getRequestUrl();
    
    let response = await RouteUtils.sendApiRequest(route);

    if (response && typeof response.data === "object") {
        dispatch({
            type: INIT_READING_DATA,
            payload: response.data
        });
    }

    function _getRequestUrl() {
        return route.path.replace(":" + route.paramNames.articleIdentifier, identifier);
    }
};
