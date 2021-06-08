import { message } from "antd";

import { GlobalUtils } from "@utils";

const MESSAGE_TYPES = {
    success: "success", 
    error: "error",
    info: "info",
    warning: "warning",
    warn: "warning"
};

const show = (text, messageType) => {
    switch (messageType) {
        case "success":
            message.success(text);
            break;
        case "error":
            message.error(text);
            break;
        case "warn":
        case "warning":
            message.warn(text);
            break;
        case "info":
        default:
            message.info(text);
            break;
    }
};

const error = (text) => show(text, MESSAGE_TYPES.error);
const info = (text) => show(text, MESSAGE_TYPES.info);
const success = (text) => show(text, MESSAGE_TYPES.success);
const warning = (text) => show(text, MESSAGE_TYPES.warning);

const handleDispatch = (dispatchFn, action, errorMessage, onError, logError = false) => {
    handleDispatched(dispatchFn(action), errorMessage, onError, logError);
};

const handleDispatched = (action, errorMessage, onError, logError = false) => {
    if (GlobalUtils.isPromise(action)) {
        errorMessage = typeof errorMessage === "string" ? errorMessage : "Error. Something went wrong";

        action.then(result => {
            if (_validMessage(result)) {
                success(result);
            } else if (result === false) {
                error(errorMessage);

                GlobalUtils.callIfFunction(onError, result);
            }
        }).catch(errorObject => {
            error(errorMessage);
            
            if (logError) {
                console.error(errorObject);
            }

            GlobalUtils.callIfFunction(onError, errorObject);
        });
    } else if (_validMessage(action)) {
        success(action);
    }

    function _validMessage(text) {
        return typeof text === "string" && text.length > 0;
    }
};

export default {
    error,
    handleDispatch,
    handleDispatched,
    info,
    MESSAGE_TYPES,
    show,
    success,
    warning
};
