import { GlobalUtils } from "@utils";

const DEFAULT_PAGE_SIZE = 5;

const getPageBookmarks = (stateBookmarks, pageNumber, pageSize = DEFAULT_PAGE_SIZE) => {
    if (typeof stateBookmarks === "object") {
        return GlobalUtils.getValue(stateBookmarks, pageKey(pageNumber, pageSize));
    }

    return undefined;
};

const pageKey = (pageNumber, pageSize) => {
    return `page${pageNumber}-${pageSize}`;
};

const toReduxPageModel = (bookmarkResponse) => {
    return {
        current: bookmarkResponse.currentPage,
        count: bookmarkResponse.pagesCount,
        totalResults: bookmarkResponse.totalResultsFound
    };
};

export default {
    DEFAULT_PAGE_SIZE,
    getPageBookmarks,
    pageKey,
    toReduxPageModel
};