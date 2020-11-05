import React from "react";

import "./TabbedEditor.less";

import Editor from "./Editor";

import { Tabs } from "antd";

const { TabPane } = Tabs;

const TabbedEditor = () => {
    return (
        <div className="tabbed-editor-root">
            <Tabs className="full-width" size={"small"} defaultActiveKey="1" tabPosition={"top"}>
                {[...Array.from({ length: 30 }, (v, i) => i)].map(i => (
                    <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
                        <Editor key={i} />
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
};

export default TabbedEditor;
