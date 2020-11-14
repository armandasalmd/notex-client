import { SET_ACTIVE_NOTE, CLOSE_NOTEBOOK } from "@actions/types";

const initialState = {
    changesSaved: true,
    isSelected: false,
    selectedNotebookId: "",
    selectedNoteId: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_NOTE:
            const selected = !!action.payload.notebookId && !!action.payload.noteId;
            return {
                ...state,
                selectedNotebookId: action.payload.notebookId,
                selectedNoteId: action.payload.noteId,
                isSelected: selected
            };
        case CLOSE_NOTEBOOK:
            return {
                ...state,
                selectedNotebookId: "",
                selectedNoteId: "",
                isSelected: false
            };
        default:
            return state;
    }
}
