import React from "react";
import { useTranslation } from "react-i18next";

import "./SectionAppSettings.less";
import { Button, Popconfirm, Select, Upload, Switch, Space } from "antd";
import { DownloadOutlined, DeleteOutlined, UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const SectionAppSettings = props => {
    const { t } = useTranslation();
    const tBase = "settings.sections.appSettings";

    const deleteBackpack = () => {
        console.log("Delete backpack");
    };

    const changeLanguage = option => {
        console.log(`Change language: ${option}`);
    };

    const changeCloseMenuPreference = checked => {
        console.log(`changeCloseMenuPreference: ${checked}`);
    };

    const changeAutoSavePreference = checked => {
        console.log(`changeAutoSavePreference: ${checked}`);
    };

    return (
        <div className="section-app-settings">
            <section>
                <p className="text text--form-label">{t(tBase + ".labels.language")}</p>
                <form autoComplete="off">
                    <Select
                        value={props.data.preferredLanguage}
                        showSearch
                        style={{ width: 200 }}
                        placeholder={t(tBase + ".labels.language")}
                        optionFilterProp="children"
                        onChange={changeLanguage}
                    >
                        <Option value="en">English</Option>
                        <Option value="lt">Lithuanian</Option>
                    </Select>
                </form>
            </section>
            <section>
                <p className="text text--form-label">{t(tBase + ".labels.exportImport")}</p>
                <Space>
                    <Button disabled icon={<DownloadOutlined />}>
                        {t(tBase + ".exportButton")}
                    </Button>
                    <Upload>
                        <Button disabled icon={<UploadOutlined />}>
                            {t(tBase + ".importButton")}
                        </Button>
                    </Upload>
                </Space>
            </section>
            <section>
                <p className="text text--form-label">{t(tBase + ".labels.closeAfterClick")}</p>
                <Switch checked={props.data.closeAfterSelect} onChange={changeCloseMenuPreference} />
                <p className="text text--form-label">{t(tBase + ".labels.autoSave")}</p>
                <Switch checked={props.data.autoSave} onChange={changeAutoSavePreference} />
            </section>
            <section>
                <p className="text text--form-label">{t(tBase + ".labels.actions")}</p>
                <Popconfirm
                    placement="bottomRight"
                    title={t(tBase + ".confirm.deleteAll")}
                    onConfirm={deleteBackpack}
                    okText={t("common.yes")}
                    cancelText={t("common.no")}
                >
                    <Button icon={<DeleteOutlined />} danger>
                        {t(tBase + ".deleteBackpackButton")}
                    </Button>
                </Popconfirm>
            </section>
        </div>
    );
};

export default SectionAppSettings;
