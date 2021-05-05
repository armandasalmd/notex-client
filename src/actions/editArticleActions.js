import {
    INITIALISE_EDIT_COLLECTION,
    SET_EDIT_ARTICLE,
    SET_ARTICLE_CARD_LOADING,
    SET_COLLECTION_CARD_LOADING,
    UPDATE_ACCESS_STATUS,
    UPDATE_COLLECTION_DETAILS,
    DELETE_AND_CLOSE_COLLECTION
} from "@actions/types";
import { pushMessage, MESSAGE_TYPES } from "@actions/messageActions";

import { ArticleManagementUtils, RouteUtils, GlobalUtils, EditArticleUtils } from "@utils";

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

export const initialiseEditCollection = (collectionIdentifier, optionalArticleIdentifier, history) => (dispatch) => {
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

                // optionally set selected article after collection load
                if (optionalArticleIdentifier) {
                    const indexInCollection = GlobalUtils.getValue(res.data, "articleSummaries", []).findIndex((item) => {
                        return GlobalUtils.getValue(item, EditArticleUtils.articleSummaryModel.identifier, null) === optionalArticleIdentifier;
                    });

                    if (indexInCollection >= 0) {
                        dispatch(setEditArticle(optionalArticleIdentifier));
                    } else if (history) {
                        history.replace(RouteUtils.app.private.editArticle.link.replace(/\/:.*/, "") + "/" + collectionIdentifier);
                    }
                }
            } else {
                onFail();
            }
        })
        .catch(onFail)
        .finally(() => dispatch(setCollectionCardLoading(false)));
};

export const setEditArticle = (articleIdentifier) => (dispatch) => {
    if (articleIdentifier === null) {
        dispatch({
            type: SET_EDIT_ARTICLE,
            payload: {
                identifier: "",
                data: {}
            },
        });
        return;
    }

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
        .finally(() => dispatch(setArticleCardLoading(false)));
};

export const changeAccess = (identifier, newAccessStatus, isCollection) => (dispatch) => {
    const onFail = () => dispatch(pushMessage("Cannot change access status", MESSAGE_TYPES.error));

    if (!identifier || !newAccessStatus) {
        onFail();
        return;
    }

    const route = RouteUtils.api.articleManagement.changeAccessLevel;
    const request = {
        isCollection,
        identifier,
        newAccessStatus: parseInt(newAccessStatus)
    };

    dispatch(setCollectionCardLoading(true));

    RouteUtils.sendApiRequest(route, request)
        .then((res) => {
            if (res.data.success) {
                dispatch({
                    type: UPDATE_ACCESS_STATUS,
                    payload: {
                        isCollection,
                        identifier,
                        newAccessStatus
                    }
                });
            } else {
                onFail();
            }
        })
        .catch(onFail)
        .finally(() => dispatch(setCollectionCardLoading(false)));
};

export const updateCollectionDetails = (identifier, title, description) => (dispatch) => {
    const onFail = () => dispatch(pushMessage("Update was not complete", MESSAGE_TYPES.error));

    const route = RouteUtils.api.articleManagement.updateCollectionDetails;
    const request = { 
        articleCollectionGuid: identifier,
        title,
        description
    };

    dispatch(setCollectionCardLoading(true));
    
    RouteUtils.sendApiRequest(route, request)
        .then((res) => {
            if (res.data.success) {
                dispatch({
                    type: UPDATE_COLLECTION_DETAILS,
                    payload: { identifier, title, description }
                });
            } else {
                onFail();
            }
        })
        .catch(onFail)
        .finally(() => dispatch(setCollectionCardLoading(false)));
};

export const deleteAndCloseCollection = (identifier, history) => (dispatch) => {
    if (!identifier) return;

    const onFail = () => dispatch(pushMessage("Delete operation unsuccessful", MESSAGE_TYPES.error));
    dispatch(setCollectionCardLoading(true));

    ArticleManagementUtils.deleteCollectionApiCall(identifier)
        .then((res) => {
            if (res.data.success) {
                history.replace(RouteUtils.app.private.articleManagement.link);
                dispatch({
                    type: DELETE_AND_CLOSE_COLLECTION,
                    payload: identifier
                });
            } else {
                onFail();
            }
        })
        .catch(onFail)
        .finally(() => dispatch(setCollectionCardLoading(false)));
};

export const syncCollection = (identifier) => (dispatch) => {
    if (!identifier) return;

    const onFail = () => dispatch(pushMessage("Synchronise operation unsuccessful", MESSAGE_TYPES.error));
    const route = RouteUtils.api.articleManagement.syncCollection;
    dispatch(setCollectionCardLoading(true));

    RouteUtils.sendApiRequest(route, {}, { identifier })
        .then((res) => {
            if (res.data?.success) {
                dispatch(pushMessage("All articles synchronised", MESSAGE_TYPES.success))
            } else {
                onFail();
            }
        })
        .catch(onFail)
        .finally(() => dispatch(setCollectionCardLoading(false)));
};