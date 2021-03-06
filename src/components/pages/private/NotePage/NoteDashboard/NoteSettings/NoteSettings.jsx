import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { NoteUtils, GlobalUtils, MessageUtils } from "@utils";
import { deleteNote, evictNote, renameNote } from "@actions/noteActions";

import "./NoteSettings.less";
import { ChangeName, ChangeNotebook, ControlAccess, DeleteNote } from "./__components__";

const NoteSettings = props => {
    const note = props.app.selectedNote,
        noteTitle = GlobalUtils.getValue(note, NoteUtils.props.note.title);

    const notebook = props.app.selectedNotebook;

    const onChangeName = newName => {
        MessageUtils.handleDispatched(props.renameNote(GlobalUtils.getValue(note, NoteUtils.props.note.id), newName));
    };

    const onChangeNotebook = selectedNotebookId => {
        MessageUtils.handleDispatched(props.evictNote(GlobalUtils.getValue(note, NoteUtils.props.note.id), selectedNotebookId));
    };

    const onChangeAccess = (newAccessValue) => { return newAccessValue; };

    const onDeleteNote = () => {
        MessageUtils.handleDispatched(props.deleteNote(props.app.selectedNoteId));
    };

    return (
        <div className="note-settings-root">
            <div className="form">
                <ChangeName key={noteTitle + "1"} noteName={noteTitle} onSubmit={onChangeName} />
                <ChangeNotebook
                    key={noteTitle + "2"}
                    noteName={noteTitle}
                    notebookId={GlobalUtils.getValue(notebook, NoteUtils.props.notebook.id)}
                    notebookOptions={NoteUtils.getNotebookSelectOptions(props.backpack)}
                    onSubmit={onChangeNotebook}
                />
                <ControlAccess
                    key={noteTitle + "3"}
                    selectedValue={GlobalUtils.getValue(note, NoteUtils.props.note.accessLevel)}
                    noteOwner={GlobalUtils.getValue(notebook, NoteUtils.props.notebook.owner)}
                    onSubmit={onChangeAccess}
                />
                <DeleteNote key={noteTitle + "4"} onSubmit={onDeleteNote} />
            </div>
        </div>
    );
};

NoteSettings.propTypes = {
    app: PropTypes.object.isRequired,
    backpack: PropTypes.object.isRequired,
    deleteNote: PropTypes.func.isRequired,
    evictNote: PropTypes.func.isRequired,
    renameNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    app: state.app,
    backpack: state.app.backpack
});

export default connect(mapStateToProps, { deleteNote, evictNote, renameNote })(NoteSettings);
