import React, { useState } from "react";
import { I18n } from "react-redux-i18n";
import { useDispatch, useSelector } from "react-redux";

import { NoteUtils, GlobalUtils, MessageUtils } from "@utils";
import { deleteNotebook, renameNotebook, setAddNoteOpen } from "@actions/noteActions";

import { Row, Button, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, PrinterOutlined, DeleteOutlined } from "@ant-design/icons";
import SingleFieldModal from "##/SingleFieldModal";

import "./NotebookDetails.less";

const NotebookDetails = props => {
    const dispatch = useDispatch();
    const textUnavailable = I18n.t("common.unavailable");
    const tBase = "dashboard.detailsCard";
    
    const app = useSelector((state) => state.app);

    const notebook = app.selectedNotebook;
    const note = app.selectedNote;
    const noteAccessLevel = GlobalUtils.getValue(note, NoteUtils.props.note.accessLevel, textUnavailable);

    let noteLastChanged = GlobalUtils.getValue(note, NoteUtils.props.note.lastChanged, textUnavailable);
    
    if (noteLastChanged !== textUnavailable) {
        noteLastChanged = GlobalUtils.toDisplayDate(new Date(noteLastChanged));
    }

    const [modalRenameOpen, setModalRenameOpen] = useState(false);

    const submitRenameNotebook = (value, { notebookId }) => {
        MessageUtils.handleDispatch(dispatch, renameNotebook(notebookId, value));
        setModalRenameOpen(false);
    };

    const onDelete = () => MessageUtils.handleDispatch(dispatch, deleteNotebook(app.selectedNotebookId, app.selectedNotebookId));

    return (
        <div className="notebook-details-root">
            <div className="content-card notebook-details">
                <Row style={{ marginTop: "24px", marginBottom: "18px", flexFlow: "column", alignItems: "center" }}>
                    <img className="title-image" src="/images/undraw/undraw_notebook.svg" alt="Notebook" />
                    <h1>{GlobalUtils.getValue(notebook, NoteUtils.props.notebook.title)}</h1>
                </Row>
                <Row style={{ width: "100%", marginBottom: "18px", display: "inline-block" }}>
                    <h1 className="header header--medium">{I18n.t(`${tBase}.currentNote`)}</h1>
                    <p className="text text--light">
                        <span className="text--silent">{I18n.t(`${tBase}.lastModified`)}</span>{noteLastChanged}
                    </p>
                    <p className="text text--light">
                        <span className="text--silent">{I18n.t(`${tBase}.accessLevel`)}</span>{noteAccessLevel}
                    </p>
                </Row>
                <Row style={{ width: "100%", marginBottom: "18px", display: "inline-block" }}>
                    <h1 className="header header--medium">{I18n.t(`${tBase}.notebookDetails`)}</h1>
                    <p className="text text--light">
                        <span className="text--silent">{I18n.t(`${tBase}.noteCount`)}</span>
                        {GlobalUtils.getValue(notebook, NoteUtils.props.notebook.notes).length}
                    </p>
                    <p className="text text--light">
                        <span className="text--silent">{I18n.t(`${tBase}.owner`)}</span>
                        {GlobalUtils.getValue(notebook, NoteUtils.props.notebook.owner)}
                    </p>
                </Row>
                <Row className="notebook-details-actions">
                    <h1 className="header header--medium">{I18n.t(`${tBase}.notebookActions`)}</h1>
                    <Button type="primary" onClick={() => dispatch(setAddNoteOpen(true, app.selectedNotebookId))} ghost block icon={<PlusOutlined />}>
                        {I18n.t(`${tBase}.buttons.add`)}
                    </Button>
                    <Button block onClick={() => setModalRenameOpen(true)} icon={<EditOutlined />}>
                        {I18n.t(`${tBase}.buttons.rename`)}
                    </Button>
                    <Button disabled block icon={<PrinterOutlined />}>
                        {I18n.t(`${tBase}.buttons.export`)}
                    </Button>
                    <Popconfirm
                        placement="bottomRight"
                        title={I18n.t("confirm.deleteNotebookTitle")}
                        onConfirm={() => onDelete()}
                        okText={I18n.t("common.yes")}
                        cancelText={I18n.t("common.no")}
                    >
                        <Button danger block icon={<DeleteOutlined />}>
                            {I18n.t(`${tBase}.buttons.delete`)}
                        </Button>
                    </Popconfirm>
                </Row>
            </div>
            <SingleFieldModal
                extra={{notebookId: app.selectedNotebookId}}
                title={I18n.t("modals.renameNote.title")}
                textPlaceholder={I18n.t("modals.renameNote.placeholder")}
                text={GlobalUtils.getValue(notebook, NoteUtils.props.notebook.title)}
                visible={modalRenameOpen}
                setVisible={setModalRenameOpen}
                onSubmit={submitRenameNotebook}
            />
        </div>
    );
};

export default NotebookDetails;
