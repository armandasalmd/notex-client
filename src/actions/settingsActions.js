import { RouteUtils } from "@utils";

import {
    DELETE_BACKPACK,
    SETTINGS_INIT,
    SETTINGS_SAVE_PERSONAL_DETAILS,
    SET_PERSONAL_DETAILS_LOADING
} from "./types";
import { setMenuLoading } from "./noteActions";
import { logoutUser } from "./authActions";
import { pushMessage, MESSAGE_TYPES } from "./messageActions";

export const initSettings = () => {
    return function (dispatch) {
        const route = RouteUtils.api.settings.getUserSettings;

        RouteUtils.sendApiRequest(route, {})
            .then((res) => {
                if (res.status === 200 && res.data) {
                    dispatch({
                        type: SETTINGS_INIT,
                        payload: res.data,
                    });
                }
            })
            .catch((err) => {
                dispatch(pushMessage("Something failed!", MESSAGE_TYPES.error));
                console.log(err);
            });
    };
};

export const savePersonalDetails = (personalDetails) => {
    return function (dispatch) {
        if (!personalDetails) {
            return;
        }

        const route = RouteUtils.api.settings.savePersonalDetails;

        dispatch(setPersonalDetailsLoading(true));
        RouteUtils.sendApiRequest(route, personalDetails)
            .then((res) => {
                if (res.status === 200 && res.data) {
                    dispatch({
                        type: SETTINGS_SAVE_PERSONAL_DETAILS,
                        payload: res.data,
                    });
                }
            })
            .catch((err) => {
                dispatch(pushMessage("Something failed!", MESSAGE_TYPES.error));
                console.log(err);
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(setPersonalDetailsLoading(false));
                    dispatch(pushMessage("Changes saved", MESSAGE_TYPES.success));
                }, 500);
            });
    };
};

export const setPersonalDetailsLoading = (loading) => {
    return function (dispatch) {
        dispatch({
            type: SET_PERSONAL_DETAILS_LOADING,
            payload: loading,
        });
    };
};

export const deleteAccount = () => {
    return function (dispatch) {
        const route = RouteUtils.api.settings.deleteAccount;

        RouteUtils.sendApiRequest(route, {})
            .then((res) => {
                if (res.status === 200 && res.data.success === true) {
                    dispatch(logoutUser());
                    dispatch(pushMessage("Account was deleted. Good bye!", MESSAGE_TYPES.info));
                }
            })
            .catch((err) => {
                dispatch(pushMessage("Something failed!", MESSAGE_TYPES.error));
                console.log(err);
            });
    };
};

export const deleteBackpack = () => {
    return function (dispatch) {
        const route = RouteUtils.api.settings.deleteBackpack;

        dispatch(setMenuLoading(true));

        RouteUtils.sendApiRequest(route, {})
            .then((res) => {
                if (res.status === 200 && res.data.success === true) {
                    dispatch({
                        type: DELETE_BACKPACK,
                    });
                    dispatch(pushMessage("Content was deleted", MESSAGE_TYPES.success));
                }
            })
            .catch((err) => {
                dispatch(pushMessage("Something failed!", MESSAGE_TYPES.error));
                console.log(err);
            });
    };
};
