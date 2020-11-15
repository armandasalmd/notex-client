import React from "react";
import classnames from "classnames";
import { NoteUtils, GlobalUtils } from "@utils";

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
    const note = props.app.selectedNote;
    const notebook = props.app.selectedNotebook;

    return (
        <div className="note-root">
            <div className="content-card">
                <Row className="note-row-toolbar" justify="space-between">
                    <Col className="note-row-toolbar-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item>{GlobalUtils.getValue(notebook, NoteUtils.props.notebook.title)}</Breadcrumb.Item>
                            <Breadcrumb.Item>{GlobalUtils.getValue(note, NoteUtils.props.note.title)}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col className="note-row-toolbar-actions">
                        <Button loading={props.app.isSaving} className="action-save" type="primary" shape="round" icon={<SaveOutlined />}>
                            Save
                        </Button>
                        <Tooltip placement="bottom" title="Click to copy sharable link">
                            <Button className="action-share" type="primary" ghost shape="circle" icon={<ShareAltOutlined />}></Button>
                        </Tooltip>
                        <Tooltip placement="bottom" title="Close note">
                            <Button
                                className="action-close"
                                danger
                                shape="circle"
                                icon={<CloseOutlined />}
                                onClick={() => props.closeNotebook()}
                            ></Button>
                        </Tooltip>
                    </Col>
                </Row>
                <Row className="note-row-title">
                    <h1 className="title">{GlobalUtils.getValue(note, NoteUtils.props.note.title)}</h1>
                    <h2 className={classnames({
                        "sub-title sub-title__warn": true,
                        "gone": props.app.changesSaved
                    })}>(Not saved)</h2>
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
                            <ReadMode innerHtml={GlobalUtils.getValue(note, NoteUtils.props.note.text)} />
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
    closeNotebook: PropTypes.func.isRequired,
    app: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps, { closeNotebook })(NoteDashboard);
