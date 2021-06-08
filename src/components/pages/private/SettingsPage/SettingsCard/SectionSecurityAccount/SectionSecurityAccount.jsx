import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { I18n } from "react-redux-i18n";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { tryChangePassword, deleteAccount } from "@actions/settingsActions";
import { RouteUtils, MessageUtils } from "@utils";

import "./SectionSecurityAccount.less";
import { Alert, Button, Modal, Input, Form } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { SocialAccounts } from "./__components__";

const SectionSecurityAccount = props => {
    const history = useHistory();
    const tBase = "settings.sections.securityAndAccount";
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const updatePassword = (values) => {
        MessageUtils.handleDispatched(props.tryChangePassword(values));
    };

    const deleteAccount = () => {
        MessageUtils.handleDispatched(props.deleteAccount());
        history.push(RouteUtils.app.public.landing.link);
    };

    const ChangePasswordForm = () => (
        <Form className="wrap-container" onFinish={updatePassword}>
            <Form.Item name="currentPassword" help={props.changePasswordErrors.currentPassword} validateStatus={props.changePasswordErrors.currentPassword ? "error": "success"}>
                <Input.Password style={{width: 256}} placeholder={I18n.t(tBase + ".placeholders.password")} />
            </Form.Item>
            <Form.Item name="newPassword1" help={props.changePasswordErrors.newPassword1} validateStatus={props.changePasswordErrors.newPassword1 ? "error": "success"}>
                <Input.Password style={{width: 256}} placeholder={I18n.t(tBase + ".placeholders.newPassword1")} />
            </Form.Item>
            <Form.Item name="newPassword2" help={props.changePasswordErrors.newPassword2} validateStatus={props.changePasswordErrors.newPassword2 ? "error": "success"}>
                <Input.Password style={{width: 256}} placeholder={I18n.t(tBase + ".placeholders.newPassword2")} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">{I18n.t(tBase + ".changePasswordButton")}</Button>
            </Form.Item>
        </Form>
    );

    return (
        <div className="section-security-account">
            <div>
                <p className="text text--form-label">{I18n.t(tBase + ".labels.changePassword")}</p>
                {
                    props.data.canChangePassword === true ? 
                        <ChangePasswordForm /> : 
                        <Alert
                            style={{ marginBottom: 24 }}
                            message={I18n.t(tBase + ".passwordWarning.message")}
                            description={I18n.t(tBase + ".passwordWarning.description")}
                            type="warning"
                            showIcon
                        />
                }
            </div>
            <section>
                <p className="text text--form-label">{I18n.t(tBase + ".labels.social")}</p>
                <SocialAccounts linkedProviders={props.data.authStrategies} />
            </section>
            <section>
                <p className="text text--form-label">{I18n.t(tBase + ".labels.actions")}</p>
                <Button icon={<DeleteOutlined />} onClick={() => setShowDeleteModal(true)} danger>
                    {I18n.t(tBase + ".deleteAccountButton")}
                </Button>
                <Modal
                    title={I18n.t("common.areYouSure")}
                    visible={showDeleteModal}
                    onOk={deleteAccount}
                    onCancel={() => setShowDeleteModal(false)}
                    okText={I18n.t(tBase + ".deleteAccountButton")}
                    cancelText={I18n.t("common.cancel")}
                >
                    <p className="text text--light">{I18n.t(tBase + ".deleteAccountText")}</p>
                </Modal>
            </section>
        </div>
    );
};

SectionSecurityAccount.propTypes = {
    changePasswordErrors: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    changePasswordErrors: state.errors.changePasswordErrors || {}
});

export default connect(mapStateToProps, { deleteAccount, tryChangePassword })(SectionSecurityAccount);
