import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ArticleManagementUtils, GlobalUtils } from "@utils";
import { createArticle } from "@actions/editArticleActions";

import { Button, Modal, Form, Input, Select, Cascader, message } from "antd";

const { Option } = Select;

const CreateCollectionModal = (props) => {
    const { visible, onClose, sourceMetaData, collectionTitle, collectionId } = props;
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (data) => {
        if (collectionId) {    
            data.sourceNoteId = data.sourceNoteId[data.sourceNoteId.length - 1]
            data.collectionGuid = collectionId;
            
            onCreateArticle(data);
            form.resetFields();
        }
    };

    const handleCancel = () => {
        GlobalUtils.callIfFunction(onClose);
    };

    const initialValues = {
        title: "",
        description: "",
        sourceNoteId: "",
        articleAccessStatus: "0"
    };

    const cascaderProps = {
        options: ArticleManagementUtils.sourceNotebooksToTreeData(sourceMetaData, true),
        placeholder: "Select source note"
    };

    const onCreateArticle = (details) => {
        setLoading(true);
        props.createArticle(details)
            .then((data) => {
                if (data) {
                    message.success("Article was created successfully");
                }
            })
            .catch(() => {
                message.error("Cannot create requested article");
            })
            .finally(() => {
                setLoading(false);
                GlobalUtils.callIfFunction(onClose);
            });
    };

    return (
        <Modal
            visible={visible}
            title={`Create new article for ${collectionTitle}`}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel} disabled={loading}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={form.submit}>
                    Create article
                </Button>
            ]}
        >
            <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={initialValues}>
                <Form.Item name="title" rules={[{required: true, message: "Please enter collection name"}]} label="Article title">
                    <Input placeholder="Enter name" />
                </Form.Item>
                <Form.Item name="description" label="Short description" rules={[{required: true, message: "Please add description"}]} tooltip="Description will appear in search page">
                    <Input placeholder="Enter description" />
                </Form.Item>
                <Form.Item name="articleAccessStatus" label="Publication status" rules={[{required: true, message: "Select status value"}]} >
                    <Select>
                        <Option value="0">Published</Option>
                        <Option value="1">Unlisted</Option>
                        <Option value="2">Private</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="sourceNoteId" label="Select article source note" rules={[{required: true, message: "Select source note"}]} >
                    <Cascader {...cascaderProps} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

CreateCollectionModal.propTypes = {
    createArticle: PropTypes.func.isRequired
};

export default connect(null, { createArticle })(CreateCollectionModal);
