import React, { useState } from "react";


import { Button, Input, Select } from "antd";

const { Option } = Select;

const ChangeNotebook = ({ noteName, notebookId, notebookOptions, onSubmit }) => {
    const [parent, setParent] = useState(notebookId);

    const selectBefore = (
        <Select onChange={setParent} value={parent} className="select-before">
            {notebookOptions.map(function (option) {
                return <Option key={option.value} value={option.value}>{option.name}</Option>;
            })}
        </Select>
    );

    return (
        <div className="form__section">
            <h3 className="form__title">Put to other notebook</h3>
            <div className="form__items">
                <Input addonBefore={selectBefore} defaultValue={noteName} disabled />
                <Button onClick={() => onSubmit(parent)}>Save</Button>
            </div>
        </div>
    );
};

export default ChangeNotebook;
