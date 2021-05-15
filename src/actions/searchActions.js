import { 
    POST_SEARCH,
    SET_SEARCH_LOADING,
    SET_SEARCH_TERM,
    SET_SEARCH_TAGS,
    SEARCH_INCLUDE_COLLECTION,
    SET_SEARCH_FILTER
} from "@actions/types";
import { pushMessage, MESSAGE_TYPES } from "@actions/messageActions";

import { SearchUtils } from "@utils";

const setSearchLoading = (loading) => (dispatch) => {
    dispatch({
        type: SET_SEARCH_LOADING,
        payload: loading
    });
};

export const search = (options) => (dispatch) => {
    const onFail = () => dispatch(pushMessage("Something went wrong", MESSAGE_TYPES.error));

    dispatch(setSearchLoading(true));
    SearchUtils.searchAsync(options || {})
        .then((res) => {
            if (res.data) {
                dispatch({
                    type: POST_SEARCH,
                    payload: res.data
                });
            } else {
                onFail();
            }
        })
        .catch(onFail)
        .finally(() => dispatch(setSearchLoading(false)));
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