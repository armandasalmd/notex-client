import React, { useEffect, useRef } from "react";
import { I18n } from "react-redux-i18n";
import copy from 'copy-to-clipboard';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { RouteVariables, MessageUtils } from "@utils";
import { setEditArticle, syncResource, saveArticleDetails } from "@actions/editArticleActions";

import "./EditArticleCard.less";
import { Spin, message } from "antd";
import { ArticleDetailsForm, Toolbar } from "./__components__";

const EditArticleCard = (props) => {
    const thisRef = useRef(null);

    const actions = {
        onSync: () => {
            MessageUtils.handleDispatched(props.syncResource(props.articleId, false, true));
        },
        onCopyUrl: () => {
            const route = RouteVariables.app.shared.article;
            const url = window.location.origin + route.link.replace(":" + route.paramNames.identifier, props.articleId);

            copy(url);
            message.success(I18n.t("common.urlCopy"));
        },
        onClose: () => {
            MessageUtils.handleDispatched(props.setEditArticle(null));
        }
    };

    const onSave = (formData) => {
        formData.articleGuid = props.articleId;

        props.saveArticleDetails(formData)
            .then((data) => {
                if (data?.success) {
                    message.success("Successfully updated");
                }
            })
            .catch(() => {
                message.error("Cannot update article");
            });
    };

    useEffect(() => {
        if (thisRef && thisRef.current) {
            thisRef.current.scrollIntoView();
        }
    }, [thisRef]);

    return (
        <Spin spinning={props.loading}>
            <div ref={thisRef} className="card editArticleCard">
                <div className="card__content">
                    <Toolbar loading={props.loading} actions={actions} />
                    <ArticleDetailsForm article={props.article} className="editArticleCard__form" sourceMetaData={props.backpackMetaData} onSubmit={onSave} />
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
    syncResource: PropTypes.func.isRequired,
    saveArticleDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loading: state.editArticle.articleCardLoading,
    articleId: state.editArticle.selectedArticleId,
    article: state.editArticle.selectedArticle,
    backpackMetaData: state.editArticle.backpackMetaData
});

export default connect(mapStateToProps, { 
    setEditArticle,
    syncResource,
    saveArticleDetails
})(EditArticleCard);
