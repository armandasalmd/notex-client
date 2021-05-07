import React, { useState, useRef, useEffect } from "react";

import NavbarPersona from "./NavbarPersona";

// const NotificationOverlay = (props) => {
//     return (
//         <div id={props.id} className="navbar__actionItemOverlay">
//             NotificationOverlay
//         </div>
//     );
// };

// const NavbarNotificationBell = (props) => {
//     const { onClick, open } = props;

//     return (
//         <div className="navbar__actionItem">
//             <div className="navbar__actionItemContent" onClick={onClick}>
//                 <Badge count={0} size="default">
//                     <BellOutlined style={{ fontSize: 20 }} />
//                 </Badge>
//             </div>
//             {open && <NotificationOverlay id="notificationOverlay" />}
//         </div>
//     );
// };

function useOutsideClick(ref, callback) {
    useEffect(() => {
        document.addEventListener("mousedown", callback);
        return () => {
            document.removeEventListener("mousedown", callback);
        };
    }, [ref, callback]);
}

const NavbarActions = () => {
    const wrapperRef = useRef(null);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [personaOpen, setPersonaOpen] = useState(false);

    // const notificationClick = () => {
    //     if (personaOpen === true) {
    //         setPersonaOpen(false);
    //     }

    //     setNotificationOpen(!notificationOpen);
    // };

    const personaClick = () => {
        if (notificationOpen === true) {
            setNotificationOpen(false);
        }

        setPersonaOpen(!personaOpen);
    };

    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            if (notificationOpen === true) {
                setNotificationOpen(false);
            } else if (personaOpen === true) {
                setPersonaOpen(false);
            }
        }
    }

    useOutsideClick(wrapperRef, handleClickOutside);

    return (
        <div ref={wrapperRef} className="navbar__actions">
            {/* <NavbarNotificationBell open={notificationOpen} onClick={notificationClick} /> */}
            <NavbarPersona open={personaOpen} onClick={personaClick} />
        </div>
    );
};

export default NavbarActions;