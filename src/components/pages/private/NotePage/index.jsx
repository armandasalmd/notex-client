import React from "react";

import Sidebar from "./Sidebar";
import NoteDashboard from "./NoteDashboard";
import NotebookDetails from "./NotebookDetails";
import "./index.less";

import { Row, Col } from "antd";


const NotePage = () => {
    return (
        <div className="note-root">
            <Row>
                <Col className="note-sidebar" xs={24} sm={24} md={24} lg={5} xl={4}>
                    <Sidebar />
                </Col>
                <Col className="note-main" xs={24} sm={24} md={24} lg={19} xl={20}>
                    <Row style={{ justifyContent: "space-evenly" }} align="top" gutter={[18]}>
                        <Col xs={24} sm={24} md={15} lg={18}>
                            <NoteDashboard />
                        </Col>
                        <Col xs={24} sm={24} md={9} lg={6}>
                            <NotebookDetails />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default NotePage;
