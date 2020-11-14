import { SET_CURRENT_USER, SET_AUTH_LOADING } from "@actions/types";

const isEmpty = require("is-empty");

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
                isAuthenticated: !isEmpty(action.payload),
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
