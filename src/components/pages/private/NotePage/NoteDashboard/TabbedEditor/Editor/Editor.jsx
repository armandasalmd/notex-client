import React from "react";
import { Editor as TinyMceEditor } from "@tinymce/tinymce-react";

import "./Editor.less";

const Editor = () => {
    const handleEditorChange = (content, editor) => {
        console.log("Content was updated:", content);
    };

    console.log("asdas");

    return (
        <div className="editor-root">
            <TinyMceEditor
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
                        { text: "C++", value: "cpp" },
                    ],
                    height: "560",
                    menubar: true,
                    plugins: [
                        "codesample advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                        "undo redo | code formatselect | bold italic backcolor | fullscreen link image codesample print | bullist numlist outdent indent | removeformat | help",
                    toolbar_mode: "sliding",
                }}
                onEditorChange={handleEditorChange}
            />
        </div>
    );
};

export default Editor;
