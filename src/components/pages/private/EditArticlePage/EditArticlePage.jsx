import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { initialiseEditCollection } from "@actions/editArticleActions";
import { GlobalUtils, RouteVariables } from "@utils";

import "./EditArticlePage.less";
import { ArrowLeftOutlined } from "@ant-design/icons";
import EditCollectionCard from "./EditCollectionCard";
import EditArticleCard from "./EditArticleCard";

const EditArticlePage = (props) => {
    const { initialiseEditCollection } = props;
    const { selectedCollectionId } = props.data;
    
    const history = useHistory();
    const params = useParams();
    
    const returnToMenu = () => history.replace(RouteVariables.app.private.articleManagement.link);

    useEffect(() => {
        const pageRoute = RouteVariables.app.private.editArticle;
        const collectionParameter = GlobalUtils.getValue(params, pageRoute.paramNames.collectionIdentifier, null);

        if (!GlobalUtils.hasLength(selectedCollectionId) && GlobalUtils.hasLength(collectionParameter)) {
            initialiseEditCollection(collectionParameter);
        }
    }, [params, initialiseEditCollection, selectedCollectionId]);
    
    return (
        <div className="editArticle">
            <div className="editArticle__backButton">
                <button className="ghostButton ghostButton--silent" onClick={returnToMenu}>
                    <span className="ghostButton__icon">
                        <ArrowLeftOutlined />
                    </span>
                    Management menu
                </button>
            </div>
            <div className="editArticle__header">
                <h1 className="header">Edit collection and articles</h1>
            </div>
            <EditCollectionCard />
            <div className="editArticle__separator"/>
            <EditArticleCard />
        </div>
    );
};

EditArticlePage.propTypes = {
    data: PropTypes.object.isRequired,
    initialiseEditCollection: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    data: state.editArticle
});

export default connect(mapStateToProps, { initialiseEditCollection })(EditArticlePage);
