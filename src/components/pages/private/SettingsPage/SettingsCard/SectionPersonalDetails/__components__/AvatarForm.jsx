import React from "react";
import { useTranslation } from "react-i18next";

import { Avatar, Button, Upload } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";

const AvatarForm = () => {
    const { t } = useTranslation();
    const tBase = "settings.sections.personalDetails";

    return (
        <>
            <h3 className="text text--light">{t(tBase + ".avatarTitle")}</h3>
            <div className="avatar-container">
                <Avatar className="avatar" icon={<UserOutlined />} size={{ xs: 108, sm: 108, md: 64, lg: 64, xl: 108, xxl: 108 }} />
                <Upload>
                    <Button icon={<UploadOutlined />}>{t(tBase + ".avatarUploadButton")}</Button>
                </Upload>
            </div>
        </>
    );
};

export default AvatarForm;