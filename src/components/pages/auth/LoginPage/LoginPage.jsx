import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "@actions/authActions";

import "./LoginPage.less";
import { RouteUtils } from "@utils";
import { Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    };

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

    render() {
        const { errors } = this.state;
        const { t } = this.props;

        return (
            <div className="login-main">
                <div className="login-main-inner">
                    <h1 className="header">{t("login.title")}</h1>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="login-form-item">
                            <Input
                                prefix={
                                    <MailOutlined
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                placeholder={t("login.emailPlaceholder")}
                                onChange={this.onChange}
                                value={this.state.email}
                                id="email"
                            />
                            <span className="red-text">
                                {errors.email}
                                {errors.emailnotfound}
                            </span>
                        </div>
                        <div className="login-form-item">
                            <Input.Password
                                prefix={
                                    <LockOutlined
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                placeholder={t("login.passwordPlaceholder")}
                                onChange={this.onChange}
                                value={this.state.password}
                                id="password"
                            />
                            <span className="red-text">
                                {errors.message}
                            </span>
                        </div>
                        <div className="login-form-item">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                {t("login.button")}
                            </Button>
                        </div>
                    </form>
                    <div className="login-link">
                            {t("login.registerTitle")} <Link to="/auth/register">{t("login.registerLinkText")}</Link>
                    </div>
                </div>
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
