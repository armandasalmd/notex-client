import axios from "axios";
import jwt_decode from "jwt-decode";
import store from "../store";
import { logoutUser } from "@actions/authActions";
import { Constants, RouteUtils } from "@utils";
import { SET_CURRENT_USER } from "@actions/types";

/**
 * Set auth header as it would be cookie
 * @param {string} token JWT token
 */
function setAuthHeaderToken(token) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

function resetAuthTokenFromStorage() {
    const token = getJwtToken();

    if (token) {
        if (typeof token === "string" && token.startsWith(Constants.authTokenType)) {
            let decoded;
            try {
                decoded = jwt_decode(token);
            } catch (err) {
                decoded = undefined;
            }
            const currentTime = Date.now() / 1000;

            if (decoded && decoded.exp > currentTime) {
                setAuthHeaderToken(token);
                store.dispatch({
                    type: SET_CURRENT_USER,
                    payload: decoded
                });
                return;
            }
        }

        store.dispatch(logoutUser());
        window.location.href = RouteUtils.app.public.landing.link;
    }
}

function getJwtToken() {
    return localStorage.jwtToken;
}

export default {
    getJwtToken,
    resetAuthTokenFromStorage,
    setAuthHeaderToken
};