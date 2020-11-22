import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import { Constants, GlobalUtils, NoteUtils } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setEditorText, saveChanges } from "@actions/appActions";

import "./MceEditor.less";
import { Editor } from "@tinymce/tinymce-react";
import { SpinnerContainer } from "./__components__";

const MceEditor = ({
    selectedNote,
    setEditorText,
    editorText,
    saveChanges,
}) => {
    const [saveTimeoutId, setSaveTimeoutId] = useState(null);
    const [loading, setLoading] = useState(true);
    const editorElement = useRef(null);

    const loadingStateChange = (isLoading) => {
        if (isLoading !== loading) {
            setTimeout(() => {
                setLoading(isLoading);
            }, 250);
        }
    };

    const handleEditorChange = (content) => {
        setEditorText(content);
        
        if (Constants.autoSaveEnabled) {
            const changesSaved = (savedText) => content === savedText;
            
            if (saveTimeoutId) {
                clearTimeout(saveTimeoutId);
            }
    
            if (!changesSaved(GlobalUtils.getValue(selectedNote, NoteUtils.props.note.text))) {
                setSaveTimeoutId(
                    setTimeout(() => {
                        // if user saves manually then auto save request is not needed
                        if (!changesSaved(GlobalUtils.getValue(selectedNote, NoteUtils.props.note.text))) {
                            saveChanges(GlobalUtils.getValue(selectedNote, NoteUtils.props.note.id), content, true);
                        }
                    }, Constants.autoSaveTime)
                );
            }
        }
    };

    useEffect(() => {
        const clearUndoFn = GlobalUtils.getValue(
            editorElement,
            "current.editor.undoManager.clear"
        );
        GlobalUtils.callIfFunction(clearUndoFn);
    }, [selectedNote]);

    const EditorContainer = (
        <Editor
            ref={editorElement}
            value={editorText}
            init={{
                ...Constants.mceOptions,
                setup: (editor) => {
                    editor.on("PreProcess", loadingStateChange(true));
                    editor.on(
                        "PostProcess SkinLoaded",
                        loadingStateChange(false)
                    );
                },
            }}
            onEditorChange={handleEditorChange}
        />
    );

    return (
        <div className="editor-root">
            {loading && <SpinnerContainer />}
            <div
                className={classnames({
                    gone: loading,
                })}
            >
                {EditorContainer}
            </div>
        </div>
    );
};

MceEditor.propTypes = {
    selectedNote: PropTypes.object.isRequired,
    editorText: PropTypes.string.isRequired,
    setEditorText: PropTypes.func.isRequired,
    saveChanges: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    selectedNote: state.app.selectedNote,
    editorText: state.app.editorText,
});

export default connect(mapStateToProps, { setEditorText, saveChanges })(
    MceEditor
);
