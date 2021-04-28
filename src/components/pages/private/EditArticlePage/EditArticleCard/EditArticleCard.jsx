import React, { useEffect, useRef } from "react";
import { I18n } from "react-redux-i18n";
import copy from 'copy-to-clipboard';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setEditArticle } from "@actions/editArticleActions";

import "./EditArticleCard.less";
import { Button, Row, Col, Tooltip, Space, Spin, message } from "antd";
import { ShareAltOutlined, CloseOutlined, SaveOutlined } from "@ant-design/icons";

const EditArticleCard = (props) => {
    const thisRef = useRef(null);

    const actions = {
        onSave: () => {
            console.log("Save");
        },
        onCopyUrl: () => {
            const url = window.location.origin + (window.location.pathname + "/" + props.articleId).replace("//", "/");
            
            copy(url);
            message.success(I18n.t("common.urlCopy"));
        },
        onClose: () => {
            props.setEditArticle(null);
        }
    };

    useEffect(() => {
        if (thisRef && thisRef.current) {
            thisRef.current.scrollIntoView();
        }
    }, [thisRef]);

    return (
        <Spin spinning={props.loading}>
            <div ref={thisRef} className="card editArticleCard" style={{height: 250}}>
                <div className="card__content">
                    <Row className="note-row-toolbar" justify="space-between">
                        <Col>
                            <h3 className="title title--light">Article settings</h3>
                        </Col>
                        <Col>
                            <Space>
                                <Button
                                    loading={props.loading}
                                    onClick={actions.onSave}
                                    type="primary"
                                    shape="round"
                                    icon={<SaveOutlined />}
                                >
                                    {I18n.t("dashboard.noteCard.toolbar.save")}
                                </Button>
                                <Tooltip placement="bottom" title={I18n.t("dashboard.noteCard.toolbar.shareTooltip")}>
                                    <Button onClick={actions.onCopyUrl} className="action-share" type="primary" ghost shape="circle" icon={<ShareAltOutlined />}></Button>
                                </Tooltip>
                                <Tooltip placement="bottom" title={I18n.t("dashboard.noteCard.toolbar.closeNote")}>
                                    <Button
                                        danger
                                        shape="circle"
                                        icon={<CloseOutlined />}
                                        onClick={actions.onClose}
                                    ></Button>
                                </Tooltip>
                            </Space>
                        </Col>
                    </Row>
                    <Row>
                        <p>Some content</p>
                    </Row>
                </div>
            </div>
        </Spin>
    );
};

EditArticleCard.propTypes = {
    loading: PropTypes.bool.isRequired,
    article: PropTypes.object.isRequired,
    articleId: PropTypes.string.isRequired,
    setEditArticle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loading: state.editArticle.articleCardLoading,
    articleId: state.editArticle.selectedArticleId,
    article: state.editArticle.selectedArticle
});

export default connect(mapStateToProps, { setEditArticle })(EditArticleCard);
