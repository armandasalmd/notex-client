import React, { useEffect } from "react";
import { I18n } from "react-redux-i18n";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { registerUser } from "@actions/authActions";
import { GlobalUtils, RouteUtils } from "@utils";

import "./RegisterPage.less";
import { Button, Row, Form, Spin } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { AuthFormItem, requiredRule } from "../__components__";

const RegisterPage = (props) => {
    const getError = (key) => GlobalUtils.getValue(props.errors, key);

    const onRegister = (form) => {
        props.registerUser(form, props.history);
    };

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            this.props.history.push(RouteUtils.app.private.main.link);
        }
    }, [props.auth, props.history]);

    return (
        <Spin spinning={props.auth.loading} tip="Register in progress">
            <div className="register-root">
                <Row justify="center">
                    <div className="content-card">
                        <h1 className="header header--center-line header--special">{I18n.t("register.title")}</h1>
                        <Form style={{ marginTop: "12px" }} layout="vertical" onFinish={onRegister.bind(this)}>
                            <AuthFormItem
                                name="firstname"
                                placeholder={I18n.t("register.firstnamePlaceholder")}
                                prefix={<UserOutlined />}
                                rules={[requiredRule("firstname")]}
                                customError={getError("firstname")}
                            />
                            <AuthFormItem
                                name="lastname"
                                placeholder={I18n.t("register.lastnamePlaceholder")}
                                prefix={<UserOutlined />}
                                rules={[requiredRule("lastname")]}
                                customError={getError("lastname")}
                            />
                            <AuthFormItem
                                name="email"
                                placeholder={I18n.t("register.emailPlaceholder")}
                                prefix={<MailOutlined />}
                                rules={[requiredRule("email")]}
                                customError={getError("email")}
                            />
                            <AuthFormItem
                                name="password"
                                placeholder={I18n.t("register.password1Placeholder")}
                                prefix={<LockOutlined />}
                                rules={[requiredRule("password")]}
                                customError={getError("password")}
                            />
                            <AuthFormItem
                                name="password2"
                                placeholder={I18n.t("register.password2Placeholder")}
                                prefix={<LockOutlined />}
                                rules={[requiredRule("password")]}
                                customError={getError("password2")}
                            />
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="register-button">
                                    {I18n.t("register.button")}
                                </Button>
                                {I18n.t("register.loginTitle")} <Link to="/auth/login">{I18n.t("register.loginLinkText")}</Link>
                            </Form.Item>
                        </Form>
                    </div>
                </Row>
            </div>
        </Spin>
    );
};

RegisterPage.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(RegisterPage));
