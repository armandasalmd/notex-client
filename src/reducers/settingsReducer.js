import {
    SETTINGS_INIT,
    SETTINGS_SAVE_PERSONAL_DETAILS,
    SET_PERSONAL_DETAILS_LOADING
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
    isPersonalDetailsSaving: false
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
                isPersonalDetailsSaving: initialState.isPersonalDetailsSaving
            };
        case SETTINGS_SAVE_PERSONAL_DETAILS:
            return {
                ...state,
                personalDetails: {
                    ...action.payload,
                },
            };
        case SET_PERSONAL_DETAILS_LOADING:
            return {
                ...state,
                isPersonalDetailsSaving: !!action.payload
            };
        default:
            return state;
    }
}
