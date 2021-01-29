import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Constants } from "@utils";

import "./SectionSecurityAccount.less";
import { Button, Modal, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import SocialButton from "##/SocialButton";

const SectionSecurityAccount = () => {
    const { t } = useTranslation();
    const tBase = "settings.sections.securityAndAccount";

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [passwordOld, setOldPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const updatePassword = () => {
        console.log("Update password");
        console.log(passwordOld);
        console.log(password1);
        console.log(password2);
    };

    const deleteAccount = () => {
        console.log("Delete this account");
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

export default SectionSecurityAccount;
