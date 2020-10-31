import React from "react";

import "./NoteSettings.less";

import { ChangeName, ChangeNotebook, ControlAccess, DeleteNote } from "./__components__";

const NoteSettings = () => {
    return (
        <div className="note-settings-root">
            <div className="form">
                <ChangeName />
                <ChangeNotebook />
                <ControlAccess />
                <DeleteNote />
            </div>
        </div>
    );
};

export default NoteSettings;
