import React, { useEffect } from "react";

import { GlobalUtils } from "@utils";

import { Button, Form, Input } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const EditCollectionDetails = (props) => {
    const { title, description, loading, onDetailsChange } = props;
    const [ form ] = Form.useForm();

    const required = {
        rules: [{ required: true, message: "This field cannot be empty" }],
        requiredmark: "true",
        style: {maxWidth: 400}
    };

    const onFinish = (data) => {
        const anyFieldHasChanged = data.title !== title || data.description !== description;
        
        if (loading !== true && anyFieldHasChanged) {
            GlobalUtils.callIfFunction(onDetailsChange, data.title, data.description);
        }
    };

    useEffect(() => {
        if (form && title && description) {
            form.setFieldsValue({
                title,
                description
            });
        }
    }, [form, title, description]);

    return (
        <div className="editCollectionCard__details">
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item label="Collection title" name="title" {...required}>
                    <Input value={title} />
                </Form.Item>
                <Form.Item
                    tooltip={{ title: "Appears in search description", icon: <InfoCircleOutlined /> }}
                    label="Short description"
                    name="description"
                    {...required}
                >
                    <Input value={description} />
                </Form.Item>
                <Form.Item style={{marginBottom: 6}}>
                    <Button loading={loading} htmlType="submit">
                        Save changes
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditCollectionDetails;
