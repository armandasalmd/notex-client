import React from "react";

import "./SearchResults.less";
import ResultCard from "./ResultCard";
import { Pagination } from "antd";

import fakeSearchResults from "../../../../../assets/fakeData/searchResults.json";

const SearchResults = () => {
    const resultCards = fakeSearchResults.map((item, index) => <ResultCard key={index} selected={!!item.extraLabel} extraLabel={item.extraLabel} color="secondary" data={item} onLovedChange={() => {}} />)

    return (
        <div className="searchResults">
            <div className="searchResults__cards">
                {resultCards}
            </div>
            <div className="searchResults__pagination">
                <Pagination defaultCurrent={1} total={50} defaultPageSize={20} />
            </div>
        </div>
    );
};

export default SearchResults;