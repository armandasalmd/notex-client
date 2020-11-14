import React, { useState } from "react";
import classnames from "classnames";

import { Button } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import SingleFieldModal from "##/SingleFieldModal";

const Header = props => {
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [addLoading, setAddLoading] = useState(false);

    const submitAdd = submitText => {
        setAddLoading(true);
        console.log(submitText);

        setTimeout(() => {
            setAddLoading(false);
            setModalAddOpen(false);
        }, 3000);
    };

    return (
        <div className="sidebar-header">
            <h1 className="header">Your backpack</h1>
            <div className="sidebar-actions">
                <Button onClick={() => setModalAddOpen(true)} shape="circle" icon={<PlusOutlined className="shade50" />}></Button>
                <Button
                    className={classnames({
                        "gone-big-screen": !props.isHamburgerMenu
                    })}
                    danger
                    shape="circle"
                    icon={<CloseOutlined />}
                    onClick={props.onClose}
                />
                <SingleFieldModal
                    textPlaceholder="Enter notebook title"
                    title="Add new notebook"
                    loading={addLoading}
                    visible={modalAddOpen}
                    setVisible={setModalAddOpen}
                    onSubmit={submitAdd}
                />
            </div>
        </div>
    );
};

export default Header;
