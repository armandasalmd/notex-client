import {
    INITIALISE_EDIT_COLLECTION,
    SET_EDIT_ARTICLE,
    SET_ARTICLE_CARD_LOADING,
    SET_COLLECTION_CARD_LOADING,
} from "@actions/types";
import { pushMessage, MESSAGE_TYPES } from "@actions/messageActions";

import { RouteUtils, GlobalUtils } from "@utils";

const setArticleCardLoading = (loading) => (dispatch) => {
    dispatch({
        type: SET_ARTICLE_CARD_LOADING,
        payload: loading
    });
};

const setCollectionCardLoading = (loading) => (dispatch) => {
    dispatch({
        type: SET_COLLECTION_CARD_LOADING,
        payload: loading
    });
};

export const initialiseEditCollection = (collectionIdentifier) => (dispatch) => {
    const route = RouteUtils.api.articleManagement.getEditCollectionPageModel;

    const query = {
        [route.queryNames.identifier]: collectionIdentifier,
    };

    const onFail = () => dispatch(pushMessage("Cannot retrieve your data", MESSAGE_TYPES.error));

    dispatch(setCollectionCardLoading(true));

    RouteUtils.sendApiRequest(route, {}, query)
        .then((res) => {
            if (res.data) {
                dispatch({
                    type: INITIALISE_EDIT_COLLECTION,
                    payload: {
                        identifier: collectionIdentifier,
                        ...res.data,
                    },
                });
            } else {
                onFail();
            }
        })
        .catch(onFail)
        .finally(() => {
            dispatch(setCollectionCardLoading(false));
        });
};

export const setEditArticle = (articleIdentifier) => (dispatch) => {
    const route = RouteUtils.api.articleManagement.getEditArticlePageModel;

    const query = {
        [route.queryNames.identifier]: articleIdentifier,
        [route.queryNames.includeMetaData]: true,
    };

    const onFail = () => dispatch(pushMessage("Cannot edit selected article", MESSAGE_TYPES.error));

    dispatch(setArticleCardLoading(true));

    RouteUtils.sendApiRequest(route, {}, query)
        .then((res) => {
            if (res.data && GlobalUtils.getValue(res.data, "article.identifier", false) === articleIdentifier) {
                dispatch({
                    type: SET_EDIT_ARTICLE,
                    payload: {
                        identifier: articleIdentifier,
                        data: res.data,
                    },
                });
            } else {
                onFail();
            }
        })
        .catch(onFail)
        .finally(() => {
            dispatch(setArticleCardLoading(false));
        });
};
