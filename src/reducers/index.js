import { USER_LOGOUT } from "@actions/types";

import { combineReducers } from "redux";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    errors: errorReducer,
    settings: settingsReducer
});

const reducerWithReset = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined;
    }
    
    return rootReducer(state, action);
};

export default reducerWithReset;