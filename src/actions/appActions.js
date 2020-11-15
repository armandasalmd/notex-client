import { GlobalUtils, NoteUtils } from "@utils";
import { SET_ACTIVE_NOTE, CLOSE_NOTEBOOK } from "@actions/types";

export const setActiveNote = (backpack, noteId) => {
    return function (dispatch) {
        const notebook = NoteUtils.findNoteParent(noteId, backpack);

        dispatch({
            type: SET_ACTIVE_NOTE,
            payload: {
                notebookId: GlobalUtils.getValue(notebook, NoteUtils.props.notebook.id),
                noteId: noteId,
                notebook: notebook,
                note: NoteUtils.findNote(noteId, backpack)
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
