import React from "react";

import "./TabbedEditor.less";
import MceEditor from "./MceEditor";

// import { Tabs } from "antd";
// const { TabPane } = Tabs;

class TabbedEditor extends React.Component {
    render() {
        return (
            <div className="tabbed-editor-root">
                {/* <Tabs className="full-width" size={"small"} defaultActiveKey="1" tabPosition={"top"}>
                    {[...Array.from({ length: 30 }, (v, i) => i)].map(i => (
                        <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
                            <MceEditor key={i} />
                        </TabPane>
                    ))}
                </Tabs> */}
                <MceEditor data={{}} />
            </div>
        );
    }
}

export default TabbedEditor;
