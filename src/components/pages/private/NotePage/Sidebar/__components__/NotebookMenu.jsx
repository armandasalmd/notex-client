import React from "react";

import FakeNotebooks from "./fakeData";

import { NotebookOptions } from ".";
import { Button, Menu, Popconfirm } from "antd";
import { FolderOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

class NotebookMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            current: ""
        };
    }

    confirm() {
        console.log("yes, delete");
    }

    handleClick(e) {
        this.setState({
            current: e.key
        });

        this.props.tryCloseMenu();
    }

    getNotebookMenuItem(notebook) {
        const noteMenuItems = notebook.notes.map(function (note) {
            return <Menu.Item key={note._id}>{note.title}</Menu.Item>;
        });

        return (
            <SubMenu icon={<FolderOutlined />} style={{fontSize: "1.15em"}} key={notebook._id} title={notebook.title}>
                <div className="notebook-actions">
                    <Button id="add" type="text">
                        Add note
                    </Button>
                    <Popconfirm
                        placement="bottomRight"
                        title="Are you sure you want to delete notebook?"
                        onConfirm={this.confirm}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button id="delete" type="text">
                            Delete
                        </Button>
                    </Popconfirm>
                    <NotebookOptions />
                </div>
                <Menu.Divider />
                {noteMenuItems}
            </SubMenu>
        );
    }

    render() {
        const notebookMenuItems = FakeNotebooks.notebooks.map(function (notebook) {
            return (
                <React.Fragment key={notebook._id}>
                    {this.getNotebookMenuItem(notebook)}
                    <Menu.Divider />
                </React.Fragment>
            );
        }.bind(this));

        return (
            <Menu
                theme="light"
                onClick={this.handleClick.bind(this)}
                style={{ width: "100%" }}
                defaultOpenKeys={["sub1"]}
                selectedKeys={[this.state.current]}
                mode="inline"
            >
                <Menu.Divider />
                {notebookMenuItems}
            </Menu>
        );
    }
}

export default NotebookMenu;
