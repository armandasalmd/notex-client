import { RouteUtils, I18nUtils } from "@utils";
import { setLocale } from "react-redux-i18n";

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
    UNLINK_SOCIAL_ACCOUNT,
    UPDATE_AVATAR
} from "./types";
import { setMenuLoading } from "./noteActions";
import { logoutUser } from "./authActions";

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

export const changeAutoSave = (value) => async (dispatch) => {
    if (typeof value !== "boolean") return false;

    const route = RouteUtils.api.settings.autoSaveChange;

    dispatch(setAppSettingsLoading(true));

    try {
        let { data } = await RouteUtils.sendApiRequest(route, { autoSaveValue: value });

        if (data.success === true) {
            dispatch({
                type: SETTINGS_CHANGE_AUTO_SAVE,
                payload: value,
            });
        } else throw new Error();
    } catch {
        dispatch(setAppSettingsLoading(false));
        return false;
    }

    dispatch(setAppSettingsLoading(false));
};

export const changeCloseOnClick = (value) => async (dispatch) => {
    if (typeof value !== "boolean") return false;

    const route = RouteUtils.api.settings.closeOnClickChange;

    dispatch(setAppSettingsLoading(true));

    try {
        let { data } = await RouteUtils.sendApiRequest(route, { value });

        if (data.success === true) {
            dispatch({
                type: SETTINGS_CHANGE_CLOSE_ON_CLICK,
                payload: value,
            });
        } else throw new Error();
    } catch {
        dispatch(setAppSettingsLoading(false));
        return false;
    }

    dispatch(setAppSettingsLoading(false));
};

export const changeLanguage = (languageValue) => async (dispatch) => {
    if (!languageValue) return false;

    const route = RouteUtils.api.settings.changeLanguage;

    dispatch(setAppSettingsLoading(true));

    try {
        let { data } = await RouteUtils.sendApiRequest(route, { languageValue });

        if (data.success === true) {
            dispatch({
                type: SETTINGS_CHANGE_LANGUAGE,
                payload: languageValue,
            });
        
            localStorage.setItem(I18nUtils.LOCAL_STORAGE_KEY, languageValue);
            dispatch(setLocale(languageValue));
        } else throw new Error();
    } catch {
        dispatch(setAppSettingsLoading(false));
        return false;
    }

    dispatch(setAppSettingsLoading(false));
};

export const clearChangePasswordErrors = () => setChangePasswordErrors(undefined);

export const deleteAccount = () => async (dispatch) => {
    const route = RouteUtils.api.settings.deleteAccount;

    try {
        let { data } = await RouteUtils.sendApiRequest(route, {});

        if (data.success === true) {
            dispatch(logoutUser());

        }
    } catch {
        return false;
    }

    return "Account was deleted. Good bye!";
};

export const deleteBackpack = () => async (dispatch) => {
    const route = RouteUtils.api.settings.deleteBackpack;

    dispatch(setMenuLoading(true));
    
    try {
        let { data } = await RouteUtils.sendApiRequest(route, {});
        
        if (data.success === true) {
            dispatch({
                type: DELETE_BACKPACK,
            });
        } else throw new Error();
    } catch {
        dispatch(setMenuLoading(false));
        return false;
    }

    dispatch(setMenuLoading(false));
};

export const initSettings = () => async (dispatch) => {
    const route = RouteUtils.api.settings.getUserSettings;

    try {
        let { data } = await RouteUtils.sendApiRequest(route, {});

        if (data) {
            dispatch({
                type: SETTINGS_INIT,
                payload: data,
            });
        } else throw new Error();
    } catch {
        return false;
    }
};

export const savePersonalDetails = (personalDetails) => async (dispatch) => {
    if (!personalDetails) return false;

    const route = RouteUtils.api.settings.savePersonalDetails;

    dispatch(setPersonalDetailsLoading(true));

    try {
        let { data } = await RouteUtils.sendApiRequest(route, personalDetails);

        if (data) {
            dispatch({
                type: SETTINGS_SAVE_PERSONAL_DETAILS,
                payload: data,
            });
        } else throw new Error();
    } catch {
        dispatch(setPersonalDetailsLoading(false));
        return false;
    }
    
    dispatch(setPersonalDetailsLoading(false));
    return "Changes saved";            
};


export const setChangePasswordErrors = (payload) => (dispatch) => {
    dispatch({
        type: SET_CHANGE_PASSWORD_ERRORS,
        payload
    });
};

export const tryChangePassword = (values) => async (dispatch) => {
    const route = RouteUtils.api.settings.changePassword;
    const dto = {
        currentPassword: values.currentPassword || "",
        newPassword1: values.newPassword1 || "",
        newPassword2: values.newPassword2 || ""
    };

    dispatch(setSecuritySettingsLoading(true));

    try {
        let { data } = await RouteUtils.sendApiRequest(route, dto);

        if (data.success === true) {
            dispatch(clearChangePasswordErrors());
        } else throw new Error();
    } catch {
        dispatch(setSecuritySettingsLoading(false));
        return false;
    }
    
    dispatch(setSecuritySettingsLoading(false));
    return "Password changed successfully";
};

export const unlinkSocialAccount = (socialAccountType) => async (dispatch) => {
    const route = RouteUtils.api.settings.unlinkSocialAccount;
    
    dispatch(setSecuritySettingsLoading(true));

    try {
        let { data } = await RouteUtils.sendApiRequest(route, { strategyToUnlink: socialAccountType });

        if (data.success === true) {
            dispatch({
                type: UNLINK_SOCIAL_ACCOUNT,
                payload: socialAccountType
            });
        } else throw new Error()
    } catch {
        dispatch(setSecuritySettingsLoading(false));
        return false;
    }
    
    dispatch(setSecuritySettingsLoading(false));
    return "Account unlinked successfully";
};

export const updateAvatar = (avatarUrl) => (dispatch) => {
    dispatch({
        type: UPDATE_AVATAR,
        payload: avatarUrl
    });

    return "Picture saved";
};