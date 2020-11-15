import React from "react";

import { Constants } from "@utils";
import { Spin } from "antd";

const SpinnerContainer = () => {
    return (
        <div className="spinner-container flex-center" style={{ height: Constants.mceOptions.height }}>
            <Spin size="large" />
        </div>
    );
};

export default SpinnerContainer;
