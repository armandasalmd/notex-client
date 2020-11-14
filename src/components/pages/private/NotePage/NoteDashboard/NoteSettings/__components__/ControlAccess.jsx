import React from "react";
import useClippy from 'use-clippy';

import { Button, Select, Space, Tooltip, message } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

const { Option } = Select;

const ControlAccess = () => {
    const [, setClipboard] = useClippy();

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const handleChange = value => {
        console.log(`Selected: ${value}`);
    };

    const copyUrl = () => {
        setClipboard("https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard");
        message.success("URL was copied");
    };

    return (
        <>
            <div className="form__section">
                <h3 className="form__title">Control access level</h3>
                <div className="form__items">
                    <div>
                        <p>Access type</p>
                        <Space>
                            <Select defaultValue="public" onChange={handleChange} style={{ width: 200 }}>
                                <Option key="public">Public</Option>
                                <Option key="private">Private</Option>
                            </Select>
                            <Tooltip placement="bottom" title="Click to copy sharable link">
                                <Button icon={<ShareAltOutlined />} onClick={copyUrl} />
                            </Tooltip>
                        </Space>
                    </div>
                </div>
            </div>
            <div className="form__section form__section--no-gap">
                <div className="form__items">
                    <div style={{ width: "100%" }}>
                        <p>Share with (when private)</p>
                        <Select
                            mode="tags"
                            placeholder="Please select"
                            defaultValue={["a10", "c12"]}
                            onChange={handleChange}
                            style={{ width: "100%" }}
                        >
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
