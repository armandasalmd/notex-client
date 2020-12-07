import React, { useState } from "react";
import { NoteUtils, GlobalUtils } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNewNote, deleteNotebook } from "@actions/noteActions";

import { Row, Button, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, PrinterOutlined, DeleteOutlined } from "@ant-design/icons";
import SingleFieldModal from "##/SingleFieldModal";

import "./NotebookDetails.less";

const NotebookDetails = props => {
    const [modalAddNoteOpen, setModalAddNoteOpen] = useState(false);
    const [addNoteLoading, setAddNoteLoading] = useState(false);

    const notebook = props.app.selectedNotebook;

    const submitAddNote = async (value, { notebookId }) => {
        setAddNoteLoading(true);
        await props.addNewNote(props.app.backpack, value, notebookId);
        setAddNoteLoading(false);
        setModalAddNoteOpen(false);
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
                <Row style={{ marginBottom: "18px", display: "inline-block" }}>
                    <h1 className="header header--medium">Notebook details</h1>
                    {/* <p className="text">
                        <span className="text--silent">Date created: </span>unavailable
                    </p> */}
                    {/* <p className="text">
                        <span className="text--silent">Access level: </span>unavailable
                    </p> */}
                    <p className="text">
                        <span className="text--silent">Note count: </span>
                        {GlobalUtils.getValue(notebook, NoteUtils.props.notebook.notes).length}
                    </p>
                    <p className="text">
                        <span className="text--silent">Owner: </span>
                        {GlobalUtils.getValue(notebook, NoteUtils.props.notebook.owner)}
                    </p>
                </Row>
                <Row className="notebook-details-actions">
                    <h1 className="header header--medium">Notebook actions</h1>
                    <Button type="primary" onClick={() => {
                        setModalAddNoteOpen(true);
                    }} ghost block icon={<PlusOutlined />}>
                        Add new note
                    </Button>
                    <Button block icon={<EditOutlined />}>
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
                loading={addNoteLoading}
                visible={modalAddNoteOpen}
                setVisible={setModalAddNoteOpen}
                onSubmit={submitAddNote}
            />
        </div>
    );
};

NotebookDetails.propTypes = {
    addNewNote: PropTypes.func.isRequired,
    app: PropTypes.object.isRequired,
    deleteNotebook: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps, { addNewNote, deleteNotebook })(NotebookDetails);
