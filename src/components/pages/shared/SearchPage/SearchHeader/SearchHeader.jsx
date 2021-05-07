import React, { useState } from "react";
import classnames from "classnames";

import "./SearchHeader.less";
import FilterList from "./FilterList";
import { FilterOutlined } from "@ant-design/icons";
import { Switch } from "antd";

import fakeSearchFilters from "../../../../../assets/fakeData/searchFilters.json";

const SearchHeader = () => {
    const [filterOpen, setFilterOpen] = useState(false);

    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }

    function toggleFilter() {
        setFilterOpen(!filterOpen);
    }

    if (filterOpen) {
        var FilterLists = fakeSearchFilters.map((filter, index) => <FilterList key={index} {...filter} />)
    }

    const headerClasses = classnames(["searchHeader"], {
        "searchHeader--spiked": filterOpen
    });

    return (
        <div className={headerClasses}>
            <div className="searchHeader__heading">
                <div className="searchHeader__summary">
                    <h1>Search results</h1>
                    <p>23 results found</p>
                </div>
                <div className="searchHeader__actions">
                    <div className="searchHeader__switch">
                        <Switch defaultChecked onChange={onChange} />
                        <span>Include collections</span>
                    </div>
                    <div className="searchHeader__toggle" onClick={toggleFilter}>
                        <FilterOutlined />
                        <span>Filter</span>
                    </div>
                </div>
            </div>
            {
                filterOpen &&
                <div className="searchHeader__filters">
                    {FilterLists}
                </div>
            }
        </div>
    );
};

export default SearchHeader;