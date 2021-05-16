import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { GlobalUtils } from "@utils";

import "./SearchResults.less";
import ResultCard from "./ResultCard";
import SkeletonLoading from "./SkeletonLoading";
import { Pagination, Empty } from "antd";

function createResultCard(item, index, searchTags) {
    const isCollection = GlobalUtils.getValue(item, "isCollection", false);
    const isYourArticle = GlobalUtils.getValue(item, "isYourArticle", false);
    let color, label;
    
    if (isCollection) {
        color = "secondary";
        label = "Article collection";
    } else if (isYourArticle) {
        color = "primary";
        label = "Your article";
    }

    return (
        <ResultCard
            key={index}
            selected={isCollection || isYourArticle}
            color={color}
            extraLabel={label}
            searchTags={searchTags}
            data={item}
        />
    );
}

const SearchResults = (props) => {
    const { results, loading, page, searchTags } = props;

    const resultCards = results.map((item, index) => createResultCard(item, index, searchTags));
    const isEmpty = !GlobalUtils.hasLength(results);

    console.log(results);

    return (
        <div className="searchResults">
            {loading && <SkeletonLoading cardCount={page.pageSize} />}
            {isEmpty && !loading && (
                <div className="searchResults__empty">
                    <Empty description="No results found!" />
                </div>
            )}
            {!isEmpty && !loading && (
                <>
                    <div className="searchResults__cards">{resultCards}</div>
                    <div className="searchResults__pagination">
                        <Pagination
                            defaultCurrent={page.currentPage}
                            total={page.totalResultsFound}
                            pageSize={page.pageSize}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
    searchTags: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    page: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    results: state.search.results,
    loading: state.search.loading,
    page: {
        ...state.search.options.page,
        ...state.search.pageMetaData,
    },
    searchTags: state.search.options.search.searchTags
});

export default connect(mapStateToProps, {})(SearchResults);
