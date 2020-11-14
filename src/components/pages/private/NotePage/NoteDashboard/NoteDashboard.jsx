import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeNotebook } from "@actions/appActions";

import "./NoteDashboard.less";
import NoteSettings from "./NoteSettings";
import TabbedEditor from "./TabbedEditor";
import ReadMode from "./ReadMode";

import { ShareAltOutlined, CloseOutlined, SaveOutlined, HighlightOutlined, ControlOutlined, AlignLeftOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Row, Tabs, Tooltip } from "antd";

const { TabPane } = Tabs;

const NoteDashboard = props => {
    return (
        <div className="note-root">
            <div className="content-card">
                <Row className="note-row-toolbar" justify="space-between">
                    <Col className="note-row-toolbar-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item>History notebook</Breadcrumb.Item>
                            <Breadcrumb.Item>Second World War</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col className="note-row-toolbar-actions">
                        <Button loading className="action-save" type="primary" shape="round" icon={<SaveOutlined />}>
                            Save
                        </Button>
                        <Tooltip placement="bottom" title="Click to copy sharable link">
                            <Button className="action-share" type="primary" ghost shape="circle" icon={<ShareAltOutlined />}></Button>
                        </Tooltip>
                        <Tooltip placement="bottom" title="Close note">
                            <Button className="action-close" danger shape="circle" icon={<CloseOutlined />} onClick={() => props.closeNotebook()} ></Button>
                        </Tooltip>
                    </Col>
                </Row>
                <Row className="note-row-title">
                    <h1 className="title">Second World War</h1>
                    <h2 className="sub-title sub-title__warn">(Not saved)</h2>
                </Row>
                <Row className="note-row-action-tabs">
                    <Tabs defaultActiveKey="1" style={{ width: "100%", marginBottom: 0, overflow: "visible" }}>
                        <TabPane
                            tab={
                                <span>
                                    <HighlightOutlined />
                                    Editor view
                                </span>
                            }
                            key="1"
                        >
                            <TabbedEditor />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <AlignLeftOutlined />
                                    Read view
                                </span>
                            }
                            key="2"
                        >
                            <ReadMode innerHtml="<h1>This is my note text</h1>It works" />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <ControlOutlined />
                                    Note settings
                                </span>
                            }
                            key="3"
                        >
                            <NoteSettings />
                        </TabPane>
                    </Tabs>
                </Row>
            </div>
        </div>
    );
};

NoteDashboard.propTypes = {
    closeNotebook: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { closeNotebook })(NoteDashboard);
