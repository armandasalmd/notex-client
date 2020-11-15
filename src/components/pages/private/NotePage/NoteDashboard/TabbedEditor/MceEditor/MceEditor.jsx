import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import { Constants, GlobalUtils, NoteUtils } from "@utils";

import "./MceEditor.less";
import { Editor } from "@tinymce/tinymce-react";
import { SpinnerContainer } from "./__components__";

const MceEditor = ({ selectedNote }) => {
    const selectedText = GlobalUtils.getValue(selectedNote, NoteUtils.props.note.text);

    const [editorValue, setEditorValue] = useState(selectedText);
    const [loading, setLoading] = useState(true);
    const editorElement = useRef(null);

    const loadingStateChange = isLoading => {
        if (isLoading !== loading) {
            setTimeout(() => {
                setLoading(isLoading);
            }, 250);
        }
    };

    const handleEditorChange = content => {
        setEditorValue(content);
    };

    useEffect(() => {
        const clearUndoFn = GlobalUtils.getValue(editorElement, "current.editor.undoManager.clear");

        GlobalUtils.callIfFunction(clearUndoFn, selectedText);
        setEditorValue(selectedText);
    }, [selectedText]);

    const EditorContainer = (
        <Editor
            ref={editorElement}
            value={editorValue}
            init={{
                codesample_languages: [
                    { text: "HTML/XML", value: "markup" },
                    { text: "JavaScript", value: "javascript" },
                    { text: "CSS", value: "css" },
                    { text: "Ruby", value: "ruby" },
                    { text: "Python", value: "python" },
                    { text: "Java", value: "java" },
                    { text: "C", value: "c" },
                    { text: "C#", value: "csharp" },
                    { text: "C++", value: "cpp" }
                ],
                height: Constants.editorHeight,
                menubar: true,
                plugins: [
                    "codesample advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount"
                ],
                toolbar:
                    "undo redo | code formatselect | bold italic backcolor | fullscreen link image codesample print | bullist numlist outdent indent | removeformat | help",
                toolbar_mode: "sliding",
                setup: editor => {
                    editor.on("PreProcess", loadingStateChange(true));
                    editor.on("PostProcess SkinLoaded", loadingStateChange(false));
                }
            }}
            onEditorChange={handleEditorChange}
        />
    );

    return (
        <div className="editor-root">
            {loading && <SpinnerContainer />}
            <div
                className={classnames({
                    gone: loading
                })}
            >
                {EditorContainer}
            </div>
        </div>
    );
};

export default MceEditor;
