import React, { useState } from "react";
import { I18n } from "react-redux-i18n";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { GlobalUtils, NoteUtils, MessageUtils } from "@utils";
import { setActiveNote } from "@actions/appActions";
import { addNewNote, deleteNotebook, renameNotebook } from "@actions/noteActions";

import { NotebookOptions } from ".";
import { Button, Menu, Popconfirm } from "antd";
import { FolderOutlined } from "@ant-design/icons";
import SingleFieldModal from "##/SingleFieldModal";

const { SubMenu } = Menu;

const NotebookMenu = props => {
    const [modalAddNoteOpen, setModalAddNoteOpen] = useState(false);
    const [addNoteNotebookId, setAddNoteNotebookId] = useState(null);
    const [addNoteLoading, setAddNoteLoading] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState([]);
    const [menuWasPreopened, setMenuWasPreopened] = useState(false);

    const submitAddNote = value => {
        setAddNoteLoading(true);
        MessageUtils.handleDispatched(props.addNewNote(props.backpack, value, addNoteNotebookId));
        setAddNoteLoading(false);
        setModalAddNoteOpen(false);
    };

    const submitDelete = notebookId => {
        MessageUtils.handleDispatched(props.deleteNotebook(notebookId, props.app.selectedNotebookId));
    };

    const submitRename = (notebookId, newTitle) => {
        MessageUtils.handleDispatched(props.renameNotebook(notebookId, newTitle));
    };

    const handleClick = e => {
        props.setActiveNote(props.backpack, e.key);

        if (props.autoClose) {
            GlobalUtils.callIfFunction(props.tryCloseMenu);
        }
    };

    const getNotebookMenuItem = notebook => {
        const noteMenuItems = notebook.notes.map(function (note) {
            return <Menu.Item key={note._id}>{note.title}</Menu.Item>;
        });

        const notebookId = GlobalUtils.getValue(notebook, NoteUtils.props.notebook.id),
            notebookTitle = GlobalUtils.getValue(notebook, NoteUtils.props.notebook.title);

        return (
            <SubMenu icon={<FolderOutlined />} style={{ fontSize: "1.15em" }} key={notebookId} title={notebookTitle}>
                <div className="notebook-actions">
                    <Button
                        id="add"
                        type="text"
                        onClick={() => {
                            setModalAddNoteOpen(true);
                            setAddNoteNotebookId(notebookId);
                        }}
                    >
                        {I18n.t("menu.addNote")}
                    </Button>
                    <Popconfirm
                        placement="bottomRight"
                        title={I18n.t("confirm.deleteNotebookTitle")}
                        onConfirm={() => submitDelete(notebookId)}
                        okText={I18n.t("common.yes")}
                        cancelText={I18n.t("common.no")}
                    >
                        <Button id="delete" type="text">
                            {I18n.t("menu.deleteNotebook")}
                        </Button>
                    </Popconfirm>
                    <NotebookOptions notebook={notebook} submitRename={submitRename} />
                </div>
                <Menu.Divider />
                {noteMenuItems}
                {!GlobalUtils.hasLength(noteMenuItems) && (
                    <div className="notebookEmpty">
                        <p className="notebookEmpty__text">{I18n.t("menu.noNotes")}</p>
                    </div>
                )}
            </SubMenu>
        );
    };

    const data = props.backpack.notebooks || [];
    const notebookMenuItems = data.map(function (notebook) {
        return (
            <React.Fragment key={notebook._id}>
                {getNotebookMenuItem(notebook)}
                <Menu.Divider />
            </React.Fragment>
        );
    });

    const selectedNotebookId = NoteUtils.findNoteParentId(props.app.selectedNoteId, props.backpack);

    if (selectedNotebookId && !openSubMenus.includes(selectedNotebookId) && !menuWasPreopened) {
        // opening preselected note item submenu
        setOpenSubMenus([selectedNotebookId]);
        setMenuWasPreopened(true);
    }

    return (
        <>
            <Menu
                theme="light"
                onClick={handleClick}
                style={{ width: "100%" }}
                openKeys={openSubMenus}
                onOpenChange={openKeys => {
                    setOpenSubMenus(openKeys);
                }}
                selectedKeys={[props.app.selectedNoteId]}
                mode="inline"
            >
                <Menu.Divider />
                { notebookMenuItems }
            </Menu>
            <SingleFieldModal
                title={I18n.t("modals.addNote.title")}
                textPlaceholder={I18n.t("modals.addNote.placeholder")}
                loading={addNoteLoading}
                visible={modalAddNoteOpen}
                setVisible={setModalAddNoteOpen}
                onSubmit={submitAddNote}
            />
        </>
    );
};

NotebookMenu.propTypes = {
    addNewNote: PropTypes.func.isRequired,
    app: PropTypes.object.isRequired,
    autoClose: PropTypes.bool.isRequired,
    backpack: PropTypes.object.isRequired,
    deleteNotebook: PropTypes.func.isRequired,
    renameNotebook: PropTypes.func.isRequired,
    setActiveNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    app: state.app,
    backpack: state.app.backpack,
    autoClose: state.settings.appSettings.closeAfterSelect
});

export default connect(mapStateToProps, { addNewNote, deleteNotebook, renameNotebook, setActiveNote })(NotebookMenu);
