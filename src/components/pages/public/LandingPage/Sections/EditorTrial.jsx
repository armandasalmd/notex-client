import React from "react";
import "./EditorTrial.less";

import ContentEditor from "##/ContentEditor";
import { NoteUtils } from "@utils";

const EditorTrial = () => {
    return (
        <section className="editorTrial">
            <div className="editorTrial__header">
                <h1 className="editorTrial__title">Meet Notex editor</h1>
                <h2 className="editorTrial__subtitle">Express your thoughts in an easy way</h2>
            </div>
            <div className="editorTrial__editorWrapper">
                <div className="editorTrial__editor">
                    <ContentEditor data={NoteUtils.DEFAULT_EDITOR_CONTENT} />
                </div>
            </div>
        </section>
    );
};

export default EditorTrial;