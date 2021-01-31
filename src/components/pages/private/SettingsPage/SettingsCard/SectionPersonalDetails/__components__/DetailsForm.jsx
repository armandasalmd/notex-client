import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    const tBase = "settings.sections.personalDetails";

    const [form] = Form.useForm();

    const onFinish = values => {
        props.savePersonalDetails(values);
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
                <Form.Item label={t(tBase + ".firstname")} name="firstname" rules={[{ required: true, message: t(tBase + ".required") }]}>
                    <Input placeholder={t(tBase + ".placeholders.firstname")} />
                </Form.Item>
                <Form.Item label={t(tBase + ".lastname")} name="lastname" rules={[{ required: true, message: t(tBase + ".required") }]}>
                    <Input placeholder={t(tBase + ".placeholders.lastname")} />
                </Form.Item>
                <Form.Item label={t(tBase + ".email")} name="email">
                    <Input disabled />
                </Form.Item>
                <Form.Item label={t(tBase + ".phone")} name="phone">
                    <Input placeholder={t(tBase + ".placeholders.phone")} />
                </Form.Item>
                <Form.Item style={{marginBottom: "0"}}>
                    <Button loading={ props.loading } type="primary" htmlType="submit" style={{float: "right"}}>
                        {t(tBase + ".saveButton")}
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
