import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setBookmarksOpen } from "@actions/bookmarkActions";

import { UserOutlined } from "@ant-design/icons";
import BookmarksDrawer from "#/pages/private/BookmarksDrawer";
import PersonaOverlay from "./PersonaOverlay";

const NavbarPersona = (props) => {
    const dispatch = useDispatch();

    const { onClick, open, setOpen: setOverlayOpen } = props;
    const bookmarkDrawerOpen = useSelector((state) => state.bookmark.overlayOpen);

    const setBookmarkDrawerOpen = (open) => dispatch(setBookmarksOpen(open));

    const onBookmarkItemClick = () => {
        setOverlayOpen(false);
        setBookmarkDrawerOpen(true);
    };

    return (
        <div id="navbarPersona" className="navbar__actionItem">
            <div className="navbar__actionItemContent" onClick={onClick}>
                <UserOutlined />
            </div>
            {open && <PersonaOverlay onBookmarkClick={onBookmarkItemClick} id="personaOverlay" />}
            {bookmarkDrawerOpen && <BookmarksDrawer visible={bookmarkDrawerOpen} setVisible={setBookmarkDrawerOpen} />}
        </div>
    );
};

export default NavbarPersona;