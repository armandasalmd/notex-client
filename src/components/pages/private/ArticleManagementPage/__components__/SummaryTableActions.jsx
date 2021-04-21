import React from "react";

import { Button, Space, Popconfirm } from "antd";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";

const SummaryTableActions = (props) => {
    const { identifier } = props;

    const onRemove = () => {
        console.log("Remove", identifier);
    };

    return (
        <Space>
            <Button icon={<EditFilled style={{color: "#828282"}} />}>Edit</Button>
            <Popconfirm title="Are you sure to delete this item?" onConfirm={onRemove} okText="Yes" cancelText="No">
                <Button danger icon={<DeleteOutlined />}>Remove</Button>
            </Popconfirm>
        </Space>
    );
};

export default SummaryTableActions;