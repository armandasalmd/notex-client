import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { initialiseEditCollection } from "@actions/editArticleActions";
import { GlobalUtils, RouteVariables } from "@utils";

import { ArrowLeftOutlined } from "@ant-design/icons";

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
        <div>
            <button className="ghostButton ghostButton--silent" onClick={returnToMenu}>
                <span className="ghostButton__icon">
                    <ArrowLeftOutlined />
                </span>
                Management menu
            </button>    
            <p>{selectedCollectionId}</p>
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
