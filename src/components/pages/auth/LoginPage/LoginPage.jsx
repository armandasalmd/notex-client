import React, { useEffect } from "react";
import { I18n } from "react-redux-i18n";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loginUser } from "@actions/authActions";
import { clearErrors } from "@actions/errorActions";
import { Constants, GlobalUtils, RouteUtils, HistoryUtils } from "@utils";

import "./LoginPage.less";
import { Row, Form, Button, Spin, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import SocialButton from "##/SocialButton";
import { AuthFormItem, requiredRule } from "../__components__";

const LoginPage = (props) => {
    const query = HistoryUtils.useQuery();

    const getError = (key) => GlobalUtils.getValue(props.errors, key);

    const onLogin = (form) => {
        props.loginUser(form);
    };

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push(RouteUtils.app.private.main.link);
        }
    }, [props.auth, props.history]);

    useEffect(() => {
        const successMessage = query.get("successMsg");

        if (successMessage) {
            message.success({
                content: successMessage,
                duration: 4
            });
            query.delete("successMsg");
        } else {
            const errorMessage = query.get("errorMsg");
            if (errorMessage) {
                message.error({
                    content: errorMessage,
                    duration: 4
                });
            }
        }
    });

    return (
        <Spin spinning={props.auth.loading} tip="Login in progress">
            <div className="login-root">
                <Row justify="center">
                    <div className="content-card">
                        <h1 className="header header--center-line header--special">{I18n.t("login.title")}</h1>
                        <div className="social-button-wrapper">
                            <SocialButton options={Constants.socialButtonTypes.google} />
                            <SocialButton options={Constants.socialButtonTypes.facebook} />
                        </div>
                        <p className="text text--silent text--center" style={{margin: "20px 0"}}>{I18n.t("login.orLabel")}</p>
                        <Form 
                            layout="vertical"
                            onFinish={onLogin.bind(this)}>
                            <AuthFormItem 
                                name="email"
                                placeholder={I18n.t("login.emailPlaceholder")}
                                prefix={<MailOutlined />}
                                rules={[requiredRule("email")]}
                                customError={getError("email")}
                            />
                            <AuthFormItem 
                                name="password"
                                placeholder={I18n.t("login.passwordPlaceholder")}
                                prefix={<LockOutlined />}
                                rules={[requiredRule("password")]}
                                customError={getError("password")}
                            />
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-button">
                                    {I18n.t("login.button")}
                                </Button>
                                {I18n.t("login.registerTitle")} <Link to="/auth/register" onClick={props.clearErrors} >{I18n.t("login.registerLinkText")}</Link>
                            </Form.Item>
                        </Form>
                    </div>
                </Row>
            </div>
        </Spin>
    );
};

LoginPage.propTypes = {
    clearErrors: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { clearErrors, loginUser })(LoginPage);
