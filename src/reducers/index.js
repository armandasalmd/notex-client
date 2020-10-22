import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import backpackReducer from "./backpackReducer";
import editorReducer from "./editorReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    backpack: backpackReducer,
    editor: editorReducer
});
