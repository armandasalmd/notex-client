import React from "react";
import { useHistory } from "react-router-dom";

import { GlobalUtils, RouteVariables } from "@utils";

import { Button, Space, Popconfirm } from "antd";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";

const SummaryTableActions = (props) => {
    const history = useHistory();
    const { identifier, onDelete } = props;
    
    const onEdit = (collectionIdentifier) => {
        const route = RouteVariables.app.private.editArticle;
        const link = route.link.replace(":" + route.paramNames.collectionIdentifier, collectionIdentifier).replace("/:" + route.paramNames.articleIdentifier, "");
        history.push(link);
    };

    return (
        <Space>
            <Button onClick={() => onEdit(identifier)} icon={<EditFilled style={{color: "#828282"}} />}>Edit</Button>
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