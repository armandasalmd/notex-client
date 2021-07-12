import React, { useState } from "react";
import { I18n } from "react-redux-i18n";
import { useDispatch, useSelector } from "react-redux";

import { GlobalUtils, NoteUtils, MessageUtils } from "@utils";
import { setActiveNote } from "@actions/appActions";
import { addNewNote, deleteNotebook, renameNotebook, setAddNoteOpen } from "@actions/noteActions";

import { NotebookOptions } from ".";
import { Button, Menu, Popconfirm } from "antd";
import { FolderOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const NotebookMenu = props => {
    const dispatch = useDispatch();

    const addNoteNotebookId = useSelector((state) => state.app.modalState.addNotebookOpenId);
    const autoClose = useSelector((state) => state.settings.appSettings.closeAfterSelect);
    const backpack = useSelector((state) => state.app.backpack);
    const selectedNoteId = useSelector((state) => state.app.selectedNoteId);
    const selectedNotebookId = useSelector((state) => state.app.selectedNotebookId);

    const [openSubMenus, setOpenSubMenus] = useState([]);
    const [menuWasPreopened, setMenuWasPreopened] = useState(false);

    const submitAddNote = value => MessageUtils.handleDispatch(dispatch, addNewNote(backpack, value, addNoteNotebookId));
    const submitDelete = notebookId => MessageUtils.handleDispatch(dispatch, deleteNotebook(notebookId, selectedNotebookId));
    const submitRename = (notebookId, newTitle) => MessageUtils.handleDispatch(dispatch, renameNotebook(notebookId, newTitle));

    const handleClick = e => {
        dispatch(setActiveNote(backpack, e.key));

        if (autoClose) {
            GlobalUtils.callIfFunction(props.tryCloseMenu);
        }
    };

    const getNotebookMenuItem = notebook => {
        const noteMenuItems = notebook.notes.map(function (note) {
            return <Menu.Item key={note._id}>{note.title}</Menu.Item>;
        });

        const notebookId = GlobalUtils.getValue(notebook, NoteUtils.props.notebook.id);
        const notebookTitle = GlobalUtils.getValue(notebook, NoteUtils.props.notebook.title);

        return (
            <SubMenu icon={<FolderOutlined />} style={{ fontSize: "1.15em" }} key={notebookId} title={notebookTitle}>
                <div className="notebook-actions">
                    <Button
                        id="add"
                        type="text"
                        onClick={() => dispatch(setAddNoteOpen(true, notebookId))}
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

    const data = backpack.notebooks || [];
    const notebookMenuItems = data.map(function (notebook) {
        return (
            <React.Fragment key={notebook._id}>
                {getNotebookMenuItem(notebook)}
                <Menu.Divider />
            </React.Fragment>
        );
    });

    const selectedNotebookIdFound = NoteUtils.findNoteParentId(selectedNoteId, backpack);

    if (selectedNotebookIdFound && !openSubMenus.includes(selectedNotebookIdFound) && !menuWasPreopened) {
        // opening preselected note item submenu
        setOpenSubMenus([selectedNotebookIdFound]);
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
                selectedKeys={[selectedNoteId]}
                mode="inline"
            >
                <Menu.Divider />
                { notebookMenuItems }
            </Menu>
        </>
    );
};

export default NotebookMenu;
