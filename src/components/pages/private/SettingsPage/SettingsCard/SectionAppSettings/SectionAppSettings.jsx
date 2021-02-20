import React from "react";
import { I18n } from "react-redux-i18n";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { I18nUtils, RouteUtils } from "@utils";
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

    const exportBackpack = () => {
        RouteUtils.downloadFile(RouteUtils.api.settings.backpackExport);
    };

    return (
        <div className="section-app-settings">
            <section>
                <p className="text text--form-label">
                    {I18n.t(tBase + ".labels.language")}
                </p>
                <form autoComplete="off">
                    <Select
                        value={props.data.preferredLanguage}
                        showSearch
                        style={{ width: 200 }}
                        placeholder={I18n.t(tBase + ".labels.language")}
                        optionFilterProp="children"
                        onChange={changeLanguage}
                    >
                        {Object.values(I18nUtils.languages).map((language) => {
                            return <Option key={language.value} value={language.value}>{language.name}</Option>
                        })}
                    </Select>
                </form>
            </section>
            <section>
                <p className="text text--form-label">
                    {I18n.t(tBase + ".labels.exportImport")}
                </p>
                <Space>
                    <Button onClick={exportBackpack} icon={<DownloadOutlined />}>
                        {I18n.t(tBase + ".exportButton")}
                    </Button>
                    <Upload>
                        <Button disabled icon={<UploadOutlined />}>
                            {I18n.t(tBase + ".importButton")}
                        </Button>
                    </Upload>
                </Space>
            </section>
            <section>
                <p className="text text--form-label">
                    {I18n.t(tBase + ".labels.closeAfterClick")}
                </p>
                <Switch
                    checked={props.data.closeAfterSelect}
                    onChange={changeCloseMenuPreference}
                />
                <p className="text text--form-label">
                    {I18n.t(tBase + ".labels.autoSave")}
                </p>
                <Switch
                    checked={props.data.autoSave}
                    onChange={changeAutoSavePreference}
                />
            </section>
            <section>
                <p className="text text--form-label">
                    {I18n.t(tBase + ".labels.actions")}
                </p>
                <Popconfirm
                    placement="bottomRight"
                    title={I18n.t(tBase + ".confirm.deleteAll")}
                    onConfirm={deleteBackpack}
                    okText={I18n.t("common.yes")}
                    cancelText={I18n.t("common.no")}
                >
                    <Button icon={<DeleteOutlined />} danger>
                        {I18n.t(tBase + ".deleteBackpackButton")}
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
