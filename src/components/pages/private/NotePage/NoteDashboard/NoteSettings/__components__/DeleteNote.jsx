import React from "react";
import { useTranslation } from "react-i18next";

import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteNote = ({onSubmit}) => {
    const { t } = useTranslation(),
        tBase = "dashboard.noteCard.settings.dangerous";

    return (
        <div className="form__section">
            <h3 className="form__title">{t(`${tBase}.title`)}</h3>
            <div className="form__items">
                <Button onClick={onSubmit} danger icon={<DeleteOutlined />}>
                    {t(`${tBase}.deleteNote`)}
                </Button>
            </div>
        </div>
    );
};

export default DeleteNote;