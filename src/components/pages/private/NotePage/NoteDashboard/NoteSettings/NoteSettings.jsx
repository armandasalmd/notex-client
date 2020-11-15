import React from "react";
import { NoteUtils, GlobalUtils } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";

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
        console.log(note);
    };

    return (
        <div className="note-settings-root">
            <div className="form">
                <ChangeName noteName={noteTitle} onSubmit={onChangeName} />
                <ChangeNotebook
                    noteName={noteTitle}
                    notebookId={GlobalUtils.getValue(notebook, NoteUtils.props.notebook.id)}
                    notebookOptions={NoteUtils.getNotebookSelectOptions(props.backpack)}
                    onSubmit={onChangeNotebook}
                />
                <ControlAccess
                    selectedValue={GlobalUtils.getValue(note, NoteUtils.props.note.accessLevel)}
                    accessOptions={NoteUtils.accessOptions}
                    onSubmit={onChangeAccess}
                />
                <DeleteNote onSubmit={onDeleteNote} />
            </div>
        </div>
    );
};

NoteSettings.propTypes = {
    app: PropTypes.object.isRequired,
    backpack: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    app: state.app,
    backpack: state.backpack
});

export default connect(mapStateToProps, {})(NoteSettings);
