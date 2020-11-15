import React from "react";
import { NoteUtils, GlobalUtils } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Row, Button } from "antd";
import { PlusOutlined, EditOutlined, PrinterOutlined, DeleteOutlined } from "@ant-design/icons";

import "./NotebookDetails.less";

const NotebookDetails = props => {
    const notebook = props.app.selectedNotebook;

    return (
        <div className="notebook-details-root">
            <div className="content-card notebook-details">
                <Row style={{ marginTop: "24px", marginBottom: "18px", flexFlow: "column", alignItems: "center" }}>
                    <img className="title-image" src="/images/undraw/undraw_notebook.svg" alt="Notebook" />
                    <h1>{GlobalUtils.getValue(notebook, NoteUtils.props.notebook.title)}</h1>
                </Row>
                <Row style={{ marginBottom: "18px", display: "inline-block" }}>
                    <h1 className="header header--medium">Notebook details</h1>
                    {/* <p className="text">
                        <span className="text--silent">Date created: </span>unavailable
                    </p> */}
                    {/* <p className="text">
                        <span className="text--silent">Access level: </span>unavailable
                    </p> */}
                    <p className="text">
                        <span className="text--silent">Note count: </span>{GlobalUtils.getValue(notebook, NoteUtils.props.notebook.notes).length}
                    </p>
                    <p className="text">
                        <span className="text--silent">Owner: </span>{GlobalUtils.getValue(notebook, NoteUtils.props.notebook.owner)}
                    </p>
                </Row>
                <Row className="notebook-details-actions">
                    <h1 className="header header--medium">Notebook actions</h1>
                    <Button type="primary" ghost block icon={<PlusOutlined />}>
                        Add new note
                    </Button>
                    <Button block icon={<EditOutlined />}>
                        Rename notebook
                    </Button>
                    <Button disabled block icon={<PrinterOutlined />}>
                        Export all notes to PDF
                    </Button>
                    <Button danger block icon={<DeleteOutlined />}>
                        Delete notebook
                    </Button>
                </Row>
            </div>
        </div>
    );
};

NotebookDetails.propTypes = {
    app: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps, {})(NotebookDetails);
