import React, { useState } from "react";
import { I18n } from "react-redux-i18n";

import { GlobalUtils, NoteUtils } from "@utils";

import { Button, Menu, Dropdown } from "antd";
import { EllipsisOutlined, PrinterOutlined, FontColorsOutlined } from "@ant-design/icons";
import SingleFieldModal from "##/SingleFieldModal";

const NotebookOptions = (props) => {
    const [modalRenameOpen, setModalRenameOpen] = useState(false);

    const handleMenuClick = e => {
        setModalRenameOpen(true);
    };

    const submitRename = (value, {notebookId}) => {
        GlobalUtils.callIfFunction(props.submitRename, notebookId, value);
        setModalRenameOpen(false);
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="rename" icon={<FontColorsOutlined />}>
                {I18n.t("menu.renameNotebook")}
            </Menu.Item>
            <Menu.Item disabled key="print" icon={<PrinterOutlined />}>
                {I18n.t("menu.printPdf")}
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Dropdown overlay={menu} placement="bottomRight">
                <Button type="text" shape="circle" icon={<EllipsisOutlined />} />
            </Dropdown>
            <SingleFieldModal
                extra={{notebookId: GlobalUtils.getValue(props.notebook, NoteUtils.props.notebook.id)}}
                textPlaceholder={I18n.t("modals.renameNote.placeholder")}
                onSubmit={submitRename}
                setVisible={setModalRenameOpen}
                title={I18n.t("modals.renameNote.title")}
                text={GlobalUtils.getValue(props.notebook, NoteUtils.props.notebook.title)}
                visible={modalRenameOpen}
            />
        </>
    );
};

export default NotebookOptions;
