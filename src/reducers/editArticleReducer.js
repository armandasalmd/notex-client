import {
    APPEND_ARTICLE,
    DELETE_AND_CLOSE_COLLECTION,
    INITIALISE_EDIT_COLLECTION,
    SET_EDIT_ARTICLE,
    SET_ARTICLE_CARD_LOADING,
    SET_BACKPACK_METADATA,
    SET_COLLECTION_CARD_LOADING,
    UPDATE_ACCESS_STATUS,
    UPDATE_COLLECTION_DETAILS,
    DELETE_ARTICLE,
} from "@actions/types";

import { EditArticleUtils, GlobalUtils } from "@utils";

const initialState = {
    articleCardLoading: false,
    collectionCardLoading: false,
    selectedArticle: {},
    selectedArticleId: "",
    selectedCollection: {},
    selectedCollectionId: "",
    backpackMetaData: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case APPEND_ARTICLE: {
            const updatedCollection = { ...state.selectedCollection };
            const articles = updatedCollection[EditArticleUtils.collectionSummaryModel.articleSummaries];

            if (Array.isArray(articles)) {
                articles.push(action.payload);
            }

            return {
                ...state,
                selectedCollection: updatedCollection
            };
        }
        case DELETE_ARTICLE: {
            const updatedCollection = { ...state.selectedCollection };
            const summariesName = EditArticleUtils.collectionSummaryModel.articleSummaries

            let articles = updatedCollection[summariesName];
            if (Array.isArray(articles) && typeof action.payload === "string") {
                updatedCollection[summariesName] = articles.filter((o) => {
                    return o[EditArticleUtils.articleSummaryModel.identifier] !== action.payload;
                });
            }

            return {
                ...state,
                selectedCollection: updatedCollection
            };
        }
        case SET_BACKPACK_METADATA:
            return {
                ...state,
                backpackMetaData: action.payload
            };
        case DELETE_AND_CLOSE_COLLECTION:
            return {
                ...initialState
            }
        case SET_ARTICLE_CARD_LOADING:
            return {
                ...state,
                articleCardLoading: !!action.payload
            };
        case SET_COLLECTION_CARD_LOADING:
            return {
                ...state,
                collectionCardLoading: !!action.payload
            };
        case INITIALISE_EDIT_COLLECTION:
            return {
                ...initialState,
                selectedCollectionId: action.payload.identifier,
                selectedCollection: action.payload,
            };
        case SET_EDIT_ARTICLE: {
            const newState = {
                ...state,
                selectedArticleId: action.payload.identifier,
                selectedArticle: action.payload.data,
            };

            if (Array.isArray(action.payload.data.sourceNotebooksMetaData)) {
                newState.backpackMetaData = action.payload.sourceNotebooksMetaData;
            }

            return newState;
        }
        case UPDATE_ACCESS_STATUS: {
            if (action.payload.isCollection) {
                state.selectedCollection = {
                    ...state.selectedCollection,
                    [EditArticleUtils.collectionSummaryModel.accessStatus]: action.payload.newAccessStatus
                };
            } else {
                const articleSummaries = GlobalUtils.getValue(
                    state.selectedCollection, 
                    EditArticleUtils.collectionSummaryModel.articleSummaries, 
                    []
                );

                const articleIndex = articleSummaries.findIndex(item => GlobalUtils.getValue(item, EditArticleUtils.articleSummaryModel.identifier) === action.payload.identifier);

                if (articleIndex >= 0) {
                    articleSummaries[articleIndex][EditArticleUtils.articleSummaryModel.accessStatus] = action.payload.newAccessStatus;

                    state.selectedCollection = {
                        ...state.selectedCollection
                    };
                }
            }

            return state;
        }
        case UPDATE_COLLECTION_DETAILS: {
            if (action.payload.identifier) {
                const newCollection = { ...state.selectedCollection };
                
                if (GlobalUtils.hasLength(action.payload.title)) {
                    newCollection[EditArticleUtils.collectionSummaryModel.title] = action.payload.title;
                }
                if (GlobalUtils.hasLength(action.payload.description)) {
                    newCollection[EditArticleUtils.collectionSummaryModel.description] = action.payload.description;
                }
                
                state.selectedCollection = newCollection;
            }
            
            return state;
        }
        default:
            return state;
    }
}