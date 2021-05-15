import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { GlobalUtils } from "@utils";

import "./SearchResults.less";
import ResultCard from "./ResultCard";
import { Pagination, Empty } from "antd";

import fakeSearchResults from "../../../../../assets/fakeData/searchResults.json";

const SearchResults = (props) => {
    const { results } = props;
    
    const resultCards = fakeSearchResults.map((item, index) => <ResultCard key={index} selected={!!item.extraLabel} extraLabel={item.extraLabel} data={item} onLovedChange={() => {}} />)
    const isEmpty = !GlobalUtils.hasLength(results);

    return (
        <div className="searchResults">
            { 
                isEmpty &&
                <div className="searchResults__empty">
                    <Empty description="No results found!" />
                </div>
            }
            { 
                !isEmpty && 
                <>
                    <div className="searchResults__cards">
                        {resultCards}
                    </div>
                    <div className="searchResults__pagination">
                        <Pagination defaultCurrent={1} total={50} defaultPageSize={20} />
                    </div>
                </>
            }
        </div>
    );
};

SearchResults.propTypes = {
    results: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    results: state.search.results
});

export default connect(mapStateToProps, {})(SearchResults);
