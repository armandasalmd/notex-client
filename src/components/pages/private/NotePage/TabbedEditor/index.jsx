import React from "react";

import "./index.less";
import Editor from "./Editor";

import { Row, Tabs } from "antd";

const { TabPane } = Tabs;

const TabbedEditor = () => {
    return (
        <div className="tabbed-editor-root">
            <Tabs size={"small"} defaultActiveKey="1" tabPosition={"top"} style={{ height: 220, width: "100%" }}>
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
