import { GlobalUtils, RouteUtils } from "@utils";

const collectionSummaryModel = {
    title: "collectionTitle",
    lastUpdate: "lastUpdateLabel",
    isArticleAsCollection: "isArticleAsCollection",
    accessStatus: "accessStatus",
    identifier: "articleCollectionGuid",
    articleSummaries: "articleSummaries"
};

const articleSummaryModel = {
    title: "articleTitle",
    identifier: "articleGuid"
};

const responseToTableData = (responseObject) => {
    let result = [];
    
    if (responseObject && Array.isArray(responseObject)) {
        result = responseObject.map((entry, index) => {
            return {
                key: GlobalUtils.getValue(entry, collectionSummaryModel.identifier, index),
                title: GlobalUtils.getValue(entry, collectionSummaryModel.title, "No title"),
                lastUpdate: GlobalUtils.getValue(entry, collectionSummaryModel.lastUpdate, "NaN"),
                count: GlobalUtils.getValue(entry, collectionSummaryModel.articleSummaries, [])?.length ?? 0,
                status: {
                    identifier: GlobalUtils.getValue(entry, collectionSummaryModel.identifier, null),
                    value: GlobalUtils.getValue(entry, collectionSummaryModel.accessStatus, 0).toString()
                },
                actions: {
                    identifier: GlobalUtils.getValue(entry, collectionSummaryModel.identifier, null)
                },
                articles: GlobalUtils.getValue(entry, collectionSummaryModel.articleSummaries, [])
            };
        });
    }

    return result;
};

const fetchCreateArticleMetaData = async () => {
    const route = RouteUtils.api.articleManagement.getCreateArticleMetaData;
    const response = await RouteUtils.sendApiRequest(route, {});

    return GlobalUtils.getValue(response, "data.sourceNotebooks", []);
};

const fetchCreateCollectionMetaData = async () => {
    const route = RouteUtils.api.articleManagement.getCreateCollectionMetaData;
    const response = await RouteUtils.sendApiRequest(route, {});

    return GlobalUtils.getValue(response, "data.sourceNotebooks", []);
};

const createCollectionApiCall = async (formData) => {
    const request = {
        description: formData.collectionDescription,
        title: formData.collectionName,
        ext_InheritedNoteIds: formData.selectedNotes,
        articleAccessStatus: Number.parseInt(formData.accessStatus)
    };

    return RouteUtils.sendApiRequest(RouteUtils.api.articleManagement.createCollection, request);
};

const syncArticleApiCall = async (identifier) => {
    const route = RouteUtils.api.articleManagement.syncArticle;

    return RouteUtils.sendApiRequest(route, null, { identifier });
}

const articleManagementSearchApiCall = async (searchValue) => {
    const request = {
        pageNumber: 1,
        pageSize: 1000,
        filter: searchValue || ""
    };
    const response = await RouteUtils.sendApiRequest(RouteUtils.api.articleManagement.search, request);

    return GlobalUtils.getValue(response, "data.articleCollectionSummaries", []);
};

const deleteCollectionApiCall = async (collectionUID) => {
    return RouteUtils.sendApiRequest(RouteUtils.api.articleManagement.deleteCollection, {}, {
        identifier: collectionUID
    });
};

const changeAccessLevelApiCall = async (identifier, newAccessStatus, isCollection) => {
    const request = { 
        isCollection, 
        identifier, 
        newAccessStatus: parseInt(newAccessStatus)
    };

    return RouteUtils.sendApiRequest(RouteUtils.api.articleManagement.changeAccessLevel, request);
};

const sourceNotebooksToTreeData = (sourceNotebooks, isCascader = false) => {
    if (GlobalUtils.hasLength(sourceNotebooks)) {
        const convertBase = (item) => {
            return {
                [isCascader ? "label" : "title"]: item.title,
                value: item.identifier
            };
        };

        return sourceNotebooks.map(notebook => {
            return {
                ...convertBase(notebook),
                children: GlobalUtils.hasLength(notebook.notes) ? notebook.notes.map(convertBase) : []
            };
        });
    }

    return [];
}

export default {
    articleManagementSearchApiCall,
    articleSummaryModel,
    changeAccessLevelApiCall,
    collectionSummaryModel,
    createCollectionApiCall,
    deleteCollectionApiCall,
    fetchCreateArticleMetaData,
    fetchCreateCollectionMetaData,
    responseToTableData,
    sourceNotebooksToTreeData,
    syncArticleApiCall
};