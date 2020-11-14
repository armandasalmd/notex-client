import React from "react";
import { withTranslation } from "react-i18next";
import { Link, withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "@actions/authActions";

import "./RegisterPage.less";
import { RouteUtils } from "@utils";
import { Button, Row, Form, Spin } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { AuthFormItem, requiredRule } from "../__components__";

class RegisterPage extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: {}
        };
    }

    onSubmit(form) {
        this.props.registerUser(form, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push(RouteUtils.app.private.main.link);
        } else if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push(RouteUtils.app.private.main.link);
        }
    }

    render() {
        const { errors } = this.state;
        const { t } = this.props;

        return (
            <Spin spinning={this.props.auth.loading} tip="Register in progress">
                <div className="register-root">
                    <Row justify="center">
                        <div className="content-card">
                            <h1 className="header header--center-line header--special">{t("register.title")}</h1>
                            <Form style={{ marginTop: "12px" }} layout="vertical" onFinish={this.onSubmit.bind(this)}>
                                {
                                    <AuthFormItem
                                        name="firstname"
                                        placeholder={t("register.firstnamePlaceholder")}
                                        prefix={<UserOutlined />}
                                        rules={[requiredRule("firstname")]}
                                        customError={errors.firstname}
                                    />
                                }
                                {
                                    <AuthFormItem
                                        name="lastname"
                                        placeholder={t("register.lastnamePlaceholder")}
                                        prefix={<UserOutlined />}
                                        rules={[requiredRule("lastname")]}
                                        customError={errors.firstname}
                                    />
                                }
                                {
                                    <AuthFormItem
                                        name="email"
                                        placeholder={t("register.emailPlaceholder")}
                                        prefix={<MailOutlined />}
                                        rules={[requiredRule("email")]}
                                        customError={errors.email}
                                    />
                                }
                                {
                                    <AuthFormItem
                                        name="password"
                                        placeholder={t("register.password1Placeholder")}
                                        prefix={<LockOutlined />}
                                        rules={[requiredRule("password")]}
                                        customError={errors.password}
                                    />
                                }
                                {
                                    <AuthFormItem
                                        name="password2"
                                        placeholder={t("register.password2Placeholder")}
                                        prefix={<LockOutlined />}
                                        rules={[requiredRule("password")]}
                                        customError={errors.password2}
                                    />
                                }
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="register-button">
                                        {t("register.button")}
                                    </Button>
                                    {t("register.loginTitle")} <Link to="/auth/login">{t("register.loginLinkText")}</Link>
                                </Form.Item>
                            </Form>
                        </div>
                    </Row>
                </div>
            </Spin>
        );
    }
}

RegisterPage.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

const component = connect(mapStateToProps, { registerUser })(withRouter(RegisterPage));

export default withTranslation()(component);
