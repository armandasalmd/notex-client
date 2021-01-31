import {
    SETTINGS_INIT,
    SETTINGS_SAVE_PERSONAL_DETAILS,
    SETTINGS_CHANGE_LANGUAGE,
    SET_PERSONAL_DETAILS_LOADING,
    SET_APP_SETTINGS_LOADING,
    SET_SECURITY_SETTINGS_LOADING,
    SETTINGS_CHANGE_AUTO_SAVE,
    SETTINGS_CHANGE_CLOSE_ON_CLICK,
} from "@actions/types";

const initialState = {
    appSettings: {
        autoSave: true,
        closeAfterSelect: true,
        preferredLanguage: "en",
    },
    personalDetails: {
        email: "",
        firstname: "",
        lastname: "",
        phone: "",
        avatarUrl: "",
    },
    securitySettings: {
        linked: false,
        provider: null,
    },
    initialised: false,
    loadingStates: {
        appSettings: false,
        personalDetails: false,
        securitySettings: false,
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SETTINGS_INIT:
            return {
                appSettings: {
                    ...action.payload.appSettings,
                },
                personalDetails: {
                    ...action.payload.personalDetails,
                },
                securitySettings: {
                    ...action.payload.securitySettings,
                },
                initialised: true,
                isPersonalDetailsSaving: initialState.isPersonalDetailsSaving,
                loadingStates: initialState.loadingStates,
            };
        case SETTINGS_SAVE_PERSONAL_DETAILS:
            return {
                ...state,
                personalDetails: {
                    ...action.payload,
                },
            };
        case SETTINGS_CHANGE_LANGUAGE:
            state.appSettings = {
                ...state.appSettings,
                preferredLanguage: action.payload,
            };

            return { ...state };
        case SET_PERSONAL_DETAILS_LOADING:
            state.loadingStates.personalDetails = !!action.payload;
            return { ...state };
        case SET_APP_SETTINGS_LOADING:
            state.loadingStates.appSettings = !!action.payload;
            return { ...state };
        case SET_SECURITY_SETTINGS_LOADING:
            state.loadingStates.securitySettings = !!action.payload;
            return { ...state };
        case SETTINGS_CHANGE_AUTO_SAVE:
            state.appSettings = {
                ...state.appSettings,
                autoSave: !!action.payload,
            };

            return { ...state };
        case SETTINGS_CHANGE_CLOSE_ON_CLICK:
            state.appSettings = {
                ...state.appSettings,
                closeAfterSelect: !!action.payload,
            };

            return { ...state };
        default:
            return state;
    }
}
