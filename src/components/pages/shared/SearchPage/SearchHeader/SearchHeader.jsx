import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { GlobalUtils, SearchUtils } from "@utils";
import { setIncludeCollections } from "@actions/searchActions";

import "./SearchHeader.less";
import FilterList from "./FilterList";
import { FilterOutlined } from "@ant-design/icons";
import { Switch } from "antd";

const SearchHeader = (props) => {
    const { totalResultsFound, filters } = props;
    const [filterOpen, setFilterOpen] = useState(false);

    function onChange(checked) {
        props.setIncludeCollections(checked);
    }

    function toggleFilter() {
        setFilterOpen(!filterOpen);
    }

    if (filterOpen) {
        var FilterLists = SearchUtils.searchFilters.map((filterMeta, index) => (
            <FilterList
                {...filterMeta}
                key={index}
                selectedValue={GlobalUtils.getValue(filters, filterMeta.reduxName, 0)}
            />
        ));
    }

    const headerClasses = classnames("searchHeader", {
        "searchHeader--spiked": filterOpen
    });

    return (
        <div className={headerClasses}>
            <div className="searchHeader__heading">
                <div className="searchHeader__summary">
                    <h1>Search results</h1>
                    {totalResultsFound > 0 && <p>{totalResultsFound} results found</p>}
                </div>
                <div className="searchHeader__actions">
                    <div className="searchHeader__switch">
                        <Switch checked={filters.includeCollections} onChange={onChange} />
                        <span>Include collections</span>
                    </div>
                    <div className="searchHeader__toggle" onClick={toggleFilter}>
                        <FilterOutlined />
                        <span>Filter</span>
                    </div>
                </div>
            </div>
            {filterOpen && <div className="searchHeader__filters">{FilterLists}</div>}
        </div>
    );
};

SearchHeader.propTypes = {
    totalResultsFound: PropTypes.number.isRequired,
    filters: PropTypes.object.isRequired,
    setIncludeCollections: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    totalResultsFound: state.search.pageMetaData.totalResultsFound,
    filters: state.search.options.filters,
});

export default connect(mapStateToProps, { setIncludeCollections })(SearchHeader);
