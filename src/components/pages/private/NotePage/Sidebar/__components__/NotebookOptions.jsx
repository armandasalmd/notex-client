import React, { useState } from "react";

import { Button, Menu, Dropdown } from "antd";
import { EllipsisOutlined, PrinterOutlined, FontColorsOutlined } from "@ant-design/icons";
import SingleFieldModal from "##/SingleFieldModal";

const NotebookOptions = (props) => {
    const [modalRenameOpen, setModalRenameOpen] = useState(false);
    const [renameLoading, setRenameLoading] = useState(false);

    const handleMenuClick = e => {
        setModalRenameOpen(true);
    }

    const submitRename = (value, {notebookId}) => {
        setRenameLoading(true);
        console.log(value);
        console.log(notebookId);

        setTimeout(() => {
            setRenameLoading(false);
            setModalRenameOpen(false);
        }, 3000);
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="rename" icon={<FontColorsOutlined />}>
                Rename notebook
            </Menu.Item>
            <Menu.Item disabled key="print" icon={<PrinterOutlined />}>
                Print to PDF
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Dropdown overlay={menu} placement="bottomRight">
                <Button type="text" shape="circle" icon={<EllipsisOutlined />} />
            </Dropdown>
            <SingleFieldModal
                extra={{notebookId: props.notebookId}}
                textPlaceholder="Enter new name"
                title="Rename notebook"
                loading={renameLoading}
                visible={modalRenameOpen}
                setVisible={setModalRenameOpen}
                onSubmit={submitRename}
            />
        </>
    );
};

export default NotebookOptions;
