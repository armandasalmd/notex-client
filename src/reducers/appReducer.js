import {
    ADD_NEW_NOTE,
    ADD_NEW_NOTEBOOK,
    CLOSE_NOTEBOOK,
    DELETE_BACKPACK,
    DELETE_NOTEBOOK,
    DELETE_NOTE,
    EVICT_NOTE,
    FETCH_NOTEBOOKS,
    RENAME_NOTEBOOK,
    RENAME_NOTE,
    RESET_ADD_MODALS,
    SAVE_NOTE,
    SAVE_SPIN_END,
    SAVE_SPIN_START,
    SET_ACTIVE_NOTE,
    SET_ADD_NOTEBOOK_LOADING,
    SET_ADD_NOTE_LOADING,
    SET_ADD_NOTEBOOK_OPEN,
    SET_ADD_NOTE_OPEN,
    SET_EDITOR_DIRTY,
    SET_MENU_LOADING
} from "@actions/types";
import { GlobalUtils, NoteUtils } from "@utils";

const initialState = {
    backpack: {
        isFetched: false,
        notebooks: []
    },
    isAutosaved: false,
    isDirty: false,
    isMenuLoading: false,
    isSaving: false,
    isSelected: false,
    modalState: {
        addNotebookOpen: false,
        addNoteOpen: false,
        addNotebookLoading: false,
        addNoteLoading: false,
        addNotebookOpenId: ""
    },
    selectedNotebookId: "",
    selectedNoteId: "",
    selectedNotebook: {},
    selectedNote: {},
    wasEverSelected: false
};

function rebuildModalState(state, modalStateProp, value) {
    return {
        ...state,
        modalState: {
            ...state.modalState,
            [modalStateProp]: value
        }
    };
}

export default function (state = initialState, action) {
    var notebook;

    switch (action.type) {
        case SET_EDITOR_DIRTY:
            return {
                ...state,
                isDirty: !!action.payload
            };
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
                isAutosaved: false,
                isDirty: false,
                isSelected: false
            };
        case DELETE_BACKPACK:
            {
                const newState = { ...initialState };

                newState.backpack.isFetched = true;

                return newState;
            }
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
        case EVICT_NOTE:
            {
                const noteToMove = NoteUtils.popNote(action.payload.noteId, state.backpack);
                
                if (noteToMove) {
                    const newSelectedNotebook = NoteUtils.findNotebook(action.payload.newNotebookId, state.backpack);

                    if (newSelectedNotebook) {
                        newSelectedNotebook.notes.push(noteToMove);

                        state.selectedNotebookId = GlobalUtils.getValue(newSelectedNotebook, NoteUtils.props.notebook.id);
                        state.selectedNotebook = newSelectedNotebook;
                        state.selectedNote = noteToMove;
                    }
                }
            }
            return state;
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
        case RENAME_NOTE:
            let note = NoteUtils.findNote(action.payload.noteId, state.backpack);

            note[NoteUtils.props.note.title] = action.payload.newTitle;

            return {
                ...state,
                isMenuLoading: false
            }
        case RESET_ADD_MODALS:
            return {
                ...state,
                modalState: { ...initialState.modalState }
            };
        case SET_ACTIVE_NOTE:
            const selected = !!action.payload.notebookId && !!action.payload.noteId;

            return {
                ...state,
                selectedNotebookId: action.payload.notebookId,
                selectedNoteId: action.payload.noteId,
                selectedNotebook: action.payload.notebook,
                selectedNote: action.payload.note,
                isAutosaved: false,
                isDirty: false,
                isSelected: selected,
                wasEverSelected: true
            };
        case SET_ADD_NOTEBOOK_LOADING:
            return rebuildModalState(state, "addNotebookLoading", !!action.payload);
        case SET_ADD_NOTE_LOADING:
            return rebuildModalState(state, "addNoteLoading", !!action.payload);
        case SET_ADD_NOTE_OPEN: {
            let newState = rebuildModalState(state, "addNoteOpen", !!action.payload.isOpen);

            newState.modalState.addNotebookOpenId = action.payload.notebookId;

            return newState;
        }
        case SET_ADD_NOTEBOOK_OPEN:
            return rebuildModalState(state, "addNotebookOpen", !!action.payload);
        case SAVE_NOTE:
            {
                var noteObj = NoteUtils.findNote(action.payload.noteId, state.backpack);
                
                if (noteObj) {
                    noteObj[NoteUtils.props.note.text] = GlobalUtils.getValue(action.payload.note, NoteUtils.props.note.text);
                    noteObj[NoteUtils.props.note.lastChanged] = GlobalUtils.getValue(action.payload.note, NoteUtils.props.note.lastChanged);
                } else {
                    console.error("Cannot save note");
                }

                return {
                    ...state,
                    isAutosaved: action.payload.autosaved,
                    isDirty: false,
                    isSaving: false,
                    selectedNote: noteObj,
                    selectedNoteId: GlobalUtils.getValue(noteObj, NoteUtils.props.note.id)
                };
            }
        case SAVE_SPIN_END:
            return {
                ...state,
                isSaving: false
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
