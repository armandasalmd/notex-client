import React from "react";

import { Select } from "antd";

const { Option } = Select;

const ArticleAccessPicker = (props) => {
    return (
        <Select onChange={props.onChange} value={props.value.toString()}>
            <Option value="0">Published</Option>
            <Option value="1">Unlisted</Option>
            <Option value="2">Private</Option>
        </Select>
    );
};

export default ArticleAccessPicker;