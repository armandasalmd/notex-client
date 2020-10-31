import React from "react";

import { Row, Button } from "antd";
import { PlusOutlined, EditOutlined, PrinterOutlined, DeleteOutlined } from "@ant-design/icons";

import "./NotebookDetails.less";

const NotebookDetails = () => {
    return (
        <div className="notebook-details-root">
            <div className="content-card notebook-details">
                <Row style={{marginTop: "24px", marginBottom: "18px", flexFlow: "column", alignItems: "center"}}>
                    <img className="title-image" src="/images/undraw/undraw_notebook.svg" alt="Notebook" />
                    <h1>Math homework</h1>
                </Row>
                <Row style={{marginBottom: "18px", display: "inline-block"}}>
                    <h1 className="header header--medium">Notebook details</h1>
                    <p className="text"><span className="text--silent">Date created:</span> 2020-06-22</p>
                    <p className="text"><span className="text--silent">Access level:</span> public</p>
                    <p className="text"><span className="text--silent">Note count:</span> 3</p>
                    <p className="text"><span className="text--silent">Owner:</span> armandas.bark@gmail.com</p>
                </Row>
                <Row className="notebook-details-actions">
                    <h1 className="header header--medium">Notebook actions</h1>
                    <Button type="primary" ghost block icon={<PlusOutlined />}>Add new note</Button>
                    <Button block icon={<EditOutlined />}>Rename notebook</Button>
                    <Button block icon={<PrinterOutlined />}>Export all notes to PDF</Button>
                    <Button danger block icon={<DeleteOutlined />}>Delete notebook</Button>
                </Row>
            </div>
        </div>
    );
};

export default NotebookDetails;
