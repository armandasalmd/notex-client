import jwt_decode from "jwt-decode";

import { AuthUtils, RouteUtils } from "@utils";

import { SET_CURRENT_USER, GET_ERRORS } from "@actions/types";

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

export const loginUser = userData => {
    return function (dispatch) {
        const route = RouteUtils.api.auth.login;
        RouteUtils.sendApiRequest(route, userData)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem("jwtToken", token);
                AuthUtils.setAuthHeaderToken(token);

                const decoded = jwt_decode(token);
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: decoded
                });
            })
            .catch(err => {
                if (err.response) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data
                    });
                }
            });
    };
};

export const registerUser = (userData, history) => dispatch => {
    const route = RouteUtils.api.auth.register;
	RouteUtils.sendApiRequest(route, userData)
        .then(res => {
            history.push(`${RouteUtils.api.auth.login}?success=true`);
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}