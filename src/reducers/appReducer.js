import { SET_ACTIVE_NOTE, CLOSE_NOTEBOOK } from "@actions/types";

const initialState = {
    changesSaved: true,
    isSaving: false,
    isSelected: false,
    selectedNotebookId: "",
    selectedNoteId: "",
    selectedNotebook: {},
    selectedNote: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_NOTE:
            const selected = !!action.payload.notebookId && !!action.payload.noteId;
            return {
                ...state,
                selectedNotebookId: action.payload.notebookId,
                selectedNoteId: action.payload.noteId,
                selectedNotebook: action.payload.notebook,
                selectedNote: action.payload.note,
                isSelected: selected
            };
        case CLOSE_NOTEBOOK:
            return {
                ...state,
                selectedNotebookId: initialState.selectedNotebookId,
                selectedNoteId: initialState.selectedNoteId,
                selectedNotebook: initialState.selectedNotebook,
                selectedNote: initialState.selectedNote,
                isSelected: false
            };
        default:
            return state;
    }
}
