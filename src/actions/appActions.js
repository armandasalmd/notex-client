import { SET_ACTIVE_NOTE, SAVE_NOTE, SAVE_SPIN_END, SAVE_SPIN_START, CLOSE_NOTEBOOK, FETCH_NOTEBOOKS, SET_EDITOR_TEXT } from "@actions/types";
import { GlobalUtils, NoteUtils, RouteUtils } from "@utils";
import { pushMessage, MESSAGE_TYPES } from "@actions/messageActions";

export const closeNotebook = () => {
    return function (dispatch) {
        dispatch({
            type: CLOSE_NOTEBOOK
        });
        window.history.pushState(RouteUtils.app.private.note.link, "", RouteUtils.app.private.note.link);
    };
};

export const fetchNotebooks = () => {
    return function (dispatch) {
        const route = RouteUtils.api.notebook.getAll;

        RouteUtils.sendApiRequest(route, {})
            .then(res => {
                if (res.status === 200 && res.data.data) {
                    dispatch({
                        type: FETCH_NOTEBOOKS,
                        payload: res.data.data
                    });
                } else {
                    // TODO: replace with global error for the user
                    console.log("Error while fetching");
                }
            })
            .catch(() => {
                dispatch(pushMessage("Error. Cannot retrieve your data", MESSAGE_TYPES.error));
            });
    };
};

export const saveChanges = (noteId, newText, isAutosave) => {
    return function (dispatch) {
        const route = RouteUtils.api.note.saveNote;
        const body = {
            noteId,
            newText: newText === undefined ? "" : newText
        };
        
        dispatch({ type: SAVE_SPIN_START });
        RouteUtils.sendApiRequest(route, body)
            .then(res => {
                if (res.status === 200 && res.data.data) {
                    dispatch({
                        type: SAVE_NOTE,
                        payload: {
                            noteId: noteId,
                            note: res.data.data,
                            autosaved: !!isAutosave
                        }
                    });
                }
            })
            .catch(() => {
                dispatch(pushMessage("Error. Note was not saved", MESSAGE_TYPES.error));
            })
            .finally(() => {
                dispatch({ type: SAVE_SPIN_END });
            });
    };
};

export const setActiveNote = (backpack, noteId) => {
    return function (dispatch) {
        const notebook = NoteUtils.findNoteParent(noteId, backpack);

        if (notebook) {
            dispatch({
                type: SET_ACTIVE_NOTE,
                payload: {
                    notebookId: GlobalUtils.getValue(notebook, NoteUtils.props.notebook.id),
                    noteId: noteId,
                    notebook: notebook,
                    note: NoteUtils.findNote(noteId, backpack)
                }
            });

            window.history.pushState(RouteUtils.app.private.note.link, "", `?${RouteUtils.app.private.note.queryNames.note}=${noteId}`);
        } else {
            window.history.pushState(RouteUtils.app.private.note.link, "", RouteUtils.app.private.note.link);
        }
    };
};

export const setEditorText = text => {
    return function (dispatch) {
        dispatch({
            type: SET_EDITOR_TEXT,
            payload: text
        });
    };
};