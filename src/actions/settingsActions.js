import { RouteUtils } from "@utils";

import {
    DELETE_BACKPACK,
    SETTINGS_CHANGE_AUTO_SAVE,
    SETTINGS_CHANGE_CLOSE_ON_CLICK,
    SETTINGS_CHANGE_LANGUAGE,
    SETTINGS_INIT,
    SETTINGS_SAVE_PERSONAL_DETAILS,
    SET_APP_SETTINGS_LOADING,
    SET_CHANGE_PASSWORD_ERRORS,
    SET_PERSONAL_DETAILS_LOADING,
    SET_SECURITY_SETTINGS_LOADING,
} from "./types";
import { setMenuLoading } from "./noteActions";
import { logoutUser } from "./authActions";
import { pushMessage, MESSAGE_TYPES } from "./messageActions";

const loadingActionTemplate = (type, payload) => {
    return function (dispatch) {
        dispatch({ type, payload });
    };
};

export const setAppSettingsLoading = (isLoading) =>
    loadingActionTemplate(SET_APP_SETTINGS_LOADING, isLoading);
export const setPersonalDetailsLoading = (isLoading) =>
    loadingActionTemplate(SET_PERSONAL_DETAILS_LOADING, isLoading);
export const setSecuritySettingsLoading = (isLoading) =>
    loadingActionTemplate(SET_SECURITY_SETTINGS_LOADING, isLoading);

export const changeAutoSave = (value) => {
    return function (dispatch) {
        if (typeof value === "boolean") {
            const route = RouteUtils.api.settings.autoSaveChange;

            dispatch(setAppSettingsLoading(true));
            RouteUtils.sendApiRequest(route, { autoSaveValue: value })
                .then((res) => {
                    if (res.status === 200 && res.data.success === true) {
                        dispatch({
                            type: SETTINGS_CHANGE_AUTO_SAVE,
                            payload: value,
                        });
                    }
                })
                .catch((err) => {
                    dispatch(
                        pushMessage("Something failed!", MESSAGE_TYPES.error)
                    );
                    console.log(err);
                })
                .finally(() => {
                    dispatch(setAppSettingsLoading(false));
                });
        }
    };
};

export const changeCloseOnClick = (value) => {
    return function (dispatch) {
        if (typeof value === "boolean") {
            const route = RouteUtils.api.settings.closeOnClickChange;

            dispatch(setAppSettingsLoading(true));
            RouteUtils.sendApiRequest(route, { value })
                .then((res) => {
                    if (res.status === 200 && res.data.success === true) {
                        dispatch({
                            type: SETTINGS_CHANGE_CLOSE_ON_CLICK,
                            payload: value,
                        });
                    }
                })
                .catch((err) => {
                    dispatch(
                        pushMessage("Something failed!", MESSAGE_TYPES.error)
                    );
                    console.log(err);
                })
                .finally(() => {
                    dispatch(setAppSettingsLoading(false));
                });
        }
    };
};

export const changeLanguage = (languageValue) => {
    return function (dispatch) {
        if (languageValue) {
            const route = RouteUtils.api.settings.changeLanguage;

            dispatch(setAppSettingsLoading(true));
            RouteUtils.sendApiRequest(route, { languageValue })
                .then((res) => {
                    if (res.status === 200 && res.data.success === true) {
                        dispatch({
                            type: SETTINGS_CHANGE_LANGUAGE,
                            payload: languageValue,
                        });
                    }
                })
                .catch((err) => {
                    dispatch(
                        pushMessage("Something failed!", MESSAGE_TYPES.error)
                    );
                    console.log(err);
                })
                .finally(() => {
                    dispatch(setAppSettingsLoading(false));
                });
        }
    }
};

export const clearChangePasswordErrors = () => setChangePasswordErrors(undefined);

export const deleteAccount = () => {
    return function (dispatch) {
        const route = RouteUtils.api.settings.deleteAccount;

        RouteUtils.sendApiRequest(route, {})
            .then((res) => {
                if (res.status === 200 && res.data.success === true) {
                    dispatch(logoutUser());
                    dispatch(
                        pushMessage(
                            "Account was deleted. Good bye!",
                            MESSAGE_TYPES.info
                        )
                    );
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
                }
            })
            .catch((err) => {
                dispatch(pushMessage("Something failed!", MESSAGE_TYPES.error));
                console.log(err);
            });
    };
};

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
                    dispatch(
                        pushMessage("Changes saved", MESSAGE_TYPES.success)
                    );
                }, 500);
            });
    };
};


export const setChangePasswordErrors = (payload) => {
    return function (dispatch) {
        dispatch({
            type: SET_CHANGE_PASSWORD_ERRORS,
            payload
        });
    };
};

export const tryChangePassword = (values) => {
    console.log(values);
    return function (dispatch) {
        const route = RouteUtils.api.settings.changePassword;
        const dto = {
            currentPassword: values.currentPassword || "",
            newPassword1: values.newPassword1 || "",
            newPassword2: values.newPassword2 || ""
        };

        dispatch(setSecuritySettingsLoading(true));
        RouteUtils.sendApiRequest(route, dto)
            .then((res) => {
                if (res.status === 200 && res.data.success === true) {
                    dispatch(clearChangePasswordErrors());
                    dispatch(pushMessage("Password changed successfully", MESSAGE_TYPES.success));
                } else if (res.data.errors) {
                    dispatch(setChangePasswordErrors(res.data.errors));
                    dispatch(pushMessage("Password was not changed", MESSAGE_TYPES.warn));
                }
            })
            .catch((err) => {
                dispatch(
                    pushMessage("Something failed!", MESSAGE_TYPES.error)
                );
                console.log(err);
            })
            .finally(() => {
                dispatch(setSecuritySettingsLoading(false));
            });
    }
};
