import React from "react";

import { GlobalUtils } from "@utils";

import { Button, Popconfirm } from "antd";
import { SyncOutlined, DeleteOutlined } from "@ant-design/icons";
import ArticleAccessPicker from "##/ArticleAccessPicker";

const EditCollectionInfo = (props) => {
    const { onAccessChange, onRemoveCollection, onSync } = props;

    return (
        <div className="editCollectionCard__actions" style={{marginTop: 4}}>
            <span className="editCollectionCard__action">
                <Popconfirm 
                    placement="bottomRight"
                    title="This is cannot be undone. Article data will also be removed!" 
                    onConfirm={() => GlobalUtils.callIfFunction(onRemoveCollection)} 
                    okText="Yes" cancelText="No">
                    <Button danger icon={<DeleteOutlined />}>Remove collection</Button>
                </Popconfirm>
            </span>
            <span className="editCollectionCard__action">
                <Button onClick={() => GlobalUtils.callIfFunction(onSync)} icon={<SyncOutlined />}>Sync all articles</Button>
            </span>
            <span className="editCollectionCard__action">
                <ArticleAccessPicker onChange={(value) => GlobalUtils.callIfFunction(onAccessChange, value)} value="1" />
            </span>
        </div>
    );
};

export default EditCollectionInfo;