import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "@reducers";

import { I18nUtils } from "@utils";

const initialState = {};
const middleware = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
);

I18nUtils.initAndAttachToStore(store);

export default store;
