import React from "react";
import { useTranslation } from "react-i18next";
import copy from 'copy-to-clipboard';
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { closeNotebook, saveChanges } from "@actions/appActions";
import { NoteUtils, GlobalUtils } from "@utils";

import "./NoteDashboard.less";
import NoteSettings from "./NoteSettings";
import TabbedEditor from "./TabbedEditor";
import ReadMode from "./ReadMode";

import { ShareAltOutlined, CloseOutlined, SaveOutlined, HighlightOutlined, ControlOutlined, AlignLeftOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Row, Tabs, Tooltip, message } from "antd";

const { TabPane } = Tabs;

const NoteDashboard = props => {
    const { t } = useTranslation(),
        tBase = "dashboard.noteCard";

    const note = props.app.selectedNote;
    const notebook = props.app.selectedNotebook;

    const changesSaved = () => {
        return props.app.editorText === GlobalUtils.getValue(note, NoteUtils.props.note.text);
    };

    const copyUrl = () => {
        copy(window.location.href);
        message.success(t("common.urlCopy"));
    };

    const onSave = () => {
        props.saveChanges(GlobalUtils.getValue(note, NoteUtils.props.note.id), props.app.editorText);
    };

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
                        <Button
                            loading={props.app.isSaving}
                            disabled={changesSaved()}
                            onClick={onSave}
                            className="action-save"
                            type="primary"
                            shape="round"
                            icon={<SaveOutlined />}
                        >
                            {t(`${tBase}.toolbar.save`)}
                        </Button>
                        <Tooltip placement="bottom" title={t(`${tBase}.toolbar.shareTooltip`)}>
                            <Button onClick={copyUrl} className="action-share" type="primary" ghost shape="circle" icon={<ShareAltOutlined />}></Button>
                        </Tooltip>
                        <Tooltip placement="bottom" title={t(`${tBase}.toolbar.closeNote`)}>
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
                    <h2
                        className={classnames({
                            "sub-title sub-title__warn": true,
                            gone: changesSaved()
                        })}
                    >
                        {t(`${tBase}.toolbar.notSaved`)}
                    </h2>
                    <h2
                        className={classnames({
                            "sub-title sub-title__success": true,
                            gone: !(props.app.isAutosaved && changesSaved())
                        })}
                    >
                        {t(`${tBase}.toolbar.autoSaved`)}
                    </h2>
                </Row>
                <Row className="note-row-action-tabs">
                    <Tabs defaultActiveKey="1" style={{ width: "100%", marginBottom: 0, overflow: "visible" }}>
                        <TabPane
                            tab={
                                <span>
                                    <HighlightOutlined />
                                    {t(`${tBase}.tabs.editor`)}
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
                                    {t(`${tBase}.tabs.read`)}
                                </span>
                            }
                            key="2"
                        >
                            <ReadMode innerHtml={props.app.editorText || GlobalUtils.getValue(note, NoteUtils.props.note.text)} />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <ControlOutlined />
                                    {t(`${tBase}.tabs.settings`)}
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
    saveChanges: PropTypes.func.isRequired,
    app: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps, { closeNotebook, saveChanges })(NoteDashboard);
