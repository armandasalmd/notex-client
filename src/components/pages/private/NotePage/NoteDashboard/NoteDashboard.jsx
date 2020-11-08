import React from "react";

import "./NoteDashboard.less";

import NoteSettings from "./NoteSettings";
import TabbedEditor from "./TabbedEditor";

import { PrinterOutlined, CloseOutlined, SaveOutlined, HighlightOutlined, ControlOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Empty, Row, Tabs } from "antd";

const { TabPane } = Tabs;

const NoteDashboard = (props) => {

    const EmptyContainer = () => (
        <div className="content-card flex-center">
            <Empty description={"Please select a note OR"}>
                <Button type="primary">Add new notebok</Button>
            </Empty>
        </div>
    );

    const isNoteSelected = () => {
        return !!props.data;
    }

    return (
        <div className="note-root">
            { isNoteSelected() && (
                <div className="content-card">
                    <Row className="note-row-toolbar" justify="space-between">
                        <Col className="note-row-toolbar-breadcrumb">
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    History notebook
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>Second World War</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                        <Col className="note-row-toolbar-actions">
                            <Button className="action-save" type="primary" shape="round" icon={<SaveOutlined />}>
                                Save
                            </Button>
                            <Button className="action-print" type="primary" ghost shape="circle" icon={<PrinterOutlined />}></Button>
                            <Button className="action-close" danger shape="circle" icon={<CloseOutlined />}></Button>
                        </Col>
                    </Row>
                    <Row className="note-row-title">
                        <h1 className="title">Second World War</h1>
                        <h2 className="sub-title sub-title__warn">
                            (Not saved)
                        </h2>
                    </Row>
                    <Row className="note-row-action-tabs">
                        <Tabs defaultActiveKey="1" style={{width: "100%", marginBottom: 0, overflow: "visible"}}>
                            <TabPane
                                tab={
                                    <span>
                                        <HighlightOutlined />
                                        Editor view
                                    </span>
                                }
                                key="1">
                                <TabbedEditor />
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <ControlOutlined />
                                        Note settings
                                    </span>
                                }
                                key="2">
                                <NoteSettings />
                            </TabPane>
                        </Tabs>
                    </Row>
                </div>
            )}
            {
                !isNoteSelected() && <EmptyContainer />
            }
        </div>
    );
};

export default NoteDashboard;
