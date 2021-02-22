import React, { useState } from "react";
import { I18n } from "react-redux-i18n";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateAvatar } from "@actions/settingsActions";
import { AuthUtils, RouteUtils, GlobalUtils } from "@utils";

import { Avatar, Button, Space, Upload } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";

const AvatarForm = (props) => {
    const tBase = "settings.sections.personalDetails";
    const [fileList, setFileList] = useState([]);

    const handleChange = (info) => {
        const uploadSuccess = GlobalUtils.getValue(info, "file.response.success", false);

        if (uploadSuccess) {
            const avatar = GlobalUtils.getValue(info, "file.response.data.avatarUrl", null);

            if (avatar) {
                props.updateAvatar(avatar);
            }
        } else {
            let fileList = [...info.fileList].slice(-1);
    
            fileList = fileList.map((file) => {
                if (file.response) {
                    file.url = file.response.url;
                }
    
                return file;
            });
    
            setFileList(fileList);
        }
    };
    
    return (
        <>
            <h3 className="text text--light">
                {I18n.t(tBase + ".avatarTitle")}
            </h3>
            <div className="avatar-container">
                <Avatar
                    className="avatar"
                    src={RouteUtils.resolveUrl(props.data.avatarUrl)}
                    icon={<UserOutlined />}
                    size={108}
                />
                <Space direction="vertical">
                    <Upload
                        accept="image/png, image/jpeg"
                        action={RouteUtils.resolveUrl(
                            RouteUtils.api.settings.uploadAvatar
                        )}
                        fileList={fileList}
                        headers={{"Authorization": AuthUtils.getJwtToken()}}
                        onChange={handleChange}
                        listType="picture"
                        multiple={false}
                        name="avatar"
                        showUploadList={{
                            showRemoveIcon: false
                        }}
                    >
                        <Button icon={<UploadOutlined />}>
                            {I18n.t(tBase + ".avatarUploadButton")}
                        </Button>
                    </Upload>
                </Space>
            </div>
        </>
    );
};

AvatarForm.propTypes = {
    updateAvatar: PropTypes.func.isRequired
};

export default connect(null, { updateAvatar })(AvatarForm);
