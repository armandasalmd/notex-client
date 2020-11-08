import React, { useState } from "react";

import classnames from "classnames";
import { Constants } from "@utils";

import "./MceEditor.less";
import { Editor } from "@tinymce/tinymce-react";
import { SpinnerContainer } from "./__components__";

const MceEditor = (props) => {
    const [loading, setLoading] = useState(true);

    const loadingStateChange = isLoading => {
        if (isLoading !== loading) {
            setTimeout(() => { setLoading(isLoading); }, 250);            
        }
    };

    const handleEditorChange = content => {
        console.log("Content was updated:", content);
    };

    const EditorContainer = (
        <Editor
            initialValue="<p>This is the initial content of the editor</p>"
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
                { loading && <SpinnerContainer /> }
                <div className={classnames({
                    gone: loading
                })}>
                    {EditorContainer}
                </div>
        </div>
    );
};

export default MceEditor;
