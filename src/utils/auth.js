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

function resetAuthTokenFromStorage () {
    if (localStorage.jwtToken) {
        const token = localStorage.jwtToken;

        if (typeof token === "string" && token.startsWith(Constants.authTokenType)) {
            const decoded = jwt_decode(token);
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

export default {
    setAuthHeaderToken,
    resetAuthTokenFromStorage
};