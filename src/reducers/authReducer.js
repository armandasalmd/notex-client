import { SET_CURRENT_USER, SET_AUTH_LOADING } from "@actions/types";

import { GlobalUtils } from "@utils";

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !GlobalUtils.isEmpty(action.payload),
                user: action.payload,
                loading: false
            };
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}
