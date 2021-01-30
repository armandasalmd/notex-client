import { PUSH_MESSAGE, REMOVE_MESSAGES_BY_ID } from "@actions/types";

export const pushMessage = (message, type = "info") => {
    return function (dispatch) {
        dispatch({
            type: PUSH_MESSAGE,
            payload: {
                text: message,
                type
            }
        })
    };
};

export const removeMessage = (messageIds) => {
    return function (dispatch) {
        dispatch({
            type: REMOVE_MESSAGES_BY_ID,
            payload: messageIds
        })
    };
};

export const MESSAGE_TYPES = {
    success: "success", 
    error: "error",
    info: "info",
    warning: "warning",
    warn: "warning"
};