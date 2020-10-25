import React from "react";
import { withTranslation } from "react-i18next";
import { Link, withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "@actions/authActions";

import "./RegisterPage.less";
import { RouteUtils } from "@utils";
import { Input, Button } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

class RegisterPage extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
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
            this.props.history.push(RouteUtils.app.private.main.link);
        }
    }

    render() {
        const { errors } = this.state;
        const { t } = this.props;

        return (
            <section className="reg-main">
                <div className="reg-main-inner">
                    <h1>{t("register.title")}</h1>
                    <form noValidate onSubmit={this.onSubmit}>
                        {/* Firstname */}
                        <div className="reg-form-item">
                            <Input
                                prefix={
                                    <UserOutlined
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                placeholder={t("register.firstnamePlaceholder")}
                                onChange={this.onChange}
                                value={this.state.firstname}
                                id="firstname"
                            />
                            <span className="red-text">{errors.firstname}</span>
                        </div>
                        {/* Lastname */}
                        <div className="reg-form-item">
                            <Input
                                prefix={
                                    <UserOutlined
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                placeholder={t("register.lastnamePlaceholder")}
                                onChange={this.onChange}
                                value={this.state.lastname}
                                id="lastname"
                            />
                            <span className="red-text">{errors.lastname}</span>
                        </div>
                        {/* Email */}
                        <div className="reg-form-item">
                            <Input
                                prefix={
                                    <MailOutlined
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                placeholder={t("register.emailPlaceholder")}
                                onChange={this.onChange}
                                value={this.state.email}
                                id="email"
                            />
                            <span className="red-text">{errors.email}</span>
                        </div>
                        {/* Password 1 */}
                        <div className="reg-form-item">
                            <Input.Password
                                prefix={
                                    <LockOutlined
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                placeholder={t("register.password1Placeholder")}
                                onChange={this.onChange}
                                value={this.state.password}
                                id="password"
                            />
                            <span className="red-text">{errors.password}</span>
                        </div>
                        {/* Password 2 */}
                        <div className="reg-form-item">
                            <Input.Password
                                prefix={
                                    <LockOutlined
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                placeholder={t("register.password2Placeholder")}
                                onChange={this.onChange}
                                value={this.state.password2}
                                id="password2"
                            />
                            <span className="red-text">{errors.password2}</span>
                        </div>
                        {/* Submit button */}
                        <div className="reg-form-item">
                            <Button type="primary" htmlType="submit" className="reg-form-button">
                                {t("register.button")}
                            </Button>
                        </div>
                    </form>
                    <div className="register-link">
                        {t("register.loginTitle")} <Link to="/auth/login">{t("register.loginLinkText")}</Link>
                    </div>
                </div>
            </section>
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
