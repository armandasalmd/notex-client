import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RouteUtils } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchNotebooks, setActiveNote } from "@actions/appActions";

import "./NotePage.less";
import Sidebar from "./Sidebar/Sidebar";
import NoteDashboard from "./NoteDashboard/NoteDashboard";
import NotebookDetails from "./NotebookDetails/NotebookDetails";
import SingleFieldModal from "##/SingleFieldModal";

import { Row, Col, Empty, Button } from "antd";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const NotePage = props => {
    const query = useQuery();
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [addLoading, setAddLoading] = useState(false);

    useEffect(() => {
        if (!props.app.backpack.isFetched) {
            props.fetchNotebooks();
        } else {
            const noteId = query.get(RouteUtils.app.private.note.queryNames.note);
            
            if (!props.app.wasEverSelected && noteId) {
                props.setActiveNote(props.app.backpack, noteId);
            }
        }
    }, [props, query]);

    const submitAdd = submitText => {
        setAddLoading(true);
        console.log(submitText);

        setTimeout(() => {
            setAddLoading(false);
            setModalAddOpen(false);
        }, 3000);
    };

    const EmptyContainer = () => (
        <div className="content-card flex-center">
            <Empty description={"Please select a note OR"}>
                <Button
                    type="primary"
                    onClick={() => {
                        setModalAddOpen(true);
                    }}
                >
                    Add new notebok
                </Button>
            </Empty>
        </div>
    );

    return (
        <div className="note-root">
            <Row>
                <Col className="note-sidebar" xs={24} sm={24} md={24} lg={6} xl={5}>
                    <Sidebar data={{}} />
                </Col>
                <Col className="note-main" xs={24} sm={24} md={24} lg={18} xl={19}>
                    {props.app.backpack.isFetched && props.app.isSelected ? (
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
                        textPlaceholder="Enter notebook title"
                        title="Add new notebook"
                        loading={addLoading}
                        visible={modalAddOpen}
                        setVisible={setModalAddOpen}
                        onSubmit={submitAdd}
                    />
                </Col>
            </Row>
        </div>
    );
};

NotePage.propTypes = {
    fetchNotebooks: PropTypes.func.isRequired,
    setActiveNote: PropTypes.func.isRequired,
    app: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps, { fetchNotebooks, setActiveNote })(NotePage);
