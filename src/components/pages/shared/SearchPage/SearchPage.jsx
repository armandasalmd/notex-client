import React from "react";

import "./SearchPage.less";
import SearchBanner from "./SearchBanner";
import SearchHeader from "./SearchHeader";
import SearchResults from "./SearchResults";

const SearchPage = () => {
    return (
        <div className="searchPage">
            <SearchBanner />
            <SearchHeader />
            <SearchResults />
        </div>
    );
};

export default SearchPage;