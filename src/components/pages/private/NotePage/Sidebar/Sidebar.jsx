import React from "react";

import { I18n } from "react-redux-i18n";
import classnames from "classnames";

import { useSelector } from "react-redux";

import "./Sidebar.less";
import { Header, NotebookMenu } from "./__components__";
import { Empty, Spin } from "antd";
import { GlobalUtils } from "@utils";

const Sidebar = (props) => {
    const backpack = useSelector((state) => state.app.backpack);
    const isMenuLoading = useSelector((state) => state.app.isMenuLoading);

    const isSpinning = !backpack.isFetched || isMenuLoading;
    const tryCloseMenu = () => GlobalUtils.callIfFunction(props.closeMenu);

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
                { !GlobalUtils.hasLength(backpack.notebooks) && !isSpinning && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={I18n.t("menu.noNotebooks")} /> }
            </Spin>
        </div>
    );
};

export default Sidebar;
