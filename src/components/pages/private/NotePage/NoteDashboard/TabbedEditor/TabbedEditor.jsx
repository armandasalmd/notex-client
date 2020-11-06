import React from "react";

import "./TabbedEditor.less";
import Editor from "./Editor";
import { Editor as TinyMceEditor } from "@tinymce/tinymce-react";

import { Tabs } from "antd";
const { TabPane } = Tabs;

class TabbedEditor extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true,
        };
    }

    handleEditorChange(content) {
        console.log("Content was updated:", content);
    }

    mceStartLoading() {
        this.setState({ loading: true });
    }

    mceFinishLoading() {
        this.setState({ loading: false });
    }

    getInitialEditorComponent() {
        return (
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
                    setup: (editor) => {
                        this.editor = editor;
                        this.mceStartLoading();
                        // LoadContent
                        editor.on(
                            "PostProcess SkinLoaded", this.mceFinishLoading.bind(this)
                        );
                    },
                }}
                onPreProcess={this.mceStartLoading.bind(this)}
                onEditorChange={this.handleEditorChange}
            />
        );
    }

    render() {
        const MceEditor = this.getInitialEditorComponent();

        return (
            <div className="tabbed-editor-root">
                <Tabs
                    className="full-width"
                    size={"small"}
                    defaultActiveKey="1"
                    tabPosition={"top"}
                >
                    {[...Array.from({ length: 30 }, (v, i) => i)].map((i) => (
                        <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
                            <Editor key={i} mceEditor={MceEditor} isLoading={this.state.loading} />
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        );
    }
}

export default TabbedEditor;
