import {
    ADD_NEW_NOTE,
    ADD_NEW_NOTEBOOK,
    CLOSE_NOTEBOOK,
    DELETE_NOTEBOOK,
    DELETE_NOTE,
    FETCH_NOTEBOOKS,
    RENAME_NOTEBOOK,
    SAVE_NOTE,
    SAVE_SPIN_START,
    SET_ACTIVE_NOTE,
    SET_EDITOR_TEXT,
    SET_MENU_LOADING
} from "@actions/types";
import { GlobalUtils, NoteUtils } from "@utils";

const initialState = {
    backpack: {
        isFetched: false,
        notebooks: []
    },
    editorText: "",
    isAutosaved: false,
    isMenuLoading: false,
    isSaving: false,
    isSelected: false,
    selectedNotebookId: "",
    selectedNoteId: "",
    selectedNotebook: {},
    selectedNote: {},
    wasEverSelected: false
};

export default function (state = initialState, action) {
    var notebook;

    switch (action.type) {
        case ADD_NEW_NOTE:
            notebook = NoteUtils.findNotebook(action.payload.notebookId, state.backpack) || {};
            GlobalUtils.getValue(notebook, NoteUtils.props.notebook.notes).push(action.payload.note);
            
            return {
                ...state,
                isMenuLoading: false
            };
        case ADD_NEW_NOTEBOOK:
            if (action.payload) {
                state.backpack.notebooks.push(action.payload);
            }

            return {
                ...state,
                isMenuLoading: false
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
        case DELETE_NOTEBOOK:
            state.backpack.notebooks = state.backpack.notebooks.filter(function (notebook) {
                return GlobalUtils.getValue(notebook, NoteUtils.props.notebook.id) !== action.payload.notebookId;
            });

            return {
                ...state,
                isMenuLoading: false
            };
        case DELETE_NOTE:
            notebook = NoteUtils.findNoteParent(action.payload.noteId, state.backpack);
            let notes = GlobalUtils.getValue(notebook, NoteUtils.props.notebook.notes);

            notes = notes.filter((note) => {
                return action.payload.noteId !== GlobalUtils.getValue(note, NoteUtils.props.note.id);
            });
            notebook.notes = notes;

            return {
                ...state,
                isMenuLoading: false
            };
        case FETCH_NOTEBOOKS:
            return {
                ...state,
                backpack: {
                    isFetched: true,
                    notebooks: action.payload
                }
            };
        case RENAME_NOTEBOOK:
            notebook = NoteUtils.findNotebook(action.payload.notebookId, state.backpack);
            notebook[NoteUtils.props.notebook.title] = action.payload.newTitle;

            return {
                ...state,
                isMenuLoading: false
            };
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
        case SET_MENU_LOADING:
            return {
                ...state,
                isMenuLoading: !!action.payload
            }
        default:
            return state;
    }
}
