import React from "react";

import { Input } from "antd";

const { Search } = Input;

const SummarySearch = (props) => {
    const { searching, onSearch } = props;

    return (
        <div className="articleManagement__search">
            <p>Search for articles or collections</p>
            <Search
                loading={searching}
                onSearch={onSearch}
                style={{ width: 324 }}
                placeholder="Type to search"
                enterButton="Search"
            />
        </div>
    );
};

export default SummarySearch;