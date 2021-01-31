import { GET_ERRORS, SET_CHANGE_PASSWORD_ERRORS } from "@actions/types";

const initialState = {
    changePasswordErrors: {
        currentPassword: null,
        newPassword1: null,
        newPassword2: null
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CHANGE_PASSWORD_ERRORS:
            return {
                ...state,
                changePasswordErrors: action.payload || initialState.changePasswordErrors
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
