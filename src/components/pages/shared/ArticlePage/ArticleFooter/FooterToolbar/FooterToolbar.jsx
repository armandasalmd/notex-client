import React from "react";
import classnames from "classnames";

import { Space } from "antd";
import { Voting } from "../../__components__";

const FooterToolbar = (props) => {
    const { className, tabs, selectedTab, setSelectedTab } = props;

    const tabElements = !tabs ? [] : Object.values(tabs).map((tab) => {
        let classes = classnames("ghostButton", selectedTab === tab ? "ghostButton--selected" : "ghostButton--silent");

        return <button key={tab.reduxKey} className={classes} onClick={setSelectedTab.bind(this, tab)}>{tab.buttonText}</button>
    });

    return (
        <div className={className}>
            <Space>
                {tabElements}
            </Space>
            <Voting />
        </div>
    );
};

export default FooterToolbar;
