import React from "react";

import { Button, Input, Select } from "antd";

const { Option } = Select;

const ChangeNotebook = () => {
    const selectBefore = (
        <Select defaultValue="http://" className="select-before">
          <Option value="http://">History lessons</Option>
          <Option value="https://">Computer science</Option>
        </Select>
      );
      

    return (
        <div className="form__section">
            <h3 className="form__title">Put to other notebook</h3>
            <div className="form__items">
                <Input addonBefore={selectBefore} defaultValue="mysite" disabled />
                <Button>Save</Button>
            </div>
        </div>
    );
};

export default ChangeNotebook;
