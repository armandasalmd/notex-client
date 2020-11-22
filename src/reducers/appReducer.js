import { SET_ACTIVE_NOTE, SAVE_NOTE, SAVE_SPIN_START, CLOSE_NOTEBOOK, FETCH_NOTEBOOKS, SET_EDITOR_TEXT } from "@actions/types";
import { GlobalUtils, NoteUtils } from "@utils";

const initialState = {
    backpack: {
        isFetched: false,
        notebooks: []
    },
    editorText: "",
    isAutosaved: false,
    isSaving: false,
    isSelected: false,
    selectedNotebookId: "",
    selectedNoteId: "",
    selectedNotebook: {},
    selectedNote: {},
    wasEverSelected: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_NOTE:
            const selected = !!action.payload.notebookId && !!action.payload.noteId;
            const newEditorText = GlobalUtils.getValue(action.payload.note, NoteUtils.props.note.text);
            
            return {
                ...state,
                selectedNotebookId: action.payload.notebookId,
                selectedNoteId: action.payload.noteId,
                selectedNotebook: action.payload.notebook,
                selectedNote: action.payload.note,
                isSelected: selected,
                editorText: newEditorText,
                wasEverSelected: true
            };
        case CLOSE_NOTEBOOK:
            return {
                ...state,
                selectedNotebookId: initialState.selectedNotebookId,
                selectedNoteId: initialState.selectedNoteId,
                selectedNotebook: initialState.selectedNotebook,
                selectedNote: initialState.selectedNote,
                isSelected: false,
                editorText: initialState.editorText
            };
        case FETCH_NOTEBOOKS:
            return {
                ...state,
                backpack: {
                    isFetched: true,
                    notebooks: action.payload
                }
            };
        case SET_EDITOR_TEXT:
            return {
                ...state,
                editorText: action.payload
            };
        case SAVE_NOTE:
            var noteObj = NoteUtils.findNote(action.payload.noteId, state.backpack);
            if (noteObj) {
                noteObj[NoteUtils.props.note.text] = GlobalUtils.getValue(action.payload.note, NoteUtils.props.note.text);
            } else {
                console.error("Cannot save note");
            }
            return {
                ...state,
                isSaving: false,
                isAutosaved: action.payload.autosaved
            };
        case SAVE_SPIN_START:
            return {
                ...state,
                isSaving: true
            };
        default:
            return state;
    }
}
