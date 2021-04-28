import {
    INITIALISE_EDIT_COLLECTION,
    SET_EDIT_ARTICLE,
    SET_ARTICLE_CARD_LOADING,
    SET_COLLECTION_CARD_LOADING,
    UPDATE_ACCESS_STATUS,
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

            if (Array.isArray(action.payload.sourceNotebooksMetaData)) {
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
        default:
            return state;
    }
}
