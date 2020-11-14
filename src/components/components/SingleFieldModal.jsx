import React, { useEffect, useRef } from "react";

import { Button, Modal, Form, Input } from "antd";

import { GlobalUtils } from "@utils";

/**
 * Single input field fully managed modal with predefined footer with action buttons
 * @param {Object} props
 * @param {Object} props.extra
 * @param {string} props.title
 * @param {string} props.text
 * @param {string} props.textPlaceholder
 * @param {boolean} props.allowEmpty = false
 * @param {boolean} props.loading
 * @param {boolean} props.visible
 * @param {function} props.setVisible
 * @param {function} props.onSubmit
 */
const SingleFieldModal = props => {
    const formRef = useRef(null);
    const [form] = Form.useForm();

    const close = () => {
        if (!props.loading) {
            GlobalUtils.callIfFunction(props.setVisible, false);
        }
    };

    const submit = formValues => {
        GlobalUtils.callIfFunction(props.onSubmit, formValues.field, props.extra);
        if (props.loading === undefined) {
            form.resetFields();
        }
    };

    const footer = [
        <Button disabled={!!props.loading} key="back" onClick={close}>
            Cancel
        </Button>,
        <Button
            key="submit"
            type="primary"
            loading={props.loading || false}
            onClick={() => {
                form.submit();
            }}
        >
            Submit
        </Button>
    ];

    useEffect(() => {
        if (!props.loading && formRef.current) {
            formRef.current.resetFields();
        }
    }, [props.loading, formRef]);

    return (
        <Modal visible={props.visible} title={props.title || "No title"} onCancel={close} onOk={submit} footer={footer}>
            <Form form={form} onFinish={submit} ref={formRef}>
                <Form.Item name="field" rules={[{ required: !props.allowEmpty, message: "This field is required" }]}>
                    <Input placeholder={props.textPlaceholder} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default SingleFieldModal;
