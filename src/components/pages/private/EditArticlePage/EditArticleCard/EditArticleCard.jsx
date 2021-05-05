import React, { useEffect, useRef } from "react";
import { I18n } from "react-redux-i18n";
import copy from 'copy-to-clipboard';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { RouteVariables } from "@utils";
import { setEditArticle, syncResource } from "@actions/editArticleActions";

import "./EditArticleCard.less";
import { Row, Spin, message } from "antd";
import { Toolbar } from "./__components__";

const EditArticleCard = (props) => {
    const thisRef = useRef(null);

    const actions = {
        onSave: () => {
            console.log("Save");
        },
        onSync: () => {
            props.syncResource(props.articleId, false, true);
        },
        onCopyUrl: () => {
            const route = RouteVariables.app.shared.article;
            const url = window.location.origin + route.link.replace(":" + route.paramNames.identifier, props.articleId);

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
                    <Toolbar loading={props.loading} actions={actions} />
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
    setEditArticle: PropTypes.func.isRequired,
    syncResource: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loading: state.editArticle.articleCardLoading,
    articleId: state.editArticle.selectedArticleId,
    article: state.editArticle.selectedArticle
});

export default connect(mapStateToProps, { setEditArticle, syncResource })(EditArticleCard);
