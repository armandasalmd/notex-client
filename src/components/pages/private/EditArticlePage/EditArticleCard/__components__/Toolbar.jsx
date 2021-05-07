import React from "react";
import { I18n } from "react-redux-i18n";

import { Row, Col, Space, Button, Tooltip } from "antd";
import { ShareAltOutlined, CloseOutlined, SyncOutlined } from "@ant-design/icons";

const Toolbar = (props) => {
    const { actions } = props;

    return (
        <Row justify="space-between">
            <Col>
                <h3 className="title title--light">Article settings</h3>
            </Col>
            <Col>
                <Space>
                    <Button
                        onClick={actions.onSync}
                        type="primary"
                        ghost
                        shape="circle"
                        icon={<SyncOutlined />}
                    ></Button>
                    <Tooltip placement="bottom" title={I18n.t("dashboard.noteCard.toolbar.shareTooltip")}>
                        <Button
                            onClick={actions.onCopyUrl}
                            type="primary"
                            ghost
                            shape="circle"
                            icon={<ShareAltOutlined />}
                        ></Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title={I18n.t("dashboard.noteCard.toolbar.closeNote")}>
                        <Button danger shape="circle" icon={<CloseOutlined />} onClick={actions.onClose}></Button>
                    </Tooltip>
                </Space>
            </Col>
        </Row>
    );
};

export default Toolbar;
