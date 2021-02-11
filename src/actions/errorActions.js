import { CLEAR_ERRORS } from "@actions/types";

export const clearErrors = () => {
    return function (dispatch) {
        dispatch({
            type: CLEAR_ERRORS
        });
    };
};