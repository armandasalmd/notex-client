import React from "react";
import classnames from "classnames";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./Sidebar.less";
import { Header, NotebookMenu } from "./__components__";
import { Spin } from "antd";
import { GlobalUtils } from "@utils";

const Sidebar = props => {
    const tryCloseMenu = () => {
        GlobalUtils.callIfFunction(props.closeMenu);
    };

    return (
        <div
            className={classnames({
                "sidebar-root": true,
                "gone-small-screen": !props.hamburgerMenu
            })}
        >
            <Spin spinning={!props.backpack.isFetched || props.app.isMenuLoading }>
                <Header isHamburgerMenu={props.hamburgerMenu} onClose={tryCloseMenu} />
                <NotebookMenu tryCloseMenu={tryCloseMenu} />
            </Spin>
        </div>
    );
};

Sidebar.propTypes = {
    app: PropTypes.object.isRequired,
    backpack: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    app: state.app,
    backpack: state.app.backpack
});

export default connect(mapStateToProps, {})(Sidebar);
