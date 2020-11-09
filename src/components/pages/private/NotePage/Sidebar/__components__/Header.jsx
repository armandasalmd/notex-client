import React from "react";
import classnames from "classnames";

import { Button } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

const Header = props => {
    return (
        <div className="sidebar-header">
            <h1 className="header">Your backpack</h1>
            <div className="sidebar-actions">
                <Button shape="circle" icon={<PlusOutlined className="shade50" />}></Button>
                <Button
                    className={classnames({
                        "gone-big-screen": !props.isHamburgerMenu
                    })}
                    danger
                    shape="circle"
                    icon={<CloseOutlined />}
                    onClick={props.onClose}
                />
            </div>
        </div>
    );
};

export default Header;
