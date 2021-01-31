import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Constants } from "@utils";
import {
    changeAutoSave,
    changeCloseOnClick,
    changeLanguage,
    deleteBackpack,
} from "@actions/settingsActions";

import "./SectionAppSettings.less";
import { Button, Popconfirm, Select, Upload, Switch, Space } from "antd";
import {
    DownloadOutlined,
    DeleteOutlined,
    UploadOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const SectionAppSettings = (props) => {
    const { t } = useTranslation();
    const tBase = "settings.sections.appSettings";

    const deleteBackpack = () => {
        props.deleteBackpack();
    };

    const changeLanguage = (option) => {
        props.changeLanguage(option);
    };

    const changeCloseMenuPreference = (checked) => {
        props.changeCloseOnClick(checked);
    };

    const changeAutoSavePreference = (checked) => {
        props.changeAutoSave(checked);
    };

    return (
        <div className="section-app-settings">
            <section>
                <p className="text text--form-label">
                    {t(tBase + ".labels.language")}
                </p>
                <form autoComplete="off">
                    <Select
                        value={props.data.preferredLanguage}
                        showSearch
                        style={{ width: 200 }}
                        placeholder={t(tBase + ".labels.language")}
                        optionFilterProp="children"
                        onChange={changeLanguage}
                    >
                        {Object.values(Constants.languages).map((language) => {
                            return <Option key={language.value} value={language.value}>{language.name}</Option>
                        })}
                    </Select>
                </form>
            </section>
            <section>
                <p className="text text--form-label">
                    {t(tBase + ".labels.exportImport")}
                </p>
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
                <p className="text text--form-label">
                    {t(tBase + ".labels.closeAfterClick")}
                </p>
                <Switch
                    checked={props.data.closeAfterSelect}
                    onChange={changeCloseMenuPreference}
                />
                <p className="text text--form-label">
                    {t(tBase + ".labels.autoSave")}
                </p>
                <Switch
                    checked={props.data.autoSave}
                    onChange={changeAutoSavePreference}
                />
            </section>
            <section>
                <p className="text text--form-label">
                    {t(tBase + ".labels.actions")}
                </p>
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

SectionAppSettings.propTypes = {
    changeAutoSave: PropTypes.func.isRequired,
    changeCloseOnClick: PropTypes.func.isRequired,
    changeLanguage: PropTypes.func.isRequired,
    deleteBackpack: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { changeAutoSave, changeCloseOnClick, changeLanguage, deleteBackpack })(SectionAppSettings);
