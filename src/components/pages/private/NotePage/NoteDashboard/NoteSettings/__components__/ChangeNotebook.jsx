import React from "react";

import { Button, Input, Select } from "antd";

const { Option } = Select;

const ChangeNotebook = () => {
    const selectBefore = (
        <Select defaultValue="http://" className="select-before">
          <Option value="http://">History notebook</Option>
          <Option value="https://">Kithen notes</Option>
          <Option value="https://">My todo list</Option>
        </Select>
      );
      

    return (
        <div className="form__section">
            <h3 className="form__title">Put to other notebook</h3>
            <div className="form__items">
                <Input addonBefore={selectBefore} defaultValue="Second World War" disabled />
                <Button>Save</Button>
            </div>
        </div>
    );
};

export default ChangeNotebook;
