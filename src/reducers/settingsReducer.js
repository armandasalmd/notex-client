import { SET_SETTINGS } from "@actions/types";

const initialState = {
    email: "",
    firstname: "",
    lastname: "",
    language: "",
    phone: "",
    avatarUrl: "",
    initialised: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SETTINGS:
            return {
                ...state,
                ...action.payload,
                initialised: true
            };
        default:
            return state;
    }
}
