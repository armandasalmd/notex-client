import React from "react";

import { GlobalUtils } from "@utils";

import "./EditCollectionCard.less";
import { Button, Popconfirm } from "antd";
import { SyncOutlined, DeleteOutlined } from "@ant-design/icons";
import ArticleAccessPicker from "##/ArticleAccessPicker";

const EditCollectionCard = () => {
    const onAccessChange = (value) => {
        console.log(value);
    };

    const onRemoveCollection = () => {
        console.log("Delete collection");
    };

    return (
        <div className="card editCollectionCard">
            <div className="card__header card__header--separatorDashed">
                <h3 className="title title--light">Collection settings</h3>
                <div className="editCollectionCard__details">
                    Details
                </div>
                <div className="editCollectionCard__actions">
                    <span className="editCollectionCard__action">
                        <ArticleAccessPicker onChange={onAccessChange} value="1" />
                    </span>
                    <span className="editCollectionCard__action">
                        <Button icon={<SyncOutlined />}>Sync all articles</Button>
                    </span>
                    <span className="editCollectionCard__action">
                        <Popconfirm 
                            title="This is cannot be undone. Article data will also be removed!" 
                            onConfirm={() => GlobalUtils.callIfFunction(onRemoveCollection)} 
                            okText="Yes" cancelText="No">
                            <Button danger icon={<DeleteOutlined />}>Remove collection</Button>
                        </Popconfirm>
                    </span>
                </div>
            </div>
            <div className="card__content">
                <h3 className="title title--light">Articles in collection</h3>
            </div>
        </div>
    );
};

export default EditCollectionCard;