import React from "react";
import { I18n } from "react-redux-i18n";

import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteNote = ({onSubmit}) => {
    const tBase = "dashboard.noteCard.settings.dangerous";

    return (
        <div className="form__section">
            <h3 className="form__title">{I18n.t(`${tBase}.title`)}</h3>
            <div className="form__items">
                <Button onClick={onSubmit} danger icon={<DeleteOutlined />}>
                    {I18n.t(`${tBase}.deleteNote`)}
                </Button>
            </div>
        </div>
    );
};

export default DeleteNote;