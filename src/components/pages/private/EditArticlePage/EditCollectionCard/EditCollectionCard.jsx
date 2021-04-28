import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { EditArticleUtils, GlobalUtils } from "@utils";
import { setEditArticle, changeAccess } from "@actions/editArticleActions";

import "./EditCollectionCard.less";
import { Button, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { EditCollectionActions, EditCollectionDetails, ArticlesTable } from "./__components__";

const EditCollectionCard = (props) => {
    const [addArticleOpen, setAddArticleOpen] = useState(false);

    const actions = {
        onAccessChange: (value) => {
            props.changeAccess(props.collectionId, value, true);
        },
        onRemoveCollection: () => {
            console.log("Delete collection", props.collectionId);
        },
        onSync: () => {
            console.log("On sync", props.collectionId);
        }
    };

    const articleActions = {
        onEdit: (identifier) => {
            if (props.selectedArticleId !== identifier) {
                props.setEditArticle(identifier)
            }
        },
        onSync: (identifier) => {
            console.log("Sync", identifier);
        },
        onDelete: (identifier) => {
            console.log("Remove", identifier);
        },
        onAccessStatusChange: (value, identifier) => {
            props.changeAccess(identifier, value, false);
        }
    };

    const onDetailsChange = (title, description) => {
        console.log(title, description);
    };

    const onOpenAddArticle = () => setAddArticleOpen(true);
    const rawArticles = EditArticleUtils.getArticlesFromResponse(props.collection);

    return (
        <Spin spinning={props.loading}>
            <div className="card editCollectionCard">
                <div className="card__header card__header--separatorDashed">
                    <div className="editCollectionCard__header">
                        <h3 className="editCollectionCard__title">Collection settings</h3>
                        <EditCollectionActions accessStatus={GlobalUtils.getValue(props.collection, EditArticleUtils.collectionSummaryModel.accessStatus)} {...actions} />
                    </div>
                    <EditCollectionDetails
                        loading={props.loading}
                        onDetailsChange={onDetailsChange}
                        title={EditArticleUtils.getCollectionTitle(props.collection)}
                        description={EditArticleUtils.getCollectionDescription(props.collection)} />
                </div>
                <div className="card__content">
                    <div className="editCollectionCard__header">
                        <span>
                            <h3 className="editCollectionCard__title">Articles in collection</h3>
                            <p className="editCollectionCard__description">Select article from table to preview</p>
                        </span>
                        <Button type="primary" className="editCollectionCard__button" onClick={onOpenAddArticle} icon={<PlusOutlined />}>Add new article</Button>
                    </div>
                    <ArticlesTable rawArticles={rawArticles} actions={articleActions} className="editCollectionCard__articlesTable" />
                </div>
            </div>
        </Spin>
    );
};

EditCollectionCard.propTypes = {
    loading: PropTypes.bool.isRequired,
    selectedArticleId: PropTypes.string.isRequired,
    collection: PropTypes.object.isRequired,
    collectionId: PropTypes.string.isRequired,
    setEditArticle: PropTypes.func.isRequired,
    changeAccess: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loading: state.editArticle.collectionCardLoading,
    selectedArticleId: state.editArticle.selectedArticleId,
    collectionId: state.editArticle.selectedCollectionId,
    collection: state.editArticle.selectedCollection
});

export default connect(mapStateToProps, { setEditArticle, changeAccess })(EditCollectionCard);
