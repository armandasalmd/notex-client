import React, { useState } from "react";
import { GlobalUtils, NoteUtils } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";
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

    const submitAddNote = async value => {
        setAddNoteLoading(true);
        await props.addNewNote(props.backpack, value, addNoteNotebookId);
        setAddNoteLoading(false);
        setModalAddNoteOpen(false);
    };

    const submitDelete = notebookId => {
        props.deleteNotebook(notebookId, props.app.selectedNotebookId);
    };

    const submitRename = (notebookId, newTitle) => {
        props.renameNotebook(notebookId, newTitle);
    };

    const handleClick = e => {
        props.setActiveNote(props.backpack, e.key);
        GlobalUtils.callIfFunction(props.tryCloseMenu);
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
                        Add note
                    </Button>
                    <Popconfirm
                        placement="bottomRight"
                        title="Are you sure you want to delete notebook?"
                        onConfirm={() => submitDelete(notebookId)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button id="delete" type="text">
                            Delete
                        </Button>
                    </Popconfirm>
                    <NotebookOptions notebook={notebook} submitRename={submitRename} />
                </div>
                <Menu.Divider />
                {noteMenuItems}
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
                {notebookMenuItems}
            </Menu>
            <SingleFieldModal
                textPlaceholder="Enter note title"
                title="Add new note"
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
    backpack: PropTypes.object.isRequired,
    deleteNotebook: PropTypes.func.isRequired,
    renameNotebook: PropTypes.func.isRequired,
    setActiveNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    app: state.app,
    backpack: state.app.backpack
});

export default connect(mapStateToProps, { addNewNote, deleteNotebook, renameNotebook, setActiveNote })(NotebookMenu);
