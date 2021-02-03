import { RouteUtils, GlobalUtils, NoteUtils } from "@utils";
import { ADD_NEW_NOTEBOOK, ADD_NEW_NOTE, DELETE_NOTEBOOK, DELETE_NOTE, EVICT_NOTE, RENAME_NOTEBOOK, RENAME_NOTE, SET_MENU_LOADING } from "@actions/types";

import { closeNotebook, setActiveNote } from "./appActions";
import { pushMessage, MESSAGE_TYPES } from "@actions/messageActions";

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
                .catch(() => {
                    dispatch(pushMessage("Error. Cannot add your note", MESSAGE_TYPES.error));
                })
                .finally(() => {
                    dispatch(setMenuLoading(false));
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
                .catch(() => {
                    dispatch(pushMessage("Error. Cannot add new notebook", MESSAGE_TYPES.error));
                })
                .finally(() => {
                    dispatch(setMenuLoading(false));
                });
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
                .catch(() => {
                    dispatch(pushMessage("Error. Cannot delete notebook", MESSAGE_TYPES.error));
                })
                .finally(() => {
                    dispatch(setMenuLoading(false));
                });
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
                .catch(() => {
                    dispatch(pushMessage("Error. Cannot delete this note", MESSAGE_TYPES.error));
                })
                .finally(() => {
                    dispatch(setMenuLoading(false));
                });
        }
    };
};

export const evictNote = (noteId, newNotebookId) => {
    return function (dispatch) {
        if (noteId && newNotebookId) {
            const route = RouteUtils.api.note.evictNote;
            const dto = { noteId, newNotebookId };

            dispatch(setMenuLoading(true));
            RouteUtils.sendApiRequest(route, dto)
                .then(res => {
                    if (res.status === 200 && res.data === true) {
                        dispatch({
                            type: EVICT_NOTE,
                            payload: { ...dto }
                        });
                    }
                })
                .catch(() => {
                    dispatch(pushMessage("Error. Cannot nove your note", MESSAGE_TYPES.error));
                })
                .finally(() => {
                    dispatch(setMenuLoading(false));
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
                .catch(() => {
                    dispatch(pushMessage("Error. Cannot do the rename", MESSAGE_TYPES.error));
                })
                .finally(() => {
                    dispatch(setMenuLoading(false));
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
                .catch(() => {
                    dispatch(pushMessage("Error. Cannot do the rename", MESSAGE_TYPES.error));
                })
                .finally(() => {
                    dispatch(setMenuLoading(false));
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
