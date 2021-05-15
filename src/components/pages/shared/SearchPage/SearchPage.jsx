import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { search } from "@actions/searchActions";

import "./SearchPage.less";
import SearchBanner from "./SearchBanner";
import SearchHeader from "./SearchHeader";
import SearchResults from "./SearchResults";

const SearchPage = (props) => {
    
    const onSearch = () => {
        const options = {
            ...props.options.search,
            ...props.options.filters,
            ...props.options.page
        };

        props.search(options);
    };

    return (
        <div className="searchPage">
            <SearchBanner onSearch={onSearch} />
            <SearchHeader />
            <SearchResults />
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
