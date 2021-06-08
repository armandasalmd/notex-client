import React, { useEffect } from "react";
import { I18n } from "react-redux-i18n";

import { MessageUtils } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { savePersonalDetails } from "@actions/settingsActions";

import { Form, Input, Button } from "antd";

const dataToFieldDataList = (dataObj) => {
    const formFields = [];

    if (dataObj) {
        for (const fieldName in dataObj) {
            formFields.push({
                name: [fieldName],
                touched: false,
                validating: false,
                value: dataObj[fieldName] || ""
            });
        }
    }

    return formFields;
};

const DetailsForm = (props) => {
    const tBase = "settings.sections.personalDetails";

    const [form] = Form.useForm();

    const onFinish = values => {
        MessageUtils.handleDispatched(props.savePersonalDetails(values));
    };

    useEffect(() => {
        if (form) {
            form.setFields(dataToFieldDataList(props.data));
        }
    }, [form, props.data]);

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item label={I18n.t(tBase + ".firstname")} name="firstname" rules={[{ required: true, message: I18n.t(tBase + ".required") }]}>
                    <Input placeholder={I18n.t(tBase + ".placeholders.firstname")} />
                </Form.Item>
                <Form.Item label={I18n.t(tBase + ".lastname")} name="lastname" rules={[{ required: true, message: I18n.t(tBase + ".required") }]}>
                    <Input placeholder={I18n.t(tBase + ".placeholders.lastname")} />
                </Form.Item>
                <Form.Item label={I18n.t(tBase + ".email")} name="email">
                    <Input disabled />
                </Form.Item>
                <Form.Item label={I18n.t(tBase + ".phone")} name="phone">
                    <Input placeholder={I18n.t(tBase + ".placeholders.phone")} />
                </Form.Item>
                <Form.Item style={{marginBottom: "0"}}>
                    <Button loading={ props.loading } type="primary" htmlType="submit" style={{float: "right"}}>
                        {I18n.t(tBase + ".saveButton")}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

DetailsForm.propTypes = {
    savePersonalDetails: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { savePersonalDetails })(DetailsForm);
