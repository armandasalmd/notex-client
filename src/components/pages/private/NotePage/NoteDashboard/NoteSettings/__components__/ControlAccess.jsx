import React, { useState } from "react";
import useClippy from "use-clippy";
import { NoteUtils } from "@utils";

import { Button, Select, Space, Tooltip, message } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

const { Option } = Select;

const ControlAccess = ({ selectedValue, noteOwner, onSubmit }) => {
    const [, setClipboard] = useClippy();
    const [access, setAccess] = useState(selectedValue);

    const handleChange = () => {
        console.log("handle change");
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
                            <Select disabled value={access} onChange={setAccess} style={{ width: 200 }}>
                                {NoteUtils.accessLevelOptions.map(function (option) {
                                    return (
                                        <Option key={option.value} value={option.value}>
                                            {option.name}
                                        </Option>
                                    );
                                })}
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
                        <Select disabled mode="tags" placeholder="Please select" defaultValue={[noteOwner]} onChange={handleChange} style={{ width: "100%" }}>
                            <Option>{noteOwner}</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="form__section form__section--small-gap">
                <Button onClick={() => onSubmit(access)}>Save changes</Button>
            </div>
        </>
    );
};

export default ControlAccess;
