import React from "react";

import "./SectionAppSettings.less";
import { Button, Popconfirm, Select, Upload, Switch, Space } from "antd";
import { DownloadOutlined, DeleteOutlined, UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const SectionAppSettings = props => {
    const deleteBackpack = () => {
        console.log("Delete backpack");
    };

    const changeLanguage = option => {
        console.log(`Change language: ${option}`);
    };

    const changeCloseMenuPreference = checked => {
        console.log(`changeCloseMenuPreference: ${checked}`);
    };

    return (
        <div className="section-app-settings">
            <section>
                <p className="text text--form-label">Website language</p>
                <form autoComplete="off">
                    <Select
                        defaultValue="en"
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select language"
                        optionFilterProp="children"
                        onChange={changeLanguage}
                    >
                        <Option value="en">English</Option>
                        <Option value="lt">Lithuanian</Option>
                    </Select>
                </form>
            </section>
            <section>
                <p className="text text--form-label">Export/import backpack</p>
                <Space>
                    <Button disabled icon={<DownloadOutlined />}>
                        Export data
                    </Button>
                    <Upload>
                        <Button disabled icon={<UploadOutlined />}>
                            Import data
                        </Button>
                    </Upload>
                </Space>
            </section>
            <section>
                <p className="text text--form-label">Clone backpack menu after item click</p>
                <Switch defaultChecked onChange={changeCloseMenuPreference} />
            </section>
            <section>
                <p className="text text--form-label">Dangerous actions</p>
                <Popconfirm
                    placement="bottomRight"
                    title="Are you sure you want to delete everything?"
                    onConfirm={deleteBackpack}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button icon={<DeleteOutlined />} danger>
                        Delete entire backpack
                    </Button>
                </Popconfirm>
            </section>
        </div>
    );
};

export default SectionAppSettings;
