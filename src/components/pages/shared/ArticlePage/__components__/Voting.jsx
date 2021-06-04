import React from "react";

import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const Voting = (props) => {
    return (
        <div className="voting">
            <div className="ghostButtonGroup">
                <button className="ghostButton ghostButton--selected">
                    <span className="ghostButton__icon">
                        <ArrowUpOutlined />
                    </span>
                    1.5K
                </button>
                <button className="ghostButton ghostButton--noText ghostButton--silent">
                    <span className="ghostButton__icon">
                        <ArrowDownOutlined />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Voting;
