import React, { useState } from "react";

import { AuthUtils, RouteUtils, GlobalUtils } from "@utils";

import { Upload, Image, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
}

function createUploadFile(sourceUrl) {
    return {
        uid: "image",
        name: "Article cover image",
        status: "done",
        url: sourceUrl
    };
}

const CoverUpload = (props) => {
    const { onChange, imageSource } = props;
    const [loading, setLoading] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState(imageSource);
    const [fileList, setFileList] = useState(imageSource ? [createUploadFile(imageSource)] : []);

    const handleChange = (info) => {
        const uploadSuccess = GlobalUtils.getValue(info, "file.response.success", false);

        if (uploadSuccess) {
            const source = GlobalUtils.getValue(info, "file.response.data", null);
            
            setFileList([...info.fileList].slice(-1));
            setLoading(false);
            setImageUrl(source);
            GlobalUtils.callIfFunction(onChange, source);
        } else {
            setLoading(true);
        }
    };

    const handleRemove = () => {
        setImageUrl(null);
        setFileList([]);
        GlobalUtils.callIfFunction(onChange, null);
    };

    return (
        <div className="editArticleCard__upload">
            <div className="editArticleCard__uploadMain">
                <Upload
                    action={RouteUtils.resolveUrl(RouteUtils.api.settings.uploadCover)}
                    name="image"
                    fileList={fileList}
                    headers={{ Authorization: AuthUtils.getJwtToken() }}
                    multiple={false}
                    showUploadList={{
                        showPreviewIcon: true,
                        showRemoveIcon: true,
                    }}
                    listType="picture-card"
                    maxCount={1}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                    onPreview={() => setPreviewVisible(true)}
                    onRemove={handleRemove}
                >
                    <div>
                        {loading ? <LoadingOutlined /> : <PlusOutlined />}
                        <div style={{ marginTop: 8 }}>Upload cover image</div>
                    </div>
                </Upload>
            </div>
            {previewVisible && (
                <div className="editArticleCard__preview">
                    <Image
                        preview={{
                            visible: previewVisible,
                            onVisibleChange: (visible) => setPreviewVisible(visible),
                        }}
                        className="uploaded-image"
                        src={imageUrl}
                    />
                </div>
            )}
        </div>
    );
};

export default CoverUpload;
