import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { MessageUtils } from "@utils";
import { search } from "@actions/searchActions";

import "./SearchPage.less";
import SearchBanner from "./SearchBanner";
import SearchHeader from "./SearchHeader";
import SearchResults from "./SearchResults";

const SearchPage = (props) => {
    const onSearch = (pageNumber, pageSize) => {
        let storePageNumber = props.options.page.pageNumber;
        let storePageSize = props.options.page.pageSize;

        if (storePageNumber === pageNumber && storePageSize === pageSize) {
            return;
        }

        const options = {
            ...props.options.search,
            ...props.options.filters,
            pageNumber: typeof pageNumber === "number" ? pageNumber : storePageNumber,
            pageSize: typeof pageSize === "number" ? pageSize : storePageSize
        };

        MessageUtils.handleDispatched(props.search(options));
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

SearchPage.propTypes = {
    options: PropTypes.object.isRequired,
    search: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    options: state.search.options
});

export default connect(mapStateToProps, { search })(SearchPage);
