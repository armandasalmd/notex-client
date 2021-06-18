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

const handleDispatch = (dispatchFn, action, errorMessage, onError, onFinish, logError = true) => {
    return handleDispatched(dispatchFn(action), errorMessage, onError, onFinish, logError);
};

const handleDispatchWithLoading = (dispatchFn, action, loadingMessage, errorMessage, onError, onFinish, logError = false) => {
    const hideFn = message.loading(loadingMessage);

    return handleDispatch(dispatchFn, action, errorMessage, onError, _onFinish, logError);

    function _onFinish() {
        hideFn();
        GlobalUtils.callIfFunction(onFinish);
    }
};

const handleDispatched = (action, errorMessage, onError, onFinish, logError = false) => {
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
        }).finally(() => {
            GlobalUtils.callIfFunction(onFinish);
        });
    } else if (_validMessage(action)) {
        success(action);
    }

    return action;

    function _validMessage(text) {
        return typeof text === "string" && text.length > 0;
    }
};

export default {
    error,
    handleDispatch,
    handleDispatched,
    handleDispatchWithLoading,
    info,
    MESSAGE_TYPES,
    show,
    success,
    warning
};
