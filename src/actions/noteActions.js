import { RouteUtils, GlobalUtils, NoteUtils } from "@utils";
import { ADD_NEW_NOTEBOOK, ADD_NEW_NOTE, DELETE_NOTEBOOK, DELETE_NOTE, EVICT_NOTE, RENAME_NOTEBOOK, RENAME_NOTE, SET_MENU_LOADING } from "@actions/types";

import { closeNotebook, setActiveNote } from "./appActions";

export const addNewNote = (backpack, noteName, notebookId) => async (dispatch) => {
    if (!noteName) return;

    const route = RouteUtils.api.note.addNote;
    const dto = {
        name: noteName,
        notebookId: notebookId
    };

    dispatch(setMenuLoading(true));
    try {
        let { data } = await RouteUtils.sendApiRequest(route, dto);

        dispatch({
            type: ADD_NEW_NOTE,
            payload: {
                notebookId: notebookId,
                note: data.data
            }
        });

        let noteId = GlobalUtils.getValue(data.data, NoteUtils.props.note.id);

        if (noteId) {
            dispatch(setActiveNote(backpack, noteId));
        }
    } catch {
        dispatch(setMenuLoading(false));
        return false;
    }
    
    dispatch(setMenuLoading(false));
};

export const addNewNotebook = (backpack, notebookName) => async (dispatch) => {
    if (!notebookName) return;

    const route = RouteUtils.api.notebook.addNotebook;
    const dto = {
        title: notebookName
    };

    dispatch(setMenuLoading(true));

    try {
        let { data } = await RouteUtils.sendApiRequest(route, dto);

        dispatch({
            type: ADD_NEW_NOTEBOOK,
            payload: data.data
        });

        let noteId = GlobalUtils.getValue(data.data, `${NoteUtils.props.notebook.notes}.0.${NoteUtils.props.note.id}`);

        if (noteId) {
            dispatch(setActiveNote(backpack, noteId));
        }
    } catch {
        dispatch(setMenuLoading(false));
        return false;
    }
};

export const deleteNotebook = (notebookId, activeNotebookId) => async (dispatch) => {
    if (!notebookId) return;

    const route = RouteUtils.api.notebook.deleteNotebook;
    const dto = { notebookId: notebookId };

    dispatch(setMenuLoading(true));

    try {
        await RouteUtils.sendApiRequest(route, dto);
        
        if (activeNotebookId && activeNotebookId === notebookId) {
            dispatch(closeNotebook());
        }

        dispatch({
            type: DELETE_NOTEBOOK,
            payload: {
                notebookId: notebookId
            }
        });
    } catch {
        dispatch(setMenuLoading(false));
        return false;
    }

    dispatch(setMenuLoading(false));
};

export const deleteNote = noteId => async (dispatch) => {
    if (!noteId) return;

    const route = RouteUtils.api.note.deleteNote;
    const dto = { noteId: noteId };

    dispatch(setMenuLoading(true));

    try {
        await RouteUtils.sendApiRequest(route, dto);

        dispatch({
            type: DELETE_NOTE,
            payload: {
                noteId: noteId
            }
        });
        dispatch(closeNotebook());
    } catch {
        dispatch(setMenuLoading(false));
        return false;
    }

    dispatch(setMenuLoading(false));
};

export const evictNote = (noteId, newNotebookId) => async (dispatch) => {
    if (!noteId || !newNotebookId) return;

    const route = RouteUtils.api.note.evictNote;
    const dto = { noteId, newNotebookId };

    dispatch(setMenuLoading(true));

    try {
        let { data } = await RouteUtils.sendApiRequest(route, dto);

        if (data === true) {
            dispatch({
                type: EVICT_NOTE,
                payload: { ...dto }
            });
        }
    } catch {
        dispatch(setMenuLoading(false));
        return false;
    }
    
    dispatch(setMenuLoading(false));
};

export const renameNotebook = (notebookId, newName) => async (dispatch) => {
    if (!notebookId || !newName) return;

    const route = RouteUtils.api.notebook.renameNotebook;
    const dto = {
        notebookId: notebookId,
        newTitle: newName
    };

    dispatch(setMenuLoading(true));

    try {
        await RouteUtils.sendApiRequest(route, dto);

        dispatch({
            type: RENAME_NOTEBOOK,
            payload: {
                notebookId: notebookId,
                newTitle: newName
            }
        });
    } catch {
        dispatch(setMenuLoading(false));
        return false;
    }

    dispatch(setMenuLoading(false));
};

export const renameNote = (noteId, newName) => async (dispatch) => {
    if (!noteId || !newName) return;

    const route = RouteUtils.api.note.renameNote;
    const dto = {
        noteId: noteId,
        newName: newName
    };

    dispatch(setMenuLoading(true));

    try {
        await RouteUtils.sendApiRequest(route, dto);

        dispatch({
            type: RENAME_NOTE,
            payload: {
                noteId: noteId,
                newTitle: newName
            }
        });
    } catch {
        dispatch(setMenuLoading(false));
        return false;
    }

    dispatch(setMenuLoading(false));
};

export const setMenuLoading = isLoading => (dispatch) => {
    dispatch({
        type: SET_MENU_LOADING,
        payload: isLoading
    });
};
