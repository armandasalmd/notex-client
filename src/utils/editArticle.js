import { GlobalUtils } from "@utils";

const articleSummaryModel = {
    accessStatus: "accessStatus",
    identifier: "articleGuid",
    title: "articleTitle",
    lastUpdate: "lastUpdate",
    viewsCount: "viewsCount"
};

const collectionSummaryModel = {
    accessStatus: "accessStatus",
    identifier: "articleCollectionGuid",
    title: "collectionName",
    description: "collectionDescription",
    articleSummaries: "articleSummaries",
    _articleSummary: articleSummaryModel
};

const getArticlesFromResponse = (responseObject) => {
    return GlobalUtils.getValue(responseObject, collectionSummaryModel.articleSummaries, []);
};

const getCollectionTitle = (responseObject) => {
    return GlobalUtils.getValue(responseObject, collectionSummaryModel.title, "");
};

const getCollectionDescription = (responseObject) => {
    return GlobalUtils.getValue(responseObject, collectionSummaryModel.description, "");
};

const responseToTableData = (rawArticles) => {
    let result = [];
    
    if (rawArticles && Array.isArray(rawArticles)) {
        result = rawArticles.map((entry, index) => {
            const identifier = GlobalUtils.getValue(entry, articleSummaryModel.identifier, null);
            
            return {
                key: identifier || index,
                title: {
                    identifier,
                    value: GlobalUtils.getValue(entry, articleSummaryModel.title, "No title")
                },
                lastUpdate: GlobalUtils.getValue(entry, articleSummaryModel.lastUpdate, "NaN"),
                viewsCount: GlobalUtils.getValue(entry, articleSummaryModel.viewsCount, 0),
                status: {
                    identifier,
                    value: GlobalUtils.getValue(entry, articleSummaryModel.accessStatus, 0).toString()
                },
                actions: {
                    identifier
                }
            };
        });
    }

    return result;
};

const findNoteParentIdInMetaData = (metaData, noteId) => {
    if (noteId && Array.isArray(metaData)) {
        const nb = metaData.find(nbMeta => nbMeta.notes.find(ntMeta => ntMeta.identifier === noteId));
        return nb.identifier;
    }
}

export default {
    articleSummaryModel,
    collectionSummaryModel,
    findNoteParentIdInMetaData,
    getArticlesFromResponse,
    getCollectionTitle,
    getCollectionDescription,
    responseToTableData
};