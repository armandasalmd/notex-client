import React, { useState } from "react";

import FakeNotebooks from "./fakeData";

import { GlobalUtils } from "@utils";

import { NotebookOptions } from ".";
import { Button, Menu, Popconfirm } from "antd";
import { FolderOutlined } from "@ant-design/icons";
import SingleFieldModal from "##/SingleFieldModal";

const { SubMenu } = Menu;

const NotebookMenu = (props) => {
    const [current, setCurrent] = useState("");

    const [modalAddNoteOpen, setModalAddNoteOpen] = useState(false);
    const [addNoteLoading, setAddNoteLoading] = useState(false);

    const submitDelete = () => {
        console.log("yes, delete");
    }

    const submitAddNote = (value, {notebookId}) => {
        setAddNoteLoading(true);
        console.log(value);
        console.log(notebookId);

        setTimeout(() => {
            setAddNoteLoading(false);
            setModalAddNoteOpen(false);
        }, 3000);
    };

    const handleClick = e => {
        setCurrent(e.key);
        GlobalUtils.callIfFunction(props.tryCloseMenu);
    };

    const getNotebookMenuItem = (notebook) => {
        const noteMenuItems = notebook.notes.map(function (note) {
            return <Menu.Item key={note._id}>{note.title}</Menu.Item>;
        });

        return (
            <SubMenu icon={<FolderOutlined />} style={{fontSize: "1.15em"}} key={notebook._id} title={notebook.title}>
                <div className="notebook-actions">
                    <Button id="add" type="text" onClick={() => setModalAddNoteOpen(true)}>
                        Add note
                    </Button>
                    <Popconfirm
                        placement="bottomRight"
                        title="Are you sure you want to delete notebook?"
                        onConfirm={submitDelete}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button id="delete" type="text">
                            Delete
                        </Button>
                    </Popconfirm>
                    <NotebookOptions notebookId={"11111112"}/>
                </div>
                <Menu.Divider />
                {noteMenuItems}
            </SubMenu>
        );
    };

    const notebookMenuItems = FakeNotebooks.notebooks.map(function (notebook) {
        return (
            <React.Fragment key={notebook._id}>
                {getNotebookMenuItem(notebook)}
                <Menu.Divider />
            </React.Fragment>
        );
    });

    return (
        <>
            <Menu
                theme="light"
                onClick={handleClick}
                style={{ width: "100%" }}
                defaultOpenKeys={["sub1"]}
                selectedKeys={[current]}
                mode="inline"
            >
                <Menu.Divider />
                {notebookMenuItems}
            </Menu>
            <SingleFieldModal
                extra={{notebookId: "1111111"}}
                textPlaceholder="Enter note title"
                title="Add new note for ..."
                loading={addNoteLoading}
                visible={modalAddNoteOpen}
                setVisible={setModalAddNoteOpen}
                onSubmit={submitAddNote}
            />
        </>
    );
}

export default NotebookMenu;
