import {
    SET_ACTIVE_NOTE,
    SAVE_NOTE,
    SAVE_SPIN_END,
    SAVE_SPIN_START,
    CLOSE_NOTEBOOK,
    FETCH_NOTEBOOKS,
    SET_EDITOR_TEXT,
} from "@actions/types";
import { GlobalUtils, NoteUtils, RouteUtils } from "@utils";

export const closeNotebook = () => (dispatch) => {
    dispatch({
        type: CLOSE_NOTEBOOK,
    });
    window.history.pushState(RouteUtils.app.private.note.link, "", RouteUtils.app.private.note.link);
};

export const fetchNotebooks = () => async (dispatch) => {
    const route = RouteUtils.api.notebook.getAll;

    try {
        let { data } = await RouteUtils.sendApiRequest(route, {});

        if (data.data) {
            dispatch({
                type: FETCH_NOTEBOOKS,
                payload: data.data,
            });
        } else throw new Error();
    } catch {
        return false;
    }
};

export const saveChanges = (noteId, newText, isAutosave) => async (dispatch) => {
    const route = RouteUtils.api.note.saveNote;
    const body = {
        noteId,
        newText: newText === undefined ? "" : newText,
    };

    try {
        dispatch({ type: SAVE_SPIN_START });
        let { status, data } = await RouteUtils.sendApiRequest(route, body);

        if (status === 200 && data.data) {
            dispatch({
                type: SAVE_NOTE,
                payload: {
                    noteId: noteId,
                    note: data.data,
                    autosaved: !!isAutosave,
                },
            });
        }
    } catch {
        dispatch({ type: SAVE_SPIN_END });
        return false;
    }
};

export const setActiveNote = (backpack, noteId) => (dispatch) => {
    const notebook = NoteUtils.findNoteParent(noteId, backpack);

    if (notebook) {
        dispatch({
            type: SET_ACTIVE_NOTE,
            payload: {
                notebookId: GlobalUtils.getValue(notebook, NoteUtils.props.notebook.id),
                noteId: noteId,
                notebook: notebook,
                note: NoteUtils.findNote(noteId, backpack),
            },
        });

        window.history.pushState(
            RouteUtils.app.private.note.link,
            "",
            `?${RouteUtils.app.private.note.queryNames.note}=${noteId}`
        );
    } else {
        window.history.pushState(RouteUtils.app.private.note.link, "", RouteUtils.app.private.note.link);
    }
};

export const setEditorText = (text) => (dispatch) => {
    dispatch({
        type: SET_EDITOR_TEXT,
        payload: text,
    });
};
