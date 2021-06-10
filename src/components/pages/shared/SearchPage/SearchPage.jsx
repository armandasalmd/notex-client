import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MessageUtils } from "@utils";
import { search } from "@actions/searchActions";

import "./SearchPage.less";
import SearchBanner from "./SearchBanner";
import SearchHeader from "./SearchHeader";
import SearchResults from "./SearchResults";

const SearchPage = () => {
    const dispatch = useDispatch();
    const options = useSelector((state) => state.search.options);

    const onSearch = (pageNumber, pageSize) => {
        let storePageNumber = options.page.pageNumber;
        let storePageSize = options.page.pageSize;

        if (storePageNumber === pageNumber && storePageSize === pageSize) {
            return;
        }

        const queryOptions = {
            ...options.search,
            ...options.filters,
            pageNumber: typeof pageNumber === "number" ? pageNumber : storePageNumber,
            pageSize: typeof pageSize === "number" ? pageSize : storePageSize
        };

        MessageUtils.handleDispatch(dispatch, search(queryOptions));
    };
    
    useEffect(() => {
        onSearch(); // initial load
    });

    return (
        <div className="searchPage">
            <SearchBanner onSearch={onSearch} />
            <SearchHeader />
            <SearchResults onSearch={onSearch} />
        </div>
    );
};

export default SearchPage;
