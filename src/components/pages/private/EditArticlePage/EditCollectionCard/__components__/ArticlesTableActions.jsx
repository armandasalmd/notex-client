import React from "react";

import { GlobalUtils } from "@utils";

import { Button, Space, Popconfirm, Tooltip } from "antd";
import { EditFilled, DeleteOutlined, SyncOutlined } from "@ant-design/icons";

const ArticlesTableActions = (props) => {
    return (
        <Space>
            <Tooltip title="Edit">
                <Button
                    onClick={() => GlobalUtils.callIfFunction(props.onEdit, props.identifier)}
                    icon={<EditFilled style={{ color: "#828282" }} />} />
            </Tooltip>
            <Tooltip title="Sync with source note">
                <Button
                    onClick={() => GlobalUtils.callIfFunction(props.onSync, props.identifier)}
                    icon={<SyncOutlined style={{ color: "#828282" }} />} />
            </Tooltip>
            <Popconfirm
                placement="left"
                title="Are you sure to remove this item?"
                onConfirm={() => GlobalUtils.callIfFunction(props.onDelete, props.identifier)}
                okText="Yes"
                cancelText="No"
            >
                <Button danger icon={<DeleteOutlined />} />
            </Popconfirm>
        </Space>
    );
};

export default ArticlesTableActions;
