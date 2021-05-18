import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { GlobalUtils } from "@utils";
import { setSearchTags, setSearchTerm } from "@actions/searchActions";

import "./SearchBanner.less";
import { SearchOutlined, LoadingOutlined } from "@ant-design/icons";
import SearchInput from "./SearchInput";
import SearchTags from "./SearchTags";

const SearchBanner = (props) => {
    const { onSearch, loading } = props;

    const handleSearch = () => {
        if (!loading) {
            onSearch(1);
        }
    };

    const handleTagChange = (value) => {
        props.setSearchTags(value);
    };
    
    const handleTermChange = (e) => {
        props.setSearchTerm(GlobalUtils.getValue(e, "target.value", ""));
    };

    const buttonClasses = classnames("searchBanner__searchButton", {
        "searchBanner__searchButton--loading": loading
    });

    return (
        <div className="searchBanner">
            <h1 className="searchBanner__title">Where people knowledge finds you</h1>
            <p className="searchBanner__description">Search among thousands of other people articles</p>
            <div className="searchBanner__search">
                <div className="searchBanner__searchInput">
                    <SearchInput placeholder="Search by keyword" style={{width: "100%"}} onChange={handleTermChange} onEnter={handleSearch} />
                </div>
                <div className="searchBanner__tagInput">
                    <SearchTags onChange={handleTagChange} />
                </div>
                <button className={buttonClasses} onClick={handleSearch}>
                    {
                        loading && <LoadingOutlined spin />
                    }
                    {
                        !loading && <SearchOutlined />
                    }
                    <p className="searchBanner__searchButtonText">Search</p>
                </button>
            </div>
        </div>
    );
};

SearchBanner.propTypes = {
    searchOptions: PropTypes.object.isRequired,
    setSearchTags: PropTypes.func.isRequired,
    setSearchTerm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    searchOptions: state.search.options.search,
    loading: state.search.loading
});

export default connect(mapStateToProps, { setSearchTags, setSearchTerm })(SearchBanner);
