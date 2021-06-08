import React, { useState } from "react";
import { I18n } from "react-redux-i18n";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { AuthUtils, GlobalUtils, I18nUtils, RouteUtils, MessageUtils } from "@utils";
import { fetchNotebooks } from "@actions/appActions";
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
    const [fileList, setFileList] = useState([]);

    const deleteBackpack = () => {
        MessageUtils.handleDispatched(props.deleteBackpack());
    };

    const changeLanguage = (option) => {
        MessageUtils.handleDispatched(props.changeLanguage(option));
    };

    const changeCloseMenuPreference = (checked) => {
        MessageUtils.handleDispatched(props.changeCloseOnClick(checked));
    };

    const changeAutoSavePreference = (checked) => {
        MessageUtils.handleDispatched(props.changeAutoSave(checked));
    };

    const exportBackpack = () => {
        RouteUtils.downloadFile(RouteUtils.api.settings.backpackExport);
    };

    const handleImport = (info) => {
        const importSuccess = GlobalUtils.getValue(info, "file.response.success", false);

        if (importSuccess) {
            props.fetchNotebooks();
        } else {
            let fileList = [...info.fileList].slice(-5);
    
            fileList = fileList.map((file) => {
                if (file.response) {
                    file.url = file.response.url;
                }
    
                return file;
            });
    
            setFileList(fileList);
        }
    };

    const importUploadOptions = {
        accept: "application/json",
        action: RouteUtils.resolveUrl(RouteUtils.api.settings.backpackImport),
        fileList: fileList,
        headers: {"Authorization": AuthUtils.getJwtToken()},
        onChange: handleImport,
        multiple: false,
        name: "import"
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
                <Space align="start">
                    <Button onClick={exportBackpack} icon={<DownloadOutlined />}>
                        {I18n.t(tBase + ".exportButton")}
                    </Button>
                    <Upload {...importUploadOptions}>
                        <Button icon={<UploadOutlined />}>
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
    deleteBackpack: PropTypes.func.isRequired,
    fetchNotebooks: PropTypes.func.isRequired
};

export default connect(null, { changeAutoSave, changeCloseOnClick, changeLanguage, deleteBackpack, fetchNotebooks })(SectionAppSettings);
