import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Input, Button, Tooltip } from "antd";
import { CalendarOutlined, InfoCircleOutlined } from "@ant-design/icons";

const ChangeName = ({noteName, onSubmit}) => {
    const { t } = useTranslation(),
        tBase = "dashboard.noteCard.settings.renameNote";

    const [name, setName] = useState(noteName);

    return (
        <div className="form__section">
            <h3 className="form__title">{t(`${tBase}.title`)}</h3>
            <div className="form__items">
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    prefix={<CalendarOutlined />}
                    suffix={
                        <Tooltip title={t(`${tBase}.tooltip`)}>
                            <InfoCircleOutlined color="red" />
                        </Tooltip>
                    }/>
                <Button onClick={() => onSubmit(name)}>{t(`${tBase}.save`)}</Button>
            </div>
        </div>
    );
}

export default ChangeName;