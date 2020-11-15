import React, { useState } from "react";

import { Input, Button, Tooltip } from "antd";
import { CalendarOutlined, InfoCircleOutlined } from "@ant-design/icons";

const ChangeName = ({noteName, onSubmit}) => {
    const [name, setName] = useState(noteName);

    return (
        <div className="form__section">
            <h3 className="form__title">Change note name</h3>
            <div className="form__items">
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    prefix={<CalendarOutlined />}
                    suffix={
                        <Tooltip title="Change the name of selected note">
                            <InfoCircleOutlined color="red" />
                        </Tooltip>
                    }/>
                <Button onClick={() => onSubmit(name)}>Save</Button>
            </div>
        </div>
    );
}

export default ChangeName;