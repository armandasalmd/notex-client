import { AuthUtils } from "@utils";

import { SET_CURRENT_USER } from "@actions/types";

export const logoutUser = () => {
    return function (dispatch) {
        localStorage.removeItem("jwtToken");
        AuthUtils.setAuthHeaderToken(false);
        dispatch({
            type: SET_CURRENT_USER,
		    payload: {}
        });
    };
};