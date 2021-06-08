import { 
    POST_SEARCH,
    SET_SEARCH_LOADING,
    SET_SEARCH_TERM,
    SET_SEARCH_TAGS,
    SEARCH_INCLUDE_COLLECTION,
    SET_SEARCH_FILTER
} from "@actions/types";

import { SearchUtils } from "@utils";

const setSearchLoading = (loading) => (dispatch) => {
    dispatch({
        type: SET_SEARCH_LOADING,
        payload: loading
    });
};

export const search = (options) => async (dispatch) => {
    dispatch(setSearchLoading(true));
    
    try {
        let { data } = await SearchUtils.searchAsync(options || {});
        
        if (data) {
            data.pageSize = options.pageSize;
            
            dispatch({
                type: POST_SEARCH,
                payload: data
            });
        } else throw new Error();
    } catch {
        dispatch(setSearchLoading(false));
        return false;
    }

    dispatch(setSearchLoading(false));
};

export const setSearchTerm = (searchTerm) => (dispatch) => {
    dispatch({
        type: SET_SEARCH_TERM,
        payload: searchTerm
    });
};

export const setSearchTags = (searchTags) => (dispatch) => {
    dispatch({
        type: SET_SEARCH_TAGS,
        payload: searchTags
    });
};

export const setIncludeCollections = (value) => (dispatch) => {
    dispatch({
        type: SEARCH_INCLUDE_COLLECTION,
        payload: value
    });
};

export const setSomeFilterValue = (filterReduxName, value) => (dispatch) => {
    dispatch({
        type: SET_SEARCH_FILTER,
        payload: {
            filterReduxName,
            value
        }
    });
};