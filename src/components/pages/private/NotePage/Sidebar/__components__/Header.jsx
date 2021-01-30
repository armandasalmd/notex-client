import React, { useState } from "react";
import classnames from "classnames";
import { GlobalUtils } from "@utils";

import { Button } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import SingleFieldModal from "##/SingleFieldModal";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNewNotebook } from "@actions/noteActions";

const Header = props => {
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [addLoading, setAddLoading] = useState(false);

    const submitAdd = async submitText => {
        setAddLoading(true);
        await props.addNewNotebook(props.backpack, submitText, GlobalUtils.getValue(props.auth, "user.email"));
        setAddLoading(false);
        setModalAddOpen(false);
    };

    return (
        <div className="sidebar-header">
            <h1 className="header header--medium">Your backpack</h1>
            <div className="sidebar-actions">
                <Button onClick={() => setModalAddOpen(true)} shape="circle" icon={<PlusOutlined className="shade50" />}></Button>
                <Button
                    className={classnames({
                        "gone-big-screen": !props.isHamburgerMenu
                    })}
                    danger
                    shape="circle"
                    icon={<CloseOutlined />}
                    onClick={props.onClose}
                />
                <SingleFieldModal
                    textPlaceholder="Enter notebook title"
                    title="Add new notebook"
                    loading={addLoading}
                    visible={modalAddOpen}
                    setVisible={setModalAddOpen}
                    onSubmit={submitAdd}
                />
            </div>
        </div>
    );
};

Header.propTypes = {
    addNewNotebook: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    backpack: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    backpack: state.app.backpack
});

export default connect(mapStateToProps, { addNewNotebook })(Header);
