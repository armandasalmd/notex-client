import { RouteUtils } from "@utils";

import { SETTINGS_INIT, SETTINGS_SAVE_PERSONAL_DETAILS, SET_PERSONAL_DETAILS_LOADING } from "./types";

export const initSettings = () => {
    return function (dispatch) {
        const route = RouteUtils.api.settings.getUserSettings;

        RouteUtils.sendApiRequest(route, {})
            .then(res => {
                if (res.status === 200 && res.data) {
                    dispatch({
                        type: SETTINGS_INIT,
                        payload: res.data
                    });
                }
            })
            .catch(err => {
                // TODO: replace with global error for the user
                // dispatch way
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
            .then(res => {
                if (res.status === 200 && res.data) {
                    dispatch({
                        type: SETTINGS_SAVE_PERSONAL_DETAILS,
                        payload: res.data
                    });
                }
            })
            .catch(err => {
                // TODO: replace with global error for the user
                // dispatch way
                console.log(err);
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(setPersonalDetailsLoading(false));
                }, 500);
            });
    };
};

export const setPersonalDetailsLoading = (loading) => {
    return function (dispatch) {
        dispatch({
            type: SET_PERSONAL_DETAILS_LOADING,
            payload: loading
        });
    }
};