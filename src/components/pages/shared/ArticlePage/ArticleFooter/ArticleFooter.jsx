import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { GlobalUtils, ReadingUtils } from "@utils";
import { selectFooterTab } from "@actions/readingActions";

import "./ArticleFooter.less";
import { ArticleListRenderer } from "../__components__";
import FooterToolbar from "./FooterToolbar";

const { footerCollections: collections } = ReadingUtils;

export const ArticleFooter = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.reading.footer);

    const tabCollection = useSelector((state) => state.reading.state.readNextTab);
    const setTabCollection = (tab) => dispatch(selectFooterTab(tab));

    const getCollectionData = (collection) => GlobalUtils.getValue(data, collection.reduxKey, []);
    const getSelectedCollectionData = () => getCollectionData(tabCollection);

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

export default ArticleFooter;
