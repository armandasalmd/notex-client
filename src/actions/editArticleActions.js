import {
    INITIALISE_EDIT_COLLECTION,
    SET_EDIT_ARTICLE,
    SET_ARTICLE_CARD_LOADING,
    SET_COLLECTION_CARD_LOADING,
    UPDATE_ACCESS_STATUS,
    UPDATE_COLLECTION_DETAILS,
    DELETE_AND_CLOSE_COLLECTION,
    SET_BACKPACK_METADATA,
    APPEND_ARTICLE,
    DELETE_ARTICLE
} from "@actions/types";

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

export const initialiseEditCollection = (collectionIdentifier, optionalArticleIdentifier, history) => async (dispatch) => {
    const route = RouteUtils.api.articleManagement.getEditCollectionPageModel;

    const query = {
        [route.queryNames.identifier]: collectionIdentifier,
    };

    dispatch(setCollectionCardLoading(true));

    try {
        let { data } = await RouteUtils.sendApiRequest(route, {}, query);

        if (data) {
            dispatch({
                type: INITIALISE_EDIT_COLLECTION,
                payload: {
                    identifier: collectionIdentifier,
                    ...data,
                },
            });

            // optionally set selected article after collection load
            if (optionalArticleIdentifier) {
                const indexInCollection = GlobalUtils.getValue(data, "articleSummaries", []).findIndex((item) => {
                    return GlobalUtils.getValue(item, EditArticleUtils.articleSummaryModel.identifier, null) === optionalArticleIdentifier;
                });

                if (indexInCollection >= 0) {
                    dispatch(setEditArticle(optionalArticleIdentifier));
                } else if (history) {
                    history.replace(RouteUtils.app.private.editArticle.link.replace(/\/:.*/, "") + "/" + collectionIdentifier);
                }
            }
        } else throw new Error();
    } catch {
        dispatch(setCollectionCardLoading(false));
        return false;
    }

    dispatch(setCollectionCardLoading(false));
};

export const setEditArticle = (articleIdentifier) => async (dispatch) => {
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

    dispatch(setCollectionCardLoading(true));

    try {
        const { data } = await RouteUtils.sendApiRequest(route, {}, query);

        if (data && GlobalUtils.getValue(data, "article.identifier", false) === articleIdentifier) {
            dispatch({
                type: SET_EDIT_ARTICLE,
                payload: {
                    identifier: articleIdentifier,
                    data: data,
                },
            });
        } else throw new Error();
    } catch {
        dispatch(setCollectionCardLoading(false));
        return false;
    }
    
    dispatch(setCollectionCardLoading(false));
};

export const changeAccess = (identifier, newAccessStatus, isCollection) => async (dispatch) => {
    if (!identifier || !newAccessStatus) {
        return false;
    }

    const route = RouteUtils.api.articleManagement.changeAccessLevel;
    const request = {
        isCollection,
        identifier,
        newAccessStatus: parseInt(newAccessStatus)
    };

    dispatch(setCollectionCardLoading(true));

    try {
        let { data } = await RouteUtils.sendApiRequest(route, request);

        if (data.success === true) {
            dispatch({
                type: UPDATE_ACCESS_STATUS,
                payload: {
                    isCollection,
                    identifier,
                    newAccessStatus
                }
            });
        } else throw new Error();
    } catch {
        dispatch(setCollectionCardLoading(false));
        return false;
    }

    dispatch(setCollectionCardLoading(false));
};

export const updateCollectionDetails = (identifier, title, description) => async (dispatch) => {
    const route = RouteUtils.api.articleManagement.updateCollectionDetails;
    const request = { 
        articleCollectionGuid: identifier,
        title,
        description
    };

    dispatch(setCollectionCardLoading(true));

    try {
        let { data } = await RouteUtils.sendApiRequest(route, request);

        if (data.success === true) {
            dispatch({
                type: UPDATE_COLLECTION_DETAILS,
                payload: { identifier, title, description }
            });
        } else throw new Error();
    } catch {
        dispatch(setCollectionCardLoading(false));
        return false;
    }

    dispatch(setCollectionCardLoading(false));
};

export const deleteAndCloseCollection = (identifier, history) => async (dispatch) => {
    if (!identifier) return false;

    dispatch(setCollectionCardLoading(true));

    try {
        let { data } = await ArticleManagementUtils.deleteCollectionApiCall(identifier);

        if (data.success === true) {
            history.replace(RouteUtils.app.private.articleManagement.link);

            dispatch({
                type: DELETE_AND_CLOSE_COLLECTION,
                payload: identifier
            });
        } else throw new Error();
    } catch {
        dispatch(setCollectionCardLoading(false));
        return false;
    }

    dispatch(setCollectionCardLoading(false));
};

export const syncResource = (identifier, isCollection = true, callingFromEditCard = false) => async (dispatch) => {
    if (!identifier) return false;

    const route = isCollection ? 
        RouteUtils.api.articleManagement.syncCollection : 
        RouteUtils.api.articleManagement.syncArticle;
    const loadingFn = callingFromEditCard ? setArticleCardLoading : setCollectionCardLoading;

    dispatch(loadingFn(true));
    
    try {
        let { data } = await RouteUtils.sendApiRequest(route, {}, { identifier });

        if (data.success !== true) throw new Error();
    } catch {
        dispatch(loadingFn(false));
        return false;
    }
    
    dispatch(loadingFn(false));
    return isCollection ? "All articles synchronised" : "Article synchronised";
};

export const fetchBackpackMetaData = () => async (dispatch) => {
    try {
        let { data } = await RouteUtils.sendApiRequest(RouteUtils.api.articleManagement.getCreateArticleMetaData);

        if (data.sourceNotebooks) {
            dispatch({
                type: SET_BACKPACK_METADATA,
                payload: data.sourceNotebooks
            });
        } else throw new Error();
    } catch {
        return false;
    }
};

export const createArticle = (requestData) => async (dispatch) => {
    if (typeof requestData !== "object") return;

    const route = RouteUtils.api.articleManagement.createArticle;
    const response = await RouteUtils.sendApiRequest(route, {
        ...requestData,
        articleAccessStatus: requestData.articleAccessStatus ? parseInt(requestData.articleAccessStatus) : 0
    });

    if (response.data) {
        dispatch({
            type: APPEND_ARTICLE,
            payload: response.data 
        });
    }

    return response.data;
};

export const deleteArticle = (identifier) => async (dispatch) => {
    const response = await RouteUtils.sendApiRequest(
        RouteUtils.api.articleManagement.deleteArticle, 
        null, 
        { identifier }
    );

    dispatch({
        type: DELETE_ARTICLE,
        payload: identifier
    });

    return response.data;
};

export const saveArticleDetails = (requestData) => async (dispatch) => {
    if (typeof requestData !== "object") return;

    dispatch(setArticleCardLoading(true));
    const route = RouteUtils.api.articleManagement.saveArticle;

    const { articleAccessStatus, sourceNoteId, ...rest } = requestData;
    const accessStatus = parseInt(articleAccessStatus);

    const response = await RouteUtils.sendApiRequest(route, {
        ...rest,
        accessStatus: isNaN(accessStatus) ? 2 : accessStatus,
        ext_SourceNoteId: sourceNoteId
    });
    
    dispatch(setArticleCardLoading(false));

    return response.data;
};