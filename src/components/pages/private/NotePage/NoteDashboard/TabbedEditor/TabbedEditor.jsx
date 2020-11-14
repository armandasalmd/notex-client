import React from "react";

import "./TabbedEditor.less";
import MceEditor from "./MceEditor";

// import { Tabs } from "antd";
// const { TabPane } = Tabs;

class TabbedEditor extends React.Component {
    render() {
        return (
            <div className="tabbed-editor-root">
                <MceEditor data={{}} />
            </div>
        );
    }
}

export default TabbedEditor;
