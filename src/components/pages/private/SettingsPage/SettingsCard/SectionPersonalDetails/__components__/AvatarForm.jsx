import React from "react";

import { Avatar, Button, Upload } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";

const AvatarForm = () => {
    return (
        <>
            <h3 className="text text--light">Your avatar</h3>
            <div className="avatar-container">
                <Avatar className="avatar" icon={<UserOutlined />} size={{ xs: 108, sm: 108, md: 64, lg: 64, xl: 108, xxl: 108 }} />
                <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </div>
        </>
    );
};

export default AvatarForm;