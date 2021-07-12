import React, { useEffect } from "react";
import { I18n } from "react-redux-i18n";
import { useDispatch, useSelector } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";

import { GlobalUtils, RouteUtils, HistoryUtils, MessageUtils } from "@utils";
import { fetchNotebooks, setActiveNote } from "@actions/appActions";
import { addNewNotebook, addNewNote, setAddNotebookOpen, setAddNoteOpen } from "@actions/noteActions";

import "./NotePage.less";
import Sidebar from "./Sidebar/Sidebar";
import NoteDashboard from "./NoteDashboard/NoteDashboard";
import NotebookDetails from "./NotebookDetails/NotebookDetails";
import SingleFieldModal from "##/SingleFieldModal";

import { Row, Col, Empty, Button } from "antd";

const NotePage = () => {
    const dispatch = useDispatch();
    const query = HistoryUtils.useQuery();
    
    const app = useSelector((state) => state.app);

    useHotkeys("ctrl+a", (event) => {
        if (!app.modalState.addNotebookOpen && !app.modalState.addNoteOpen) {
            event.preventDefault();

            if (GlobalUtils.isEmpty(app.selectedNotebookId)) {
                dispatch(setAddNotebookOpen(true));
            } else {
                dispatch(setAddNoteOpen(true, app.selectedNotebookId));
            }
        }
    }, {}, [app.selectedNotebookId]);

    const { addNotebookOpen, addNotebookLoading } = app.modalState;
    const { addNoteOpen, addNoteLoading } = app.modalState;

    useEffect(() => {
        if (!app.backpack.isFetched) {
            MessageUtils.handleDispatch(dispatch, fetchNotebooks());
        } else {
            const noteId = query.get(RouteUtils.app.private.note.queryNames.note);

            if (!noteId && GlobalUtils.hasLength(app.selectedNoteId)) {
                window.history.pushState(RouteUtils.app.private.note.link, "", `?${RouteUtils.app.private.note.queryNames.note}=${app.selectedNoteId}`);
            } else if (!app.wasEverSelected && noteId) {
                MessageUtils.handleDispatch(dispatch, setActiveNote(app.backpack, noteId));
            }
        }
    }, [app, query, dispatch]);

    const submitAddNote = (submitText) => MessageUtils.handleDispatch(dispatch, addNewNote(app.backpack, submitText, app.modalState.addNotebookOpenId));
    const submitAddNotebook = (submitText) => MessageUtils.handleDispatch(dispatch, addNewNotebook(app.backpack, submitText));

    const EmptyContainer = () => (
        <div className="content-card flex-center">
            <Empty description={I18n.t("dashboard.introCard.selectNoteText")}>
                <Button
                    type="primary"
                    onClick={() => dispatch(setAddNotebookOpen(true))}
                >
                    {I18n.t("dashboard.introCard.addNotebookButton")}
                </Button>
            </Empty>
        </div>
    );

    return (
        <div className="note-root">
            <Row>
                <Col className="note-sidebar" xs={24} sm={24} md={24} lg={6} xl={5}>
                    <Sidebar />
                </Col>
                <Col className="note-main scroll-container" xs={24} sm={24} md={24} lg={18} xl={19}>
                    {app.backpack.isFetched && app.isSelected ? (
                        <Row style={{ justifyContent: "space-evenly" }} align="top" gutter={[18, 18]}>
                            <Col xs={24} sm={24} md={15} lg={24} xl={17}>
                                <NoteDashboard />
                            </Col>
                            <Col xs={24} sm={24} md={9} lg={24} xl={7}>
                                <NotebookDetails />
                            </Col>
                        </Row>
                    ) : (
                        <Row>
                            <EmptyContainer />
                        </Row>
                    )}
                    <SingleFieldModal
                        title={I18n.t("modals.addNotebook.title")}
                        textPlaceholder={I18n.t("modals.addNotebook.placeholder")}
                        loading={addNotebookLoading}
                        visible={addNotebookOpen}
                        setVisible={(visible) => dispatch(setAddNotebookOpen(visible))}
                        onSubmit={submitAddNotebook}
                    />
                    <SingleFieldModal
                        title={I18n.t("modals.addNote.title")}
                        textPlaceholder={I18n.t("modals.addNote.placeholder")}
                        loading={addNoteLoading}
                        visible={addNoteOpen}
                        setVisible={(visible) => dispatch(setAddNoteOpen(visible, ""))}
                        onSubmit={submitAddNote}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default NotePage;
