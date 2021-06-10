import {
    BOOKMARK_ARTICLE,
    CLEAR_READING_DATA,
    INIT_READING_DATA,
    SET_ARTICLE_VOTE,
    SELECT_READING_FOOTER_TAB,
} from "@actions/types";

import { RouteUtils, GlobalUtils } from "@utils";

export const bookmarkArticle = (identifier, bookmarkState) => async (dispatch) => {
    const route = !!bookmarkState ? RouteUtils.api.articles.addBookmarks : RouteUtils.api.articles.removeBookmarks;

    try {
        let { data } = await RouteUtils.sendApiRequest(route, {
            articleGuids: [identifier],
        });

        dispatch({
            type: BOOKMARK_ARTICLE,
            payload: bookmarkState,
        });

        if (data.success !== true) return false;

        return "Bookmark state changed";
    } catch {
        return false;
    }
};

export const clear = () => (dispatch) => dispatch({ type: CLEAR_READING_DATA });

export const fetchArticleData = (identifier) => async (dispatch) => {
    const routeCopy = { ...RouteUtils.api.articles.read };

    routeCopy.path = _getRequestUrl();

    let response = await RouteUtils.sendApiRequest(routeCopy);

    if (response && typeof response.data === "object") {
        dispatch({
            type: INIT_READING_DATA,
            payload: response.data,
        });
    }

    function _getRequestUrl() {
        return routeCopy.path.replace(":" + routeCopy.paramNames.articleIdentifier, identifier);
    }
};

export const selectFooterTab = (tab) => (dispatch) => dispatch({ type: SELECT_READING_FOOTER_TAB, payload: tab });

export const submitVote = (identifier, voteType, oldVoteType) => async (dispatch) => {
    const route = RouteUtils.api.articles.vote;

    voteType = parseInt(voteType);

    if (isNaN(voteType) || !GlobalUtils.isGuid(identifier)) return false;

    try {
        let { data } = await RouteUtils.sendApiRequest(route, {
            articleGuid: identifier,
            voteTypeToToggle: voteType,
        });

        if (data.success === true && typeof data.data === "number") {
            dispatch({
                type: SET_ARTICLE_VOTE,
                payload: {
                    newVoteType: data.data,
                    oldVoteType: oldVoteType,
                },
            });
        } else throw new Error();
    } catch {
        return false;
    }
};
