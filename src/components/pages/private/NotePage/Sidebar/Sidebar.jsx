import React from "react";

import { I18n } from "react-redux-i18n";
import classnames from "classnames";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./Sidebar.less";
import { Header, NotebookMenu } from "./__components__";
import { Empty, Spin } from "antd";
import { GlobalUtils } from "@utils";

const Sidebar = (props) => {
    const isSpinning = !props.backpack.isFetched || props.app.isMenuLoading;

    const tryCloseMenu = () => {
        GlobalUtils.callIfFunction(props.closeMenu);
    };

    return (
        <div
            className={classnames({
                "sidebar-root": true,
                "gone-small-screen": !props.hamburgerMenu,
            })}
        >
            <Spin spinning={isSpinning}>
                <Header
                    isHamburgerMenu={props.hamburgerMenu}
                    onClose={tryCloseMenu}
                />
                <NotebookMenu tryCloseMenu={tryCloseMenu} />
                { !GlobalUtils.hasLength(props.app.backpack.notebooks) && !isSpinning && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={I18n.t("menu.noNotebooks")} /> }
            </Spin>
        </div>
    );
};

Sidebar.propTypes = {
    app: PropTypes.object.isRequired,
    backpack: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    app: state.app,
    backpack: state.app.backpack,
});

export default connect(mapStateToProps, {})(Sidebar);
