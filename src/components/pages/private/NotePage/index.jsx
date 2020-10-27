import React from "react";

import Sidebar from "./Sidebar";
import Editor from "./Editor";
import NotebookDetails from "./NotebookDetails";
import { Row, Col } from "antd";
import "./index.less";

const NotePage = () => {
    return (
        <div className="note-root">
            <Row>
                <Col className="note-sidebar" xs={24} sm={7} md={6} lg={5} xl={4}>
                    <Sidebar />
                </Col>
                <Col className="note-main" xs={24} sm={17} md={18} lg={19} xl={20}>
                    <Row style={{justifyContent: "space-evenly"}} align="top">
                        <Col xs={22} sm={22} md={16} lg={18}>
                            <Editor />
                        </Col>
                        <Col xs={22} sm={22} md={6} lg={4}>
                            <NotebookDetails />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default NotePage;
