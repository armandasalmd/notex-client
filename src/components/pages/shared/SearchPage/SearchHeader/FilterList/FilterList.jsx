import React from "react";
import "./FilterList.less";

const FilterList = (props) => {
    const { name, options } = props;

    const items = options?.map((option, index) => <li className="filterList__item" key={index}>{option}</li>);

    return (
        <div className="filterList">
            <h1 className="filterList__title">{name}</h1>
            <ul className="filterList__list">
                {items}
            </ul>
        </div>
    );
};

export default FilterList;