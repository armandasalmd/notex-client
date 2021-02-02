import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NoteUtils, GlobalUtils } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNewNote, deleteNotebook, renameNotebook } from "@actions/noteActions";

import { Row, Button, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, PrinterOutlined, DeleteOutlined } from "@ant-design/icons";
import SingleFieldModal from "##/SingleFieldModal";

import "./NotebookDetails.less";

const NotebookDetails = props => {
    const { t } = useTranslation(),
        textUnavailable = t("common.unavailable"),
        tBase = "dashboard.detailsCard";

    const notebook = props.app.selectedNotebook;
    const note = props.app.selectedNote;
    let noteAccessLevel = GlobalUtils.getValue(note, NoteUtils.props.note.accessLevel, textUnavailable);
    let noteLastChanged = GlobalUtils.getValue(note, NoteUtils.props.note.lastChanged, textUnavailable);
    
    if (noteLastChanged !== textUnavailable) {
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
                    <h1 className="header header--medium">{t(`${tBase}.currentNote`)}</h1>
                    <p className="text text--light">
                        <span className="text--silent">{t(`${tBase}.lastModified`)}</span>{noteLastChanged}
                    </p>
                    <p className="text text--light">
                        <span className="text--silent">{t(`${tBase}.accessLevel`)}</span>{noteAccessLevel}
                    </p>
                </Row>
                <Row style={{ width: "100%", marginBottom: "18px", display: "inline-block" }}>
                    <h1 className="header header--medium">{t(`${tBase}.notebookDetails`)}</h1>
                    <p className="text text--light">
                        <span className="text--silent">{t(`${tBase}.noteCount`)}</span>
                        {GlobalUtils.getValue(notebook, NoteUtils.props.notebook.notes).length}
                    </p>
                    <p className="text text--light">
                        <span className="text--silent">{t(`${tBase}.owner`)}</span>
                        {GlobalUtils.getValue(notebook, NoteUtils.props.notebook.owner)}
                    </p>
                </Row>
                <Row className="notebook-details-actions">
                    <h1 className="header header--medium">{t(`${tBase}.notebookActions`)}</h1>
                    <Button type="primary" onClick={() => setModalAddNoteOpen(true)} ghost block icon={<PlusOutlined />}>
                        {t(`${tBase}.buttons.add`)}
                    </Button>
                    <Button block onClick={() => setModalRenameOpen(true)} icon={<EditOutlined />}>
                        {t(`${tBase}.buttons.rename`)}
                    </Button>
                    <Button disabled block icon={<PrinterOutlined />}>
                        {t(`${tBase}.buttons.export`)}
                    </Button>
                    <Popconfirm
                        placement="bottomRight"
                        title={t("confirm.deleteNotebookTitle")}
                        onConfirm={() => onDelete()}
                        okText={t("common.yes")}
                        cancelText={t("common.no")}
                    >
                        <Button danger block icon={<DeleteOutlined />}>
                            {t(`${tBase}.buttons.delete`)}
                        </Button>
                    </Popconfirm>
                </Row>
            </div>
            <SingleFieldModal
                extra={{notebookId: props.app.selectedNotebookId}}
                title={t("modals.addNote.title")}
                textPlaceholder={t("modals.addNote.placeholder")}
                visible={modalAddNoteOpen}
                setVisible={setModalAddNoteOpen}
                onSubmit={submitAddNote}
            />
            <SingleFieldModal
                extra={{notebookId: props.app.selectedNotebookId}}
                title={t("modals.renameNote.title")}
                textPlaceholder={t("modals.renameNote.placeholder")}
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
