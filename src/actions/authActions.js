import jwt_decode from "jwt-decode";

import { AuthUtils, RouteUtils } from "@utils";
import { SET_CURRENT_USER, GET_ERRORS, SET_AUTH_LOADING, USER_LOGOUT } from "@actions/types";

export const logoutUser = () => {
    return function (dispatch) {
        localStorage.removeItem("jwtToken");
        AuthUtils.setAuthHeaderToken(false);
        dispatch({
            type: USER_LOGOUT
        });
    };
};

export const loginUser = (userData) => {
    return function (dispatch) {
        const route = RouteUtils.api.auth.login;

        dispatch({
            type: SET_AUTH_LOADING,
            payload: true
        });

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
                        type: SET_AUTH_LOADING,
                        payload: false
                    });
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
    
    dispatch({
        type: SET_AUTH_LOADING,
        payload: true
    });

	RouteUtils.sendApiRequest(route, userData)
        .then(res => {
            dispatch({
                type: SET_AUTH_LOADING,
                payload: false
            });
            history.push(`${RouteUtils.app.auth.login.link}?success=true`);
        })
        .catch(err => {
            dispatch({
                type: SET_AUTH_LOADING,
                payload: false
            });
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

export const verifyAuth = () => {
    return function (dispatch) {
        const route = RouteUtils.api.auth.verifyAuth;

        const onFail = () => {
            dispatch(logoutUser());
            window.open(RouteUtils.app.auth.login.link, "_self");
        };

        RouteUtils.sendApiRequest(route, {})
            .then(res => {
                if (!(res.status === 200 && res.data.success === true)) {
                    onFail();
                }
            })
            .catch(() => {
                onFail();
            });
    };
}