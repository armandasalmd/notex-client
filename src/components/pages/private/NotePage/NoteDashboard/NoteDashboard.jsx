import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { I18n } from "react-redux-i18n";
import copy from "copy-to-clipboard";
import classnames from "classnames";
import { useHotkeys } from "react-hotkeys-hook";

import { closeNotebook, saveChanges } from "@actions/appActions";
import { NoteUtils, GlobalUtils, MessageUtils } from "@utils";

import NoteContentEditor from "../NoteContentEditor";
import NoteContentRenderer from "../NoteContentRenderer";
import "./NoteDashboard.less";
import NoteSettings from "./NoteSettings";
import {
    ShareAltOutlined,
    CloseOutlined,
    SaveOutlined,
    HighlightOutlined,
    ControlOutlined,
    AlignLeftOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Col, Row, Tabs, Tooltip, Space, message } from "antd";

const { TabPane } = Tabs;

const NoteDashboard = () => {
    const tBase = "dashboard.noteCard";
    const dispatch = useDispatch();    
    const editorJsRef = useRef(null);
    
    const app = useSelector((state) => state.app);
    const note = app.selectedNote;
    const notebook = app.selectedNotebook;
    const changesSaved = !app.isDirty;

    useHotkeys("ctrl+s", (event) => {
        event.preventDefault();

        if (!changesSaved) {
            onSave(false);
        }
    }, {
        enableOnContentEditable: true
    }, [app, editorJsRef]);

    const copyUrl = () => {
        copy(window.location.href);
        message.success(I18n.t("common.urlCopy"));
    };

    const onSave = async (autoSave = false) => {
        try {
            const savedData = await editorJsRef.current.save();
            const noteId = GlobalUtils.getValue(note, NoteUtils.props.note.id);
            
            MessageUtils.handleDispatch(dispatch, saveChanges(noteId, savedData, autoSave));
        } catch {
            console.warn("Cannot save editor data");
        }
    };

    return (
        <div className="note-root">
            <div className="content-card">
                <Row className="note-row-toolbar" justify="space-between">
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                {GlobalUtils.getValue(notebook, NoteUtils.props.notebook.title)}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>{GlobalUtils.getValue(note, NoteUtils.props.note.title)}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col>
                        <Space>
                            <Button
                                loading={app.isSaving}
                                disabled={changesSaved}
                                onClick={() => onSave(false)}
                                className="action-save"
                                type="primary"
                                shape="round"
                                icon={<SaveOutlined />}
                            >
                                {I18n.t(`${tBase}.toolbar.save`)}
                            </Button>
                            <Tooltip placement="bottom" title={I18n.t(`${tBase}.toolbar.shareTooltip`)}>
                                <Button
                                    onClick={copyUrl}
                                    className="action-share"
                                    type="primary"
                                    ghost
                                    shape="circle"
                                    icon={<ShareAltOutlined />}
                                ></Button>
                            </Tooltip>
                            <Tooltip placement="bottom" title={I18n.t(`${tBase}.toolbar.closeNote`)}>
                                <Button
                                    className="action-close"
                                    danger
                                    shape="circle"
                                    icon={<CloseOutlined />}
                                    onClick={() => dispatch(closeNotebook())}
                                ></Button>
                            </Tooltip>
                        </Space>
                    </Col>
                </Row>
                <Row className="note-row-title">
                    <h1 className="title">{GlobalUtils.getValue(note, NoteUtils.props.note.title)}</h1>
                    <h2
                        className={classnames({
                            "sub-title sub-title__warn": true,
                            gone: changesSaved,
                        })}
                    >
                        {I18n.t(`${tBase}.toolbar.notSaved`)}
                    </h2>
                    <h2
                        className={classnames({
                            "sub-title sub-title__success": true,
                            gone: !(app.isAutosaved && changesSaved),
                        })}
                    >
                        {I18n.t(`${tBase}.toolbar.autoSaved`)}
                    </h2>
                </Row>
                <Row className="note-row-action-tabs">
                    <Tabs defaultActiveKey="1" style={{ width: "100%", marginBottom: 0, overflow: "visible" }}>
                        <TabPane
                            tab={
                                <span>
                                    <HighlightOutlined />
                                    {I18n.t(`${tBase}.tabs.editor`)}
                                </span>
                            }
                            key="1"
                        >
                            <NoteContentEditor ref={editorJsRef} onSave={onSave} />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <AlignLeftOutlined />
                                    {I18n.t(`${tBase}.tabs.read`)}
                                </span>
                            }
                            key="2"
                        >
                            <NoteContentRenderer />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <ControlOutlined />
                                    {I18n.t(`${tBase}.tabs.settings`)}
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

export default NoteDashboard;
