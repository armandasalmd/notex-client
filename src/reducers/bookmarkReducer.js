import { RESET_BOOKMARKS_CACHE, SET_BOOKMARKS_ACTIVE_PAGE, SET_BOOKMARKS_LOADING, SET_BOOKMARKS_OPEN, SET_BOOKMARKS_PAGE_CONTENT } from "@actions/types";

import { BookmarkUtils } from "@utils";

const { DEFAULT_PAGE_SIZE } = BookmarkUtils;

const initialState = {
    bookmarks: {
        [BookmarkUtils.pageKey(0, DEFAULT_PAGE_SIZE)]: []
    },
    page: {
        current: 0,
        count: 0,
        totalResults: -1
    },
    loading: false,
    overlayOpen: false
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case RESET_BOOKMARKS_CACHE: {
            return {
                ...state,
                bookmarks: initialState.bookmarks,
                page: {
                    ...initialState.page
                }
            };
        }
        case SET_BOOKMARKS_ACTIVE_PAGE:
            return {
                ...state,
                page: {
                    ...state.page,
                    current: parseInt(payload) || 1
                }
            };
        case SET_BOOKMARKS_OPEN:
            return {
                ...state,
                overlayOpen: !!payload
            };
        case SET_BOOKMARKS_LOADING: 
            return {
                ...state,
                loading: !!payload
            };
        case SET_BOOKMARKS_PAGE_CONTENT: {
            const { userBookmarks, currentPage } = payload;

            state.bookmarks[BookmarkUtils.pageKey(currentPage, DEFAULT_PAGE_SIZE)] = userBookmarks;
            state.page = BookmarkUtils.toReduxPageModel(payload);

            return {
                ...state
            };
        }
        default:
            return state;
    }
}
