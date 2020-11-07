import React from "react";
import { Form, Input } from "antd";

const AuthFormItem = ({name, placeholder, prefix, rules, customError}) => {
    const inputProps = {
        prefix: prefix,
        placeholder: placeholder
    }

    return (
        <Form.Item name={name} rules={rules}
            {
                ...customError && {
                    help: customError,
                    validateStatus: "error"
                }
            }>
            {
                name.includes("password") ?
                <Input.Password {...inputProps} /> :
                <Input {...inputProps} />
            }
        </Form.Item>
    );
};

const requiredRule = (name) => {
    return { required: true, message: `Please input your ${name}!` };
};

export {
    requiredRule
};

export default AuthFormItem;

