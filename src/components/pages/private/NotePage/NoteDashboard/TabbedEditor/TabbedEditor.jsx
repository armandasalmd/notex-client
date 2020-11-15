import React from "react";

import "./TabbedEditor.less";
import MceEditor from "./MceEditor";

const TabbedEditor = () => {
    return (
        <div className="tabbed-editor-root">
            <MceEditor />
        </div>
    );
};

export default TabbedEditor;
