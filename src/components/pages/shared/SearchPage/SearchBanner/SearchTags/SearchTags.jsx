import React from "react";
import availableTags from "../../../../../../assets/fakeData/categories.json";

import { Select } from "antd";

const { Option } = Select;

const SearchTags = (props) => {
    const children = [];

    for (let tag of availableTags) {
        children.push(<Option key={tag}>{tag}</Option>);
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Select mode="tags" style={{ width: "100%" }} placeholder="Preferred article tags" onChange={handleChange}>
            {children}
        </Select>
    );
};

export default SearchTags;
