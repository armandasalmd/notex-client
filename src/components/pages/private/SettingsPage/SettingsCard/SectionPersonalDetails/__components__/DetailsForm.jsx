import React from "react";

import { Form, Input, Button } from "antd";

const AvatarForm = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log("Received values of form: ", values);
    };

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    firstname: "Armandas",
                    lastname: "Barkauskas",
                    phoneNumber: "07914603504"
                }}
            >
                <Form.Item label="First name" name="firstname" rules={[{ required: true, message: "First name is required" }]}>
                    <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item label="Last name" name="lastname" rules={[{ required: true, message: "Last name is required" }]}>
                    <Input placeholder="Enter your last name" />
                </Form.Item>
                <Form.Item label="Email address">
                    <Input disabled value="armandas.bark@gmail.com" />
                </Form.Item>
                <Form.Item label="Phone number" name="phoneNumber">
                    <Input placeholder="Enter your phone number" />
                </Form.Item>
                <Form.Item style={{marginBottom: "0"}}>
                    <Button type="primary" htmlType="submit" style={{float: "right"}}>
                        Save changes
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AvatarForm;
