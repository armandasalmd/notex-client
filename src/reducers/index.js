import { USER_LOGOUT } from "@actions/types";

import { combineReducers } from "redux";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import backpackReducer from "./backpackReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    backpack: backpackReducer,
    app: appReducer
});

const reducerWithReset = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined;
    }
    return rootReducer(state, action);
};

export default reducerWithReset;