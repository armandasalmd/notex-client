import React from "react";

import { Button, Select } from "antd";

const { Option } = Select;

const ControlAccess = () => {
    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value) {
        console.log(`Selected: ${value}`);
    }

    return (
        <>
            <div className="form__section">
                <h3 className="form__title">Control access level</h3>
                <div className="form__items">
                    <div>
                        <p>Access</p>
                        <Select defaultValue="public" onChange={handleChange} style={{ width: 200 }}>
                            <Option key="public">Public</Option>
                            <Option key="private">Private</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="form__section form__section--no-gap">
                <div className="form__items">
                    <div>
                        <p>Share with</p>
                        <Select mode="tags" placeholder="Please select" defaultValue={["a10", "c12"]} onChange={handleChange} style={{ minWidth: 400 }}>
                            {children}
                        </Select>
                    </div>
                </div>
            </div>
            <div className="form__section form__section--small-gap">
                <Button>Save changes</Button>
            </div>
        </>
    );
};

export default ControlAccess;
