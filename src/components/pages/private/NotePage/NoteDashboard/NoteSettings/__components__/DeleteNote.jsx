import React from "react";

import { Button } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

const DeleteNote = ({onSubmit}) => {
    return (
        <div className="form__section">
            <h3 className="form__title">Dangerous actions</h3>
            <div className="form__items">
                <Button onClick={onSubmit} danger icon={<DeleteOutlined />}>
                    Delete this note
                </Button>
            </div>
        </div>
    );
}

export default DeleteNote;