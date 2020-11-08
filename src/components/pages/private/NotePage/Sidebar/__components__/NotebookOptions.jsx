import React from "react";

import { Button, Menu, Dropdown, message } from "antd";
import { EllipsisOutlined, PrinterOutlined, FontColorsOutlined } from "@ant-design/icons";

const NotebookOptions = () => {
    function handleMenuClick(e) {
        message.info("Click on menu item.");
        console.log("click", e);
    }

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
        <Dropdown overlay={menu} placement="bottomRight">
            <Button type="text" shape="circle" icon={<EllipsisOutlined />} />
        </Dropdown>
    );
};

export default NotebookOptions;
