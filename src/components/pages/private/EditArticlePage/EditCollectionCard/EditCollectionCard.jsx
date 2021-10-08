import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { EditArticleUtils, GlobalUtils, MessageUtils } from "@utils";
import { 
    setEditArticle,
    changeAccess,
    updateCollectionDetails,
    deleteAndCloseCollection,
    syncResource,
    fetchBackpackMetaData,
    deleteArticle
} from "@actions/editArticleActions";

import "./EditCollectionCard.less";
import { Alert, Button, Spin, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { EditCollectionActions, EditCollectionDetails, ArticlesTable } from "./__components__";
import CreateArticleModal from "../../CreateArticleModal";

const EditCollectionCard = (props) => {
    const history = useHistory();
    const { backpackMetaData, fetchBackpackMetaData } = props;
    const [addArticleOpen, setAddArticleOpen] = useState(false);

    const actions = {
        onAccessChange: (value) => {
            MessageUtils.handleDispatched(props.changeAccess(props.collectionId, value, true));
        },
        onRemoveCollection: () => {
            MessageUtils.handleDispatched(props.deleteAndCloseCollection(props.collectionId, history));
        },
        onSync: () => {
            MessageUtils.handleDispatched(props.syncResource(props.collectionId, true));
        }
    };

    const articleActions = {
        onEdit: (identifier) => {
            if (props.selectedArticleId !== identifier) {
                MessageUtils.handleDispatched(props.setEditArticle(identifier));
            }
        },
        onSync: (identifier) => {
            MessageUtils.handleDispatched(props.syncResource(identifier, false));
        },
        onDelete: (identifier) => {
            if (identifier === props.selectedArticleId) {
                MessageUtils.handleDispatched(props.setEditArticle(null));
            }

            props.deleteArticle(identifier)
                .then((data) => {
                    if (data?.success) {
                        message.success("Successfully removed");
                    }
                })
                .catch(() => {
                    message.error("Cannot remove article");
                });
        },
        onAccessStatusChange: (value, identifier) => {
            if (props.selectedArticleId === identifier) {
                MessageUtils.handleDispatched(props.setEditArticle(null));
            }
            
            MessageUtils.handleDispatched(props.changeAccess(identifier, value, false));
        }
    };

    const onDetailsChange = (title, description) => {
        MessageUtils.handleDispatched(props.updateCollectionDetails(props.collectionId, title, description));
    };

    const onOpenAddArticle = () => setAddArticleOpen(true);
    const rawArticles = EditArticleUtils.getArticlesFromResponse(props.collection);

    const collectionTitle = GlobalUtils.getValue(props.collection, EditArticleUtils.collectionSummaryModel.title, "unknown");
    const collectionAccess = GlobalUtils.getValue(props.collection, EditArticleUtils.collectionSummaryModel.accessStatus);

    useEffect(() => {
        if (backpackMetaData == null) {
            MessageUtils.handleDispatched(fetchBackpackMetaData());
        }
    }, [backpackMetaData, fetchBackpackMetaData]);

    return (
        <Spin spinning={props.loading}>
            <div className="card editCollectionCard">
                <div className="card__header card__header--separatorDashed">
                    <div className="editCollectionCard__header">
                        <h3 className="editCollectionCard__title">Collection settings</h3>
                        <EditCollectionActions accessStatus={collectionAccess} {...actions} />
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
                    <div>
                    {
                        // eslint-disable-next-line
                        (collectionAccess == 1 || collectionAccess == 2) &&
                        <Alert className="editCollectionCard__alert" message="This article collection is not published. Published articles are not visable in the search!" type="warning" />
                    }
                    </div>
                    <ArticlesTable rawArticles={rawArticles} actions={articleActions} className="editCollectionCard__articlesTable" />
                </div>
                <CreateArticleModal sourceMetaData={backpackMetaData} collectionTitle={collectionTitle} collectionId={props.collectionId} visible={addArticleOpen} onClose={() => setAddArticleOpen(false)} />
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
    changeAccess: PropTypes.func.isRequired,
    updateCollectionDetails: PropTypes.func.isRequired,
    deleteAndCloseCollection: PropTypes.func.isRequired,
    syncResource: PropTypes.func.isRequired,
    fetchBackpackMetaData: PropTypes.func.isRequired,
    deleteArticle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loading: state.editArticle.collectionCardLoading,
    selectedArticleId: state.editArticle.selectedArticleId,
    collectionId: state.editArticle.selectedCollectionId,
    collection: state.editArticle.selectedCollection,
    backpackMetaData: state.editArticle.backpackMetaData
});

export default connect(mapStateToProps, { 
    setEditArticle,
    changeAccess,
    updateCollectionDetails,
    deleteAndCloseCollection,
    syncResource,
    fetchBackpackMetaData,
    deleteArticle
})(EditCollectionCard);
