import React from "react";
import { Input } from "antd";

const SearchInput = (props) => {
    const { onEnter, onChange } = props;

    return (
        <Input 
            placeholder="Enter search term..."
            style={props.style}
            onPressEnter={onEnter}
            onChange={onChange}
        />
    );
};

export default SearchInput;
