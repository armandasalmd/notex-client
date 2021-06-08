import React, { useState } from "react";
import { I18n } from "react-redux-i18n";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { MessageUtils } from "@utils";
import { addNewNotebook } from "@actions/noteActions";

import { Button } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import SingleFieldModal from "##/SingleFieldModal";


const Header = props => {
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [addLoading, setAddLoading] = useState(false);

    const submitAdd = submitText => {
        setAddLoading(true);
        MessageUtils.handleDispatched(props.addNewNotebook(props.backpack, submitText));
        setAddLoading(false);
        setModalAddOpen(false);
    };

    return (
        <div className="sidebar-header">
            <h1 className="header header--medium">{I18n.t("menu.title")}</h1>
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
                    title={I18n.t("modals.addNotebook.title")}
                    textPlaceholder={I18n.t("modals.addNotebook.placeholder")}
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
