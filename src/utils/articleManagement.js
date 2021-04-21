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
                isCollection: !GlobalUtils.getValue(entry, collectionSummaryModel.isArticleAsCollection, false),
                status: GlobalUtils.getValue(entry, collectionSummaryModel.accessStatus, 0).toString(),
                actions: {
                    identifier: GlobalUtils.getValue(entry, collectionSummaryModel.identifier, null)
                },
                articles: GlobalUtils.getValue(entry, collectionSummaryModel.articleSummaries, [])
            };
        });
    }

    return result;
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

const articleManagementSearchApiCall = async (searchValue) => {
    const request = {
        pageNumber: 1,
        pageSize: 10000,
        filter: searchValue || ""
    };
    const response = await RouteUtils.sendApiRequest(RouteUtils.api.articleManagement.search, request);

    return GlobalUtils.getValue(response, "data.articleCollectionSummaries", []);
};

const sourceNotebooksToTreeData = (sourceNotebooks) => {
    if (GlobalUtils.hasLength(sourceNotebooks)) {
        const convertBase = (item) => {
            return {
                title: item.title,
                value: item.identifier,
                key: item.identifier
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
    collectionSummaryModel,
    createCollectionApiCall,
    fetchCreateCollectionMetaData,
    responseToTableData,
    sourceNotebooksToTreeData
};