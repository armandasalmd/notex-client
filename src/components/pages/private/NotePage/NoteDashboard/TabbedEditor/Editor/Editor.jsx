import React from "react";

import "./Editor.less";

import { Spin } from 'antd';

const Editor = (props) => {
    const EditorContainer = props.mceEditor ? props.mceEditor : <p>Error. Editor cannot be showed</p>;
    const SpinnerContainer = (
        <div className="spinner-container">
            <Spin size="large" />
        </div>
    );

    return (
        <div className="editor-root">
            { props.isLoading && SpinnerContainer }
            <div style={{visibility: props.isLoading ? "hidden" : ""}}>
                { EditorContainer }
            </div>
        </div>
    );
};

export default Editor;
