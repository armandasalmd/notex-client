import { SET_ACTIVE_NOTE, CLOSE_NOTEBOOK } from "@actions/types";

export const setActiveNote = (backpack, noteId) => {
    return function (dispatch) {
        // Find rel notebook id in backpack
        
        dispatch({
            type: SET_ACTIVE_NOTE,
            payload: {
                notebookId: "undefined",
                noteId: noteId
            }
        });
    };
};

export const closeNotebook = () => {
    return function (dispatch) {
        dispatch({
            type: CLOSE_NOTEBOOK
        });
    };
};