import { USER_LOGOUT } from "@actions/types";

import { combineReducers } from "redux";
import { i18nReducer } from "react-redux-i18n";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import editArticleReducer from "./editArticleReducer";
import errorReducer from "./errorReducer";
import readingReducer from "./readingReducer";
import searchReducer from "./searchReducer";
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
    i18n: i18nReducer,
    app: appReducer,
    auth: authReducer,
    editArticle: editArticleReducer,
    errors: errorReducer,
    reading: readingReducer,
    search: searchReducer,
    settings: settingsReducer,
});

const reducerWithReset = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = {
            i18n: state.i18n,
            message: state.messageReducer
        };
    }
    
    return rootReducer(state, action);
};

export default reducerWithReset;