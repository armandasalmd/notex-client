import React, { useState } from "react";
import { NoteUtils, GlobalUtils } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNewNote, deleteNotebook, renameNotebook } from "@actions/noteActions";

import { Row, Button, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, PrinterOutlined, DeleteOutlined } from "@ant-design/icons";
import SingleFieldModal from "##/SingleFieldModal";

import "./NotebookDetails.less";

const NotebookDetails = props => {
    const notebook = props.app.selectedNotebook;
    const note = props.app.selectedNote;
    let noteAccessLevel = GlobalUtils.getValue(note, NoteUtils.props.note.accessLevel, "unavailable");
    let noteLastChanged = GlobalUtils.getValue(note, NoteUtils.props.note.lastChanged, "unavailable");
    
    if (noteLastChanged !== "unavailable") {
        noteLastChanged = GlobalUtils.toDisplayDate(new Date(noteLastChanged));
    }

    const [modalAddNoteOpen, setModalAddNoteOpen] = useState(false);
    const [modalRenameOpen, setModalRenameOpen] = useState(false);

    const submitAddNote = async (value, { notebookId }) => {
        props.addNewNote(props.app.backpack, value, notebookId);
        setModalAddNoteOpen(false);
    };
    
    const submitRenameNotebook = async (value, { notebookId }) => {
        props.renameNotebook(notebookId, value);
        setModalRenameOpen(false);
    };

    const onDelete = () => {
        props.deleteNotebook(props.app.selectedNotebookId, props.app.selectedNotebookId);
    };

    return (
        <div className="notebook-details-root">
            <div className="content-card notebook-details">
                <Row style={{ marginTop: "24px", marginBottom: "18px", flexFlow: "column", alignItems: "center" }}>
                    <img className="title-image" src="/images/undraw/undraw_notebook.svg" alt="Notebook" />
                    <h1>{GlobalUtils.getValue(notebook, NoteUtils.props.notebook.title)}</h1>
                </Row>
                <Row style={{ width: "100%", marginBottom: "18px", display: "inline-block" }}>
                    <h1 className="header header--medium">Current note details</h1>
                    <p className="text text--light">
                        <span className="text--silent">Last modified: </span>{noteLastChanged}
                    </p>
                    <p className="text text--light">
                        <span className="text--silent">Access level: </span>{noteAccessLevel}
                    </p>
                </Row>
                <Row style={{ width: "100%", marginBottom: "18px", display: "inline-block" }}>
                    <h1 className="header header--medium">Notebook details</h1>
                    <p className="text text--light">
                        <span className="text--silent">Note count: </span>
                        {GlobalUtils.getValue(notebook, NoteUtils.props.notebook.notes).length}
                    </p>
                    <p className="text text--light">
                        <span className="text--silent">Owner: </span>
                        {GlobalUtils.getValue(notebook, NoteUtils.props.notebook.owner)}
                    </p>
                </Row>
                <Row className="notebook-details-actions">
                    <h1 className="header header--medium">Notebook actions</h1>
                    <Button type="primary" onClick={() => setModalAddNoteOpen(true)} ghost block icon={<PlusOutlined />}>
                        Add new note
                    </Button>
                    <Button block onClick={() => setModalRenameOpen(true)} icon={<EditOutlined />}>
                        Rename notebook
                    </Button>
                    <Button disabled block icon={<PrinterOutlined />}>
                        Export all notes to PDF
                    </Button>
                    <Popconfirm
                        placement="bottomRight"
                        title="Are you sure you want to delete notebook?"
                        onConfirm={() => onDelete()}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger block icon={<DeleteOutlined />}>
                            Delete notebook
                        </Button>
                    </Popconfirm>
                </Row>
            </div>
            <SingleFieldModal
                extra={{notebookId: props.app.selectedNotebookId}}
                textPlaceholder="Enter note title"
                title="Add new note"
                visible={modalAddNoteOpen}
                setVisible={setModalAddNoteOpen}
                onSubmit={submitAddNote}
            />
            <SingleFieldModal
                extra={{notebookId: props.app.selectedNotebookId}}
                textPlaceholder="Notebook title"
                title="Change notebook title"
                text={GlobalUtils.getValue(notebook, NoteUtils.props.notebook.title)}
                visible={modalRenameOpen}
                setVisible={setModalRenameOpen}
                onSubmit={submitRenameNotebook}
            />
        </div>
    );
};

NotebookDetails.propTypes = {
    addNewNote: PropTypes.func.isRequired,
    app: PropTypes.object.isRequired,
    deleteNotebook: PropTypes.func.isRequired,
    renameNotebook: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps, { addNewNote, deleteNotebook, renameNotebook })(NotebookDetails);
