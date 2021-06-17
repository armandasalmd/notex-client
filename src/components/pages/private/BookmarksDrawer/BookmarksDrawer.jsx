import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BookmarkUtils, GlobalUtils, MessageUtils } from "@utils";
import { loadAndOpenBookmarks, removeBookmarkItem, setActivePage } from "@actions/bookmarkActions";

import "./BookmarksDrawer.less";
import { Col, Drawer, Empty, Skeleton, Pagination, Row } from "antd";
import ArticleListCard from "##/ArticleListCard";

function createBookmarkItems(bookmarks, removeFn) {
    return GlobalUtils.hasLength(bookmarks) ? bookmarks.map(_toListComponent) : [<Empty key={0} />];

    function _toListComponent(bookmark, index) {
        return <Col key={index} span={24}><ArticleListCard articleData={bookmark} onClose={removeFn} small /></Col>
    }
}

const BookmarksDrawer = (props) => {
    const dispatch = useDispatch();
    const { visible, setVisible } = props;

    const bookmarkState = useSelector((state) => state.bookmark);

    useEffect(() => {
        if (bookmarkState.loading === false && bookmarkState.page.totalResults < 0 && !isPageLoaded(1)) {
            MessageUtils.handleDispatch(dispatch, loadAndOpenBookmarks(1), "Cannot load your bookmarks", function () {
                setVisible(false);
            });
        }
    });

    const getBookmarks = (pageNumber) => BookmarkUtils.getPageBookmarks(bookmarkState.bookmarks, pageNumber);

    const isPageLoaded = (pageNumber) => GlobalUtils.hasLength(getBookmarks(pageNumber));

    const onPageChange = (pageNumber) => {
        if (isPageLoaded(pageNumber)) {
            dispatch(setActivePage(pageNumber));
        } else {
            MessageUtils.handleDispatch(dispatch, loadAndOpenBookmarks(pageNumber));
        }
    };

    const onDrawerClose = () => {
        dispatch(setActivePage(1));
        setVisible(false);
    };

    const onRemoveBookmark = (articleData) => {
        let identifier = GlobalUtils.getValue(articleData, "identifier", null);

        MessageUtils.handleDispatch(dispatch, removeBookmarkItem(identifier, bookmarkState.page.current), "Cannot remove selected bookmark");
    };

    const title = `My bookmarks (${bookmarkState.page.totalResults > 0 ? bookmarkState.page.totalResults : "no"} items)`;

    return (
        <Drawer id="bookmarks-drawer" title={title} visible={visible} onClose={onDrawerClose}>
            <div style={{padding: 16}}>
                {bookmarkState.loading && 
                    <Row justify="center">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Row>
                }
                {!bookmarkState.loading &&
                    <Row justify="center" gutter={[0, 16]}>
                        {createBookmarkItems(getBookmarks(bookmarkState.page.current), onRemoveBookmark)}
                    </Row>
                }
                {!bookmarkState.loading && bookmarkState.page.totalResults > 0 &&
                    <Row justify="center">
                        <Pagination onChange={onPageChange} pageSize={BookmarkUtils.DEFAULT_PAGE_SIZE} current={bookmarkState.page.current} total={bookmarkState.page.totalResults} style={{marginTop: 16}} />
                    </Row>
                }
            </div>
        </Drawer>
    );
};

export default BookmarksDrawer;
