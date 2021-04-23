import { SET_ACTIVE_EDIT_COLLECTION } from "@actions/types";

const initialState = {
    articleCardLoading: false,
    collectionCardLoading: false,
    selectedArticle: {},
    selectedArticleId: "",
    selectedCollection: {},
    selectedCollectionId: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_EDIT_COLLECTION:
            return {
                ...state,
                selectedCollectionId: action.payload.identifier,
                selectedCollection: action.payload.data
            };
        default:
            return state;
    }
}
