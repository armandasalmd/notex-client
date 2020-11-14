import React, { useState } from "react";

import { Constants } from "@utils";

import "./SectionSecurityAccount.less";
import { Button, Modal, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import SocialButton from "##/SocialButton";

const SectionSecurityAccount = () => {
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
                <p className="text text--form-label">Change password</p>
                <div className="wrap-container">
                    <Input.Password style={{width: 256}} value={passwordOld} onChange={(e) => setOldPassword(e.target.value)} placeholder="Old password" />
                    <Input.Password style={{width: 256}} value={password1} onChange={(e) => setPassword1(e.target.value)} placeholder="New password" />
                    <Input.Password style={{width: 256}} value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat password" />
                </div>
                <Button onClick={updatePassword}>Update</Button>
            </section>
            <section>
                <p className="text text--form-label">Link social account</p>
                <div className="wrap-container">
                    <SocialButton small width="256px" options={Constants.socialButtonTypes.google} />
                    <SocialButton small width="256px" options={Constants.socialButtonTypes.facebook} />
                </div>
            </section>
            <section>
                <p className="text text--form-label">Dangerous actions</p>
                <Button icon={<DeleteOutlined />} onClick={() => setShowDeleteModal(true)} danger>
                    Delete this account
                </Button>
                <Modal
                    title="Are you sure?"
                    visible={showDeleteModal}
                    onOk={deleteAccount}
                    onCancel={() => setShowDeleteModal(false)}
                    okText="Delete account"
                    cancelText="Cancel"
                >
                    <p className="text text--light">You are about to delete this account with all notes. After this you will be logged out</p>
                </Modal>
            </section>
        </div>
    );
};

export default SectionSecurityAccount;
