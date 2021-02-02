import React from "react";
import { I18n } from "react-redux-i18n";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loginUser } from "@actions/authActions";

import "./LoginPage.less";
import { Constants, RouteUtils } from "@utils";
import { Row, Form, Button, Spin, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import SocialButton from "##/SocialButton";
import { AuthFormItem, requiredRule } from "../__components__";

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: {}
        };
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
            this.props.history.push(this.props.history.push(RouteUtils.app.private.main.link));
        }

        if (this.props.location.search.includes("success=true")) {
            message.success({
                content: "Register successful, please login!",
                duration: 6
            });
        }
    }

    onSubmit(form) {
        this.props.loginUser(form);
    }

    render() {
        const { errors } = this.state;

        return (
            <Spin spinning={this.props.auth.loading} tip="Login in progress">
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
                                onFinish={this.onSubmit.bind(this)}>
                                {<AuthFormItem 
                                    name="email"
                                    placeholder={I18n.t("login.emailPlaceholder")}
                                    prefix={<MailOutlined />}
                                    rules={[requiredRule("email")]}
                                    customError={errors.firstname}
                                />}
                                {<AuthFormItem 
                                    name="password"
                                    placeholder={I18n.t("login.passwordPlaceholder")}
                                    prefix={<LockOutlined />}
                                    rules={[requiredRule("password")]}
                                    customError={errors.message}
                                />}
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-button">
                                        {I18n.t("login.button")}
                                    </Button>
                                    {I18n.t("login.registerTitle")} <Link to="/auth/register">{I18n.t("login.registerLinkText")}</Link>
                                </Form.Item>
                            </Form>
                        </div>
                    </Row>
                </div>
            </Spin>
        );
    }
}

LoginPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(LoginPage);
