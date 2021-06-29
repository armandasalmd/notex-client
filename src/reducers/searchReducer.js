import { 
    POST_SEARCH, 
    SET_SEARCH_LOADING,
    SET_SEARCH_TERM,
    SET_SEARCH_TAGS,
    SEARCH_INCLUDE_COLLECTION,
    SEARCH_RESET,
    SET_SEARCH_FILTER
} from "@actions/types";

import { GlobalUtils, SearchUtils } from "@utils";

const { PublishDateEnum, ReadDurationEnum, MinimumRatingEnum } = SearchUtils;

const getInitialState = () => {
    return {
        options: {
            search: {
                searchTerm: "",
                searchTags: [],
            },
            filters: {
                publishDateFilter: PublishDateEnum.NONE,
                readDurationFilter: ReadDurationEnum.NONE,
                minimumRatingFilter: MinimumRatingEnum.NONE,
                includeCollections: true
            },
            page: {
                pageNumber: 1,
                pageSize: 10
            }
        },
        results: [],
        loading: false,
        pageMetaData: {
            pagesCount: 0,
            totalResultsFound: 0
        }
    };
};

export default function (state = getInitialState(), action) {
    switch (action.type) {
        case SET_SEARCH_TERM:
            state.options.search.searchTerm = action.payload;
            return { ...state };
        case SET_SEARCH_TAGS:
            state.options.search.searchTags = Array.isArray(action.payload) ? action.payload : getInitialState().results;
            return { ...state };
        case SEARCH_RESET:
            return getInitialState();
        case SEARCH_INCLUDE_COLLECTION:
            state.options.filters = {
                ...state.options.filters,
                includeCollections: !!action.payload
            };
            return { ...state };
        case SET_SEARCH_LOADING:
            return {
                ...state,
                loading: !!action.payload
            };
        case SET_SEARCH_FILTER: {
            state.options.filters = {
                ...state.options.filters,
                [action.payload.filterReduxName]: action.payload.value
            };
            return { ...state };
        }
        case POST_SEARCH: {
            state.options.page.pageNumber = GlobalUtils.getValue(action.payload, "currentPage", 1);
            state.options.page.pageSize = GlobalUtils.getValue(action.payload, "pageSize", 10);

            return {
                ...state,
                results: GlobalUtils.getValue(action.payload, "searchItems", getInitialState().results),
                pageMetaData: {
                    pagesCount: GlobalUtils.getValue(action.payload, "pagesCount", 1),
                    totalResultsFound: GlobalUtils.getValue(action.payload, "totalResultsFound", 0)
                }
            };
        }
        default:
            return state;
    }
}
