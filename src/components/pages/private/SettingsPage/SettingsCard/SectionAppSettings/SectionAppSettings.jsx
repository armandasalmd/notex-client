import React from "react";

import "./SectionAppSettings.less";
import { Button, Popconfirm, Select, Upload, Switch } from "antd";
import { DownloadOutlined, DeleteOutlined, UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const SectionAppSettings = props => {

    const deleteBackpack = () => {
        console.log("Delete backpack");
    };

    const changeLanguage = (option) => {
        console.log(`Change language: ${option}`);
    };

    const changeCloseMenuPreference = (checked) => {
        console.log(`changeCloseMenuPreference: ${checked}`);
    };

    return (
        <div className="section-app-settings">
            <p className="text text--form-label">Website language</p>
            <Select
                value="en"
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={changeLanguage}
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                <Option value="en">English</Option>
                <Option value="lt">Lithuanian</Option>
            </Select>

            <p className="text text--form-label">Export/import</p>
            <Button disabled icon={<DownloadOutlined />}>Export backpack</Button>
            <Upload>
                <Button disabled style={{marginLeft: 8}} icon={<UploadOutlined />}>Import backpack</Button>
            </Upload>

            <p className="text text--form-label">Clone backpack menu after item click</p>
            <Switch defaultChecked onChange={changeCloseMenuPreference} />

            <p className="text text--form-label">Dangerous actions</p>
            <Popconfirm
                placement="bottomRight"
                title="Are you sure you want to delete everything?"
                onConfirm={deleteBackpack}
                okText="Yes"
                cancelText="No"
            >
                <Button icon={<DeleteOutlined />} danger>Delete entire backpack</Button>
            </Popconfirm>
        </div>
    );
};

export default SectionAppSettings;
