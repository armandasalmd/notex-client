import React from "react";

import "./SearchBanner.less";
import { SearchOutlined } from "@ant-design/icons";
import SearchInput from "./SearchInput";
import SearchTags from "./SearchTags";

const SearchBanner = () => {
    return (
        <div className="searchBanner">
            <h1 className="searchBanner__title">Where people knowledge finds you</h1>
            <p className="searchBanner__description">Search among thousands of other people articles</p>
            <div className="searchBanner__search">
                <div className="searchBanner__searchInput">
                    <SearchInput placeholder="Search by keyword" style={{width: "100%"}} />
                </div>
                <div className="searchBanner__tagInput">
                    <SearchTags />
                </div>
                <button className="searchBanner__searchButton">
                    <SearchOutlined /> Search
                </button>
            </div>
        </div>
    );
};

export default SearchBanner;