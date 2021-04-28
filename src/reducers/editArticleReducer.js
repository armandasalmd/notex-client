import {
    INITIALISE_EDIT_COLLECTION,
    SET_EDIT_ARTICLE,
    SET_ARTICLE_CARD_LOADING,
    SET_COLLECTION_CARD_LOADING,
} from "@actions/types";

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
                selectedArticle: action.payload.article,
            };

            if (Array.isArray(action.payload.sourceNotebooksMetaData)) {
                newState.backpackMetaData = action.payload.sourceNotebooksMetaData;
            }

            return newState;
        }
        default:
            return state;
    }
}
