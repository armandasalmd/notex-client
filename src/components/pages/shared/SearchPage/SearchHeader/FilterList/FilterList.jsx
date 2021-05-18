import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setSomeFilterValue } from "@actions/searchActions";

import "./FilterList.less";

const FilterList = (props) => {
    const { name, options, defaultValue, selectedValue, reduxName } = props;

    const handleChange = (value) => {
        const valueToSet = selectedValue === value ? defaultValue : value;
        props.setSomeFilterValue(reduxName, valueToSet);
    };
    
    const items = options.map((option, index) => {
        const classes = classnames("filterList__item", {
            "filterList__item--selected": option.value === selectedValue
        });

        return <li className={classes} key={index} onClick={() => handleChange(option.value)}>{option.name}</li>;
    });

    return (
        <div className="filterList">
            <h1 className="filterList__title">{name}</h1>
            <ul className="filterList__list">
                {items}
            </ul>
        </div>
    );
};

FilterList.propTypes = {
    setSomeFilterValue: PropTypes.func.isRequired
};

export default connect(null, { setSomeFilterValue })(FilterList);
