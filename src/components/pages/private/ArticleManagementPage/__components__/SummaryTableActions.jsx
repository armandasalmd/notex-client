import React from "react";

import { GlobalUtils } from "@utils";

import { Button, Space, Popconfirm } from "antd";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";

const SummaryTableActions = (props) => {
    const { identifier, onEdit, onDelete } = props;

    return (
        <Space>
            <Button onClick={() => GlobalUtils.callIfFunction(onEdit, identifier)} icon={<EditFilled style={{color: "#828282"}} />}>Edit</Button>
            <Popconfirm 
                title="Are you sure to delete this item?" 
                onConfirm={() => GlobalUtils.callIfFunction(onDelete, identifier)} 
                okText="Yes" cancelText="No">
                <Button danger icon={<DeleteOutlined />}>Remove</Button>
            </Popconfirm>
        </Space>
    );
};

export default SummaryTableActions;