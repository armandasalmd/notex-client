import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { GlobalUtils, ReadingUtils } from "@utils";

import "./ArticleFooter.less";
import { ArticleListRenderer } from "../__components__";
import FooterToolbar from "./FooterToolbar";

const { footerCollections: collections } = ReadingUtils;

export const ArticleFooter = (props) => {
    const getCollectionData = (collection) => GlobalUtils.getValue(props.data, collection.reduxKey, []);

    const [tabCollection, setTabCollection] = useState((function () {
        let data = getCollectionData(collections.articlesInCollection);

        return GlobalUtils.hasLength(data) ? collections.articlesInCollection : collections.suggestedArticles;
    })());

    const getSelectedCollectionData = () => {
        return getCollectionData(tabCollection);
    };

    return (
        <div className="articlePage__footer" id="footer-toolbar">
            <FooterToolbar className="articlePage__footerToolbar" 
                tabs={collections} 
                selectedTab={tabCollection} 
                setSelectedTab={setTabCollection} />
            <div className="articlePage__footerContent">
                <h1 className="header">{tabCollection.title}</h1>
                <ArticleListRenderer source={getSelectedCollectionData()} />
            </div>
        </div>
    );
};

ArticleFooter.propTypes = {
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.reading.footer
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFooter);
