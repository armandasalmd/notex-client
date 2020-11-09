import React from "react";

import "./NotePage.less";

import Sidebar from "./Sidebar/Sidebar";
import NoteDashboard from "./NoteDashboard/NoteDashboard";
import NotebookDetails from "./NotebookDetails/NotebookDetails";

import { Row, Col } from "antd";

const NotePage = () => {
    return (
        <div className="note-root">
            <Row>
                <Col className="note-sidebar" xs={24} sm={24} md={24} lg={6} xl={5}>
                    <Sidebar data={{}} />
                </Col>
                <Col className="note-main" xs={24} sm={24} md={24} lg={18} xl={19}>
                    <Row style={{ justifyContent: "space-evenly" }} align="top" gutter={[18, 18]}>
                        <Col xs={24} sm={24} md={15} lg={24} xl={17}>
                            <NoteDashboard data={{}} />
                        </Col>
                        <Col xs={24} sm={24} md={9} lg={24} xl={7}>
                            <NotebookDetails />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default NotePage;
