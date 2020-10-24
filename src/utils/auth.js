import axios from "axios";

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

export default {
    setAuthHeaderToken
};