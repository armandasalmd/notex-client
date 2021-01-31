import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { tryChangePassword, deleteAccount } from "@actions/settingsActions";
import { Constants, RouteUtils } from "@utils";

import "./SectionSecurityAccount.less";
import { Button, Modal, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import SocialButton from "##/SocialButton";

const SectionSecurityAccount = props => {
    const history = useHistory();
    const { t } = useTranslation();
    const tBase = "settings.sections.securityAndAccount";

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [passwordOld, setOldPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const updatePassword = () => {
        props.tryChangePassword(passwordOld, password1, password2);
        setOldPassword("");
        setPassword1("");
        setPassword2("");
    };

    const deleteAccount = () => {
        props.deleteAccount();
        history.push(RouteUtils.app.public.landing.link);
    };

    return (
        <div className="section-security-account">
            <section>
                <p className="text text--form-label">{t(tBase + ".labels.changePassword")}</p>
                <div className="wrap-container">
                    <Input.Password style={{width: 256}} value={passwordOld} onChange={(e) => setOldPassword(e.target.value)} placeholder={t(tBase + ".placeholders.password")} />
                    <Input.Password style={{width: 256}} value={password1} onChange={(e) => setPassword1(e.target.value)} placeholder={t(tBase + ".placeholders.newPassword1")} />
                    <Input.Password style={{width: 256}} value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder={t(tBase + ".placeholders.newPassword2")} />
                </div>
                <Button onClick={updatePassword}>{t(tBase + ".changePasswordButton")}</Button>
            </section>
            <section>
                <p className="text text--form-label">{t(tBase + ".labels.social")}</p>
                <div className="wrap-container">
                    <SocialButton small width="256px" options={Constants.socialButtonTypes.google} />
                    <SocialButton small width="256px" options={Constants.socialButtonTypes.facebook} />
                </div>
            </section>
            <section>
                <p className="text text--form-label">{t(tBase + ".labels.actions")}</p>
                <Button icon={<DeleteOutlined />} onClick={() => setShowDeleteModal(true)} danger>
                    {t(tBase + ".deleteAccountButton")}
                </Button>
                <Modal
                    title={t("common.areYouSure")}
                    visible={showDeleteModal}
                    onOk={deleteAccount}
                    onCancel={() => setShowDeleteModal(false)}
                    okText={t(tBase + ".deleteAccountButton")}
                    cancelText={t("common.cancel")}
                >
                    <p className="text text--light">{t(tBase + ".deleteAccountText")}</p>
                </Modal>
            </section>
        </div>
    );
};

SectionSecurityAccount.propTypes = {
    changePasswordErrors: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    changePasswordErrors: state.errors.changePasswordErrors
});

export default connect(mapStateToProps, { deleteAccount, tryChangePassword })(SectionSecurityAccount);
