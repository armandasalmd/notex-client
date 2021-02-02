import React, { useState } from "react";
import { I18n } from "react-redux-i18n";
import copy from 'copy-to-clipboard';

import { NoteUtils } from "@utils";

import { Button, Select, Space, Tooltip, message } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

const { Option } = Select;

const ControlAccess = ({ selectedValue, noteOwner, onSubmit }) => {
    const tBase = "dashboard.noteCard.settings.accessLevel";
    const [access, setAccess] = useState(selectedValue);

    const handleChange = () => {
        console.log("handle change");
    };

    const copyUrl = () => {
        copy(window.location.href);
        message.success(I18n.t("common.urlCopy"));
    };

    return (
        <>
            <div className="form__section">
                <h3 className="form__title">{I18n.t(`${tBase}.title`)}</h3>
                <div className="form__items">
                    <div>
                        <p>{I18n.t(`${tBase}.typeLabel`)}</p>
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
                            <Tooltip placement="bottom" title={I18n.t(`${tBase}.shareTooltip`)}>
                                <Button icon={<ShareAltOutlined />} onClick={copyUrl} />
                            </Tooltip>
                        </Space>
                    </div>
                </div>
            </div>
            <div className="form__section form__section--no-gap">
                <div className="form__items">
                    <div style={{ width: "100%" }}>
                        <p>{I18n.t(`${tBase}.shareLabel`)}</p>
                        <Select disabled mode="tags" placeholder={I18n.t("common.select")} defaultValue={[noteOwner]} onChange={handleChange} style={{ width: "100%" }}>
                            <Option>{noteOwner}</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="form__section form__section--small-gap">
                <Button onClick={() => onSubmit(access)}>{I18n.t(`${tBase}.save`)}</Button>
            </div>
        </>
    );
};

export default ControlAccess;
