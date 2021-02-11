import jwt_decode from "jwt-decode";

import { AuthUtils, RouteUtils } from "@utils";
import {
    SET_CURRENT_USER,
    GET_ERRORS,
    SET_AUTH_LOADING,
    USER_LOGOUT,
} from "@actions/types";

export const logoutUser = () => {
    return function (dispatch) {
        localStorage.removeItem("jwtToken");
        AuthUtils.setAuthHeaderToken(false);
        dispatch({
            type: USER_LOGOUT,
        });
    };
};

export const loginUser = (userData) => {
    return function (dispatch) {
        const route = RouteUtils.api.auth.login;

        dispatch({
            type: SET_AUTH_LOADING,
            payload: true,
        });

        RouteUtils.sendApiRequest(route, userData)
            .then((res) => {
                dispatch(setToken(res.data.token));
            })
            .catch((err) => {
                if (err.response) {
                    dispatch({
                        type: SET_AUTH_LOADING,
                        payload: false,
                    });
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data,
                    });
                }
            });
    };
};

export const registerUser = (userData, history) => (dispatch) => {
    const route = RouteUtils.api.auth.register;

    dispatch({
        type: SET_AUTH_LOADING,
        payload: true,
    });

    RouteUtils.sendApiRequest(route, userData)
        .then((res) => {
            history.push(`${RouteUtils.app.auth.login.link}?successMsg=Register%20successful,%20please%20login!`);
        })
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        })
        .finally(() => {
            dispatch({
                type: SET_AUTH_LOADING,
                payload: false,
            });
        });
};

export const setToken = (token) => {
    const prefix = "Bearer ";

    if (!token.startsWith(prefix)) {
        token = prefix + token;
    }

    return function (dispatch) {
        localStorage.setItem("jwtToken", token);
        AuthUtils.setAuthHeaderToken(token);

        dispatch({
            type: SET_CURRENT_USER,
            payload: jwt_decode(token),
        });
    };
};

export const verifyAuth = () => {
    return function (dispatch) {
        const route = RouteUtils.api.auth.verifyAuth;

        const onFail = () => {
            dispatch(logoutUser());
            window.open(RouteUtils.app.auth.login.link, "_self");
        };

        RouteUtils.sendApiRequest(route, {})
            .then((res) => {
                if (!(res.status === 200 && res.data.success === true)) {
                    onFail();
                }
            })
            .catch(() => {
                onFail();
            });
    };
};
