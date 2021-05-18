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
    const { results, loading, page, searchTags, onSearch } = props;

    const resultCards = results.map((item, index) => createResultCard(item, index, searchTags));
    const isEmpty = !GlobalUtils.hasLength(results);

    const onPageChange = (page, pageSize) => GlobalUtils.callIfFunction(onSearch, page, pageSize);
    const onPageSizeChange = (_, pageSize) => GlobalUtils.callIfFunction(onSearch, 1, pageSize);

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
                            current={page.pageNumber}
                            total={page.totalResultsFound}
                            pageSize={page.pageSize}
                            onChange={onPageChange}
                            onPageSizeChange={onPageSizeChange}
                            showSizeChanger
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
