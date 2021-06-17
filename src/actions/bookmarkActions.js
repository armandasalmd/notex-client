import {
    RESET_BOOKMARKS_CACHE,
    SET_BOOKMARKS_ACTIVE_PAGE,
    SET_BOOKMARKS_LOADING,
    SET_BOOKMARKS_OPEN,
    SET_BOOKMARKS_PAGE_CONTENT,
} from "./types";

import { BookmarkUtils, GlobalUtils, RouteUtils } from "@utils";

const setBookmarksLoading = (loading) => (dispatch) => {
    dispatch({
        type: SET_BOOKMARKS_LOADING,
        payload: loading,
    });
};

export const setBookmarksOpen = (state) => async (dispatch) => {
    dispatch({
        type: SET_BOOKMARKS_OPEN,
        payload: state,
    });
};

export const loadAndOpenBookmarks = (pageNumber) => async (dispatch) => {
    const route = RouteUtils.api.articles.bookmarkedArticles;
    const pageSize = BookmarkUtils.DEFAULT_PAGE_SIZE;

    dispatch(setBookmarksLoading(true));

    try {
        const { data } = await RouteUtils.sendApiRequest(route, {
            pageNumber: parseInt(pageNumber) || 1,
            pageSize,
        });

        dispatch({
            type: SET_BOOKMARKS_PAGE_CONTENT,
            payload: data,
        });
    } catch {
        dispatch(setBookmarksLoading(false));
        return false;
    }

    dispatch(setBookmarksLoading(false));
};

export const setActivePage = (pageNumber) => (dispatch) => {
    dispatch({
        type: SET_BOOKMARKS_ACTIVE_PAGE,
        payload: pageNumber,
    });
};

export const removeBookmarkItem = (identifier, currentPage) => async (dispatch) => {
    if (!GlobalUtils.isGuid(identifier) || typeof currentPage !== "number") return false;

    const route = RouteUtils.api.articles.removeBookmarks;

    dispatch(setBookmarksLoading(true));
    try {
        const { data } = await RouteUtils.sendApiRequest(route, {
            articleGuids: [identifier],
        });

        if (data.success === true) {
            dispatch({
                type: RESET_BOOKMARKS_CACHE,
            });
            dispatch(loadAndOpenBookmarks(currentPage));
        } else throw new Error();
    } catch {
        dispatch(setBookmarksLoading(false));
        return false;
    }

    dispatch(setBookmarksLoading(false));
};
