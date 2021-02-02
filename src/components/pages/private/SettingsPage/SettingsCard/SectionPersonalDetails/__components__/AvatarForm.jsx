import React from "react"
import { I18n } from "react-redux-i18n";

import { Avatar, Button, Upload } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";

const AvatarForm = () => {
    const tBase = "settings.sections.personalDetails";

    return (
        <>
            <h3 className="text text--light">{I18n.t(tBase + ".avatarTitle")}</h3>
            <div className="avatar-container">
                <Avatar className="avatar" icon={<UserOutlined />} size={{ xs: 108, sm: 108, md: 64, lg: 64, xl: 108, xxl: 108 }} />
                <Upload>
                    <Button icon={<UploadOutlined />}>{I18n.t(tBase + ".avatarUploadButton")}</Button>
                </Upload>
            </div>
        </>
    );
};

export default AvatarForm;