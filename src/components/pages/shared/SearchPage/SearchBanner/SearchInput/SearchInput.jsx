import React, { useState } from "react";

import { Select } from "antd";

const { Option } = Select;

const fakeFetchData = () => [];

const SearchInput = (props) => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState([]);

    const options = data.map((d) => <Option key={d.value}>{d.text}</Option>);

    function handleSearch(value) {
        if (value) {
            setData(fakeFetchData());
        } else {
            setData([]);
        }
    }

    function handleChange(value) {
        setValue(value);
    }

    return (
        <Select
            showSearch
            value={value}
            placeholder={props.placeholder}
            style={props.style}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            notFoundContent={null}
        >
            {options}
        </Select>
    );
};

export default SearchInput;
