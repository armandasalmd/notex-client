import { GlobalUtils, NoteUtils, RouteUtils } from "@utils";
import { SET_ACTIVE_NOTE, SAVE_NOTE, SAVE_SPIN_START, CLOSE_NOTEBOOK, FETCH_NOTEBOOKS, SET_EDITOR_TEXT } from "@actions/types";

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

export const closeNotebook = () => {
    return function (dispatch) {
        dispatch({
            type: CLOSE_NOTEBOOK
        });
        window.history.pushState(RouteUtils.app.private.note.link, "", RouteUtils.app.private.note.link);
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
            .catch(err => {
                // TODO: replace with global error for the user
                // dispatch way
                console.log(err);
            });
    };
};

export const saveChanges = (noteId, newText, isAutosave) => {
    return function (dispatch) {
        dispatch({ type: SAVE_SPIN_START });
        const route = RouteUtils.api.note.saveNote;
        const body = {
            noteId,
            newText
        };

        RouteUtils.sendApiRequest(route, body)
            .then(res => {
                if (res.status === 200 && res.data.data) {
                    console.log(res.data.data);
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
            .catch(err => {
                // TODO: replace with global error for the user
                // dispatch way
                console.log(err);
            });
    };
};
