import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "@actions/authActions";

import "./LoginPage.less";
import { Constants, RouteUtils } from "@utils";
import { Row, Form, Button, message } from "antd";
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
        const { t } = this.props;

        return (
            <div className="login-root">
                <Row justify="center">
                    <div className="content-card">
                        <h1 className="header header--center-line header--special">{t("login.title")}</h1>
                        <div className="social-button-wrapper">
                            <SocialButton options={Constants.socialButtonTypes.google} />
                            <SocialButton options={Constants.socialButtonTypes.facebook} />
                        </div>
                        <p className="text text--silent text--center" style={{margin: "20px 0"}}>or use your account</p>
                        <Form 
                            layout="vertical"
                            onFinish={this.onSubmit.bind(this)}>
                            {<AuthFormItem 
                                name="email"
                                placeholder={t("login.emailPlaceholder")}
                                prefix={<MailOutlined />}
                                rules={[requiredRule("email")]}
                                customError={errors.firstname}
                            />}
                            {<AuthFormItem 
                                name="password"
                                placeholder={t("login.passwordPlaceholder")}
                                prefix={<LockOutlined />}
                                rules={[requiredRule("password")]}
                                customError={errors.message}
                            />}
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-button">
                                    {t("login.button")}
                                </Button>
                                {t("login.registerTitle")} <Link to="/auth/register">{t("login.registerLinkText")}</Link>
                            </Form.Item>
                        </Form>
                    </div>
                </Row>
            </div>
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

const component = connect(mapStateToProps, { loginUser })(LoginPage);

export default withTranslation()(component);