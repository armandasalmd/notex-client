import React from "react";

import { Input, Button, Tooltip } from "antd";
import { CalendarOutlined, InfoCircleOutlined } from "@ant-design/icons";

const ChangeName = () => {

    return (
        <div className="form__section">
            <h3 className="form__title">Change note name</h3>
            <div className="form__items">
                <Input
                    value="trigonometry equations"
                    prefix={<CalendarOutlined />}
                    suffix={
                        <Tooltip title="Change the name of selected note">
                            <InfoCircleOutlined color="red" />
                        </Tooltip>
                    }/>
                <Button>Save</Button>
            </div>
        </div>
    );
}

export default ChangeName;