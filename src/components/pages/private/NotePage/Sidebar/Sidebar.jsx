import React from "react";
import classnames from "classnames";

import "./Sidebar.less";
import { NotebookOptions } from "./__components__";
import { Button, Menu } from "antd";
import { PlusOutlined, FolderOutlined, CloseOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            current: "1"
        };
    }

    handleClick = e => {
        this.setState({
            current: e.key
        });

        this.tryCloseMenu();
    };

    tryCloseMenu() {
        if (typeof this.props.closeMenu === "function") {
            this.props.closeMenu();
        }
    }

    render() {
        return (
            <div
                className={classnames({
                    "sidebar-root": true,
                    "gone-small-screen": !this.props.hamburgerMenu
                })}
            >
                <div className="sidebar-header">
                    <h1 className="header">Your backpack</h1>
                    <div className="sidebar-actions">
                        <Button shape="circle" icon={<PlusOutlined className="shade50" />}></Button>
                        <Button
                            className={classnames({
                                "gone-big-screen": !this.props.hamburgerMenu
                            })}
                            danger
                            shape="circle"
                            icon={<CloseOutlined />}
                            onClick={this.tryCloseMenu.bind(this)}
                        />
                    </div>
                </div>
                <Menu
                    theme="light"
                    onClick={this.handleClick}
                    style={{ width: "100%" }}
                    defaultOpenKeys={["sub1"]}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    <Menu.Divider />

                    <SubMenu icon={<FolderOutlined />} key="sub1" title="History notebook">
                        <div className="notebook-actions">
                            <Button id="add" type="text">
                                Add note
                            </Button>
                            <Button id="delete" type="text">
                                Delete
                            </Button>
                            <NotebookOptions />
                        </div>
                        <Menu.Divider />
                        <Menu.Item key="1">Second World War</Menu.Item>
                        <Menu.Item key="2">Revolution age</Menu.Item>
                        <Menu.Item key="3">Modern age</Menu.Item>
                        <Menu.Item key="4">Europe education in XX</Menu.Item>
                    </SubMenu>
                    <Menu.Divider />

                    <SubMenu icon={<FolderOutlined />} key="sub3" title="Kithen notes">
                        <div className="notebook-actions">
                            <Button id="add" type="text">
                                Add note
                            </Button>
                            <Button id="delete" type="text">
                                Delete
                            </Button>
                            <NotebookOptions />
                        </div>
                        <Menu.Divider />
                        <Menu.Item key="9">Products in the fridge</Menu.Item>
                        <Menu.Item key="10">Recepies</Menu.Item>
                        <Menu.Item key="11">Good articles</Menu.Item>
                    </SubMenu>
                    <Menu.Divider />

                    <SubMenu icon={<FolderOutlined />} key="sub2" title="My todo list">
                        <div className="notebook-actions">
                            <Button id="add" type="text">
                                Add note
                            </Button>
                            <Button id="delete" type="text">
                                Delete
                            </Button>
                            <NotebookOptions />
                        </div>
                        <Menu.Divider />
                        <Menu.Item key="5">Todo 1</Menu.Item>
                        <Menu.Item key="6">Todo 2</Menu.Item>
                        <Menu.Item key="7">Todo 3</Menu.Item>
                        <Menu.Item key="8">Todo 4</Menu.Item>
                    </SubMenu>
                    <Menu.Divider />
                </Menu>
            </div>
        );
    }
}

export default Sidebar;
