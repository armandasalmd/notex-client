// app actions
export const SET_ACTIVE_NOTE = "SET_ACTIVE_NOTE";
export const CLOSE_NOTEBOOK = "CLOSE_NOTEBOOK";
export const SET_CHANGES_SAVED = "SET_CHANGES_SAVED";
export const FETCH_NOTEBOOKS = "FETCH_NOTEBOOKS";
export const SET_EDITOR_TEXT = "SET_EDITOR_TEXT";
export const SAVE_NOTE = "SAVE_NOTE";
export const SAVE_SPIN_START = "SAVE_SPIN_START";
export const SAVE_SPIN_END = "SAVE_SPIN_END";
export const SET_MENU_LOADING = "SET_MENU_LOADING";

// auth actions
export const USER_LOADING = "USER_LOADING";
export const SET_AUTH_LOADING = "SET_AUTH_LOADING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const USER_LOGOUT = "USER_LOGOUT";

// note actions
export const ADD_NEW_NOTE = "ADD_NEW_NOTE";
export const ADD_NEW_NOTEBOOK = "ADD_NEW_NOTEBOOK";
export const DELETE_NOTE = "DELETE_NOTE";
export const DELETE_NOTEBOOK = "DELETE_NOTEBOOK";
export const RENAME_NOTE = "RENAME_NOTE";
export const RENAME_NOTEBOOK = "RENAME_NOTEBOOK";
export const EVICT_NOTE = "EVICT_NOTE";
// export const CHANGE_ACCESS_LEVEL = "CHANGE_ACCESS_LEVEL";

// settings reducer
export const SETTINGS_INIT = "SETTINGS_INIT";
export const SETTINGS_SAVE_PERSONAL_DETAILS = "SETTINGS_SAVE_PERSONAL_DETAILS";
export const SET_PERSONAL_DETAILS_LOADING = "SET_PERSONAL_DETAILS_LOADING";
export const SET_APP_SETTINGS_LOADING = "SET_APP_SETTINGS_LOADING";
export const SET_SECURITY_SETTINGS_LOADING = "SET_SECURITY_SETTINGS_LOADING";
export const SETTINGS_CHANGE_LANGUAGE = "SETTINGS_CHANGE_LANGUAGE";
export const SETTINGS_CHANGE_AUTO_SAVE = "SETTINGS_CHANGE_AUTO_SAVE";
export const SETTINGS_CHANGE_CLOSE_ON_CLICK = "SETTINGS_CHANGE_CLOSE_ON_CLICK";
export const DELETE_BACKPACK = "DELETE_BACKPACK";
export const UNLINK_SOCIAL_ACCOUNT = "UNLINK_SOCIAL_ACCOUNT";

// message reducer
export const PUSH_MESSAGE = "PUSH_MESSAGE";
export const REMOVE_MESSAGES_BY_ID = "REMOVE_MESSAGES_BY_ID";

// error reducer
export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const SET_CHANGE_PASSWORD_ERRORS = "SET_CHANGE_PASSWORD_ERRORS";
