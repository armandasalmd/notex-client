import React, { useState } from "react";
import { I18n } from "react-redux-i18n";

import { Input, Button, Tooltip } from "antd";
import { CalendarOutlined, InfoCircleOutlined } from "@ant-design/icons";

const ChangeName = ({noteName, onSubmit}) => {
    const tBase = "dashboard.noteCard.settings.renameNote";
    const [name, setName] = useState(noteName);

    return (
        <div className="form__section">
            <h3 className="form__title">{I18n.t(`${tBase}.title`)}</h3>
            <div className="form__items">
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    prefix={<CalendarOutlined />}
                    suffix={
                        <Tooltip title={I18n.t(`${tBase}.tooltip`)}>
                            <InfoCircleOutlined color="red" />
                        </Tooltip>
                    }/>
                <Button onClick={() => onSubmit(name)}>{I18n.t(`${tBase}.save`)}</Button>
            </div>
        </div>
    );
}

export default ChangeName;