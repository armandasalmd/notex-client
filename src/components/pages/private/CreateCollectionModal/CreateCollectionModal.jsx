import React, { useState } from "react";

import { GlobalUtils } from "@utils";

import { Button, Modal, Form, Input, Select } from "antd";
import { TreeSelectNotes } from "./__components__";

const { Option } = Select;

const CreateCollectionModal = (props) => {
    const { onSubmit, visible, onClose, metaData, loading } = props;

    const [ form ] = Form.useForm();
    const [ selectedNotes, setSelectedNotes ] = useState([]);

    const handleSubmit = (data) => {
        GlobalUtils.callIfFunction(onSubmit, {
            ...data,
            selectedNotes: selectedNotes
        });
        form.resetFields();
        setSelectedNotes([]);
    };

    const handleCancel = () => {
        GlobalUtils.callIfFunction(onClose);
    };

    const initialValues = {
        collectionName: "",
        collectionDescription: "",
        accessStatus: "0"
    };

    return (
        <Modal
            visible={visible}
            title="Create new article collection"
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={() => form.submit()}>
                    Create collection
                </Button>
            ]}
        >
            <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={initialValues}>
                <Form.Item name="collectionName" rules={[{required: true, message: "Please enter collection name"}]} requiredmark="true" label="Collection name">
                    <Input placeholder="Enter name" />
                </Form.Item>
                <Form.Item name="collectionDescription" label="Short description" rules={[{required: true, message: "Please add description"}]} requiredmark="true" tooltip="Description will appear in search page">
                    <Input placeholder="Enter description" />
                </Form.Item>
                <Form.Item name="accessStatus" label="Publication status" rules={[{required: true, message: "Select status value"}]} requiredmark="true">
                    <Select>
                        <Option value="0">Published</Option>
                        <Option value="1">Unlisted</Option>
                        <Option value="2">Private</Option>
                    </Select>
                </Form.Item>
                <TreeSelectNotes notebooksMetaData={metaData} value={selectedNotes} setValue={setSelectedNotes} />
            </Form>
        </Modal>
    );
};

export default CreateCollectionModal;