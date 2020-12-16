import { RouteUtils } from "@utils";
import { ADD_NEW_NOTEBOOK, ADD_NEW_NOTE, DELETE_NOTEBOOK, DELETE_NOTE, RENAME_NOTEBOOK, RENAME_NOTE, SET_MENU_LOADING } from "@actions/types";

import { closeNotebook, setActiveNote } from "./appActions";
import { GlobalUtils, NoteUtils } from "@utils";

export const addNewNote = (backpack, noteName, notebookId) => {
    return function (dispatch) {
        if (noteName) {
            const route = RouteUtils.api.note.addNote;
            const dto = {
                name: noteName,
                notebookId: notebookId
            };

            dispatch(setMenuLoading(true));
            RouteUtils.sendApiRequest(route, dto)
                .then(res => {
                    dispatch({
                        type: ADD_NEW_NOTE,
                        payload: {
                            notebookId: notebookId,
                            note: res.data.data
                        }
                    });

                    let noteId = GlobalUtils.getValue(res.data.data, NoteUtils.props.note.id);

                    if (noteId) {
                        dispatch(setActiveNote(backpack, noteId));
                    }
                })
                .catch(err => {
                    // TODO: replace with global error for the user
                    // dispatch way
                    console.log(err);
                });
        }
    };
};

export const addNewNotebook = (backpack, notebookName, owner) => {
    return function (dispatch) {
        if (notebookName && owner) {
            const route = RouteUtils.api.notebook.addNotebook;
            const dto = {
                owner: owner,
                title: notebookName
            };

            dispatch(setMenuLoading(true));
            RouteUtils.sendApiRequest(route, dto)
                .then(res => {
                    dispatch({
                        type: ADD_NEW_NOTEBOOK,
                        payload: res.data.data
                    });

                    let noteId = GlobalUtils.getValue(res.data.data, `${NoteUtils.props.notebook.notes}.0.${NoteUtils.props.note.id}`);

                    if (noteId) {
                        dispatch(setActiveNote(backpack, noteId));
                    }
                })
                .catch(err => {
                    // TODO: replace with global error for the user
                    // dispatch way
                    console.log(err);
                });
        } else {
            console.warn("Invalid notebook name or owner");
        }
    };
};

export const deleteNotebook = (notebookId, activeNotebookId) => {
    return function (dispatch) {
        if (notebookId) {
            const route = RouteUtils.api.notebook.deleteNotebook;
            const dto = { notebookId: notebookId };

            dispatch(setMenuLoading(true));
            RouteUtils.sendApiRequest(route, dto)
                .then(res => {
                    if (activeNotebookId && activeNotebookId === notebookId) {
                        dispatch(closeNotebook());
                    }

                    if (res.status === 200) {
                        dispatch({
                            type: DELETE_NOTEBOOK,
                            payload: {
                                notebookId: notebookId
                            }
                        });
                    }
                })
                .catch(err => {
                    // TODO: replace with global error for the user
                    // dispatch way
                    console.log(err);
                });
        } else {
            console.warn("Invalid notebook name or owner");
        }
    };
};

export const deleteNote = noteId => {
    return function (dispatch) {
        if (noteId) {
            const route = RouteUtils.api.note.deleteNote;
            const dto = { noteId: noteId };

            dispatch(setMenuLoading(true));
            RouteUtils.sendApiRequest(route, dto)
                .then(res => {
                    if (res.status === 200) {
                        dispatch({
                            type: DELETE_NOTE,
                            payload: {
                                noteId: noteId
                            }
                        });
                        dispatch(closeNotebook());
                    }
                })
                .catch(err => {
                    // TODO: replace with global error for the user
                    // dispatch way
                    console.log(err);
                });
        }
    };
};

export const renameNotebook = (notebookId, newName) => {
    return function (dispatch) {
        if (notebookId && newName) {
            const route = RouteUtils.api.notebook.renameNotebook;
            const dto = {
                notebookId: notebookId,
                newTitle: newName
            };

            dispatch(setMenuLoading(true));
            RouteUtils.sendApiRequest(route, dto)
                .then(res => {
                    if (res.status === 200) {
                        dispatch({
                            type: RENAME_NOTEBOOK,
                            payload: {
                                notebookId: notebookId,
                                newTitle: newName
                            }
                        });
                    }
                })
                .catch(err => {
                    // TODO: replace with global error for the user
                    // dispatch way
                    console.log(err);
                });
        }
    };
};

export const renameNote = (noteId, newName) => {
    return function (dispatch) {
        if (noteId && newName) {
            const route = RouteUtils.api.note.renameNote;
            const dto = {
                noteId: noteId,
                newName: newName
            };

            dispatch(setMenuLoading(true));
            RouteUtils.sendApiRequest(route, dto)
                .then(res => {
                    if (res.status === 200) {
                        dispatch({
                            type: RENAME_NOTE,
                            payload: {
                                noteId: noteId,
                                newTitle: newName
                            }
                        });
                    }
                })
                .catch(err => {
                    // TODO: replace with global error for the user
                    // dispatch way
                    console.log(err);
                });
        }
    };
};

export const setMenuLoading = isLoading => {
    return function (dispatch) {
        dispatch({
            type: SET_MENU_LOADING,
            payload: isLoading
        });
    };
};
