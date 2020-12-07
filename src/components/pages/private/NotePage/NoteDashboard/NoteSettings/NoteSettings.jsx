import React from "react";
import { NoteUtils, GlobalUtils } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteNote } from "@actions/noteActions";

import "./NoteSettings.less";
import { ChangeName, ChangeNotebook, ControlAccess, DeleteNote } from "./__components__";

const NoteSettings = props => {
    const note = props.app.selectedNote,
        noteTitle = GlobalUtils.getValue(note, NoteUtils.props.note.title);

    const notebook = props.app.selectedNotebook;

    const onChangeName = newName => {
        console.log(newName);
    };

    const onChangeNotebook = selectedNotebookId => {
        console.log(selectedNotebookId);
    };

    const onChangeAccess = newAccessValue => {
        console.log(newAccessValue);
    };

    const onDeleteNote = () => {
        props.deleteNote(props.app.selectedNoteId);
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
    deleteNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    app: state.app,
    backpack: state.app.backpack
});

export default connect(mapStateToProps, { deleteNote })(NoteSettings);
