import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import { Constants, GlobalUtils, NoteUtils, MessageUtils } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setEditorText, saveChanges } from "@actions/appActions";

import "./MceEditor.less";
import { Editor } from "@tinymce/tinymce-react";
import { SpinnerContainer } from "./__components__";

const MceEditor = (props) => {
    const {
        selectedNote,
        setEditorText,
        editorText,
        saveChanges,
    } = props;

    const [saveTimeoutId, setSaveTimeoutId] = useState(null);
    const [loading, setLoading] = useState(true);
    const editorElement = useRef(null);

    // TODO: memory leak error cause. Fix it
    const loadingStateChange = (isLoading) => {
        if (isLoading !== loading) {
            setLoading(isLoading);
        }
    };

    const handleEditorChange = (content) => {
        setEditorText(content);
        
        if (props.autoSaveEnabled) {
            const changesSaved = (savedText) => content === savedText;
            
            if (saveTimeoutId) {
                clearTimeout(saveTimeoutId);
            }
    
            if (!changesSaved(GlobalUtils.getValue(selectedNote, NoteUtils.props.note.text))) {
                setSaveTimeoutId(
                    setTimeout(() => {
                        // if user saves manually then auto save request is not needed
                        if (!changesSaved(GlobalUtils.getValue(selectedNote, NoteUtils.props.note.text))) {
                            MessageUtils.handleDispatched(saveChanges(GlobalUtils.getValue(selectedNote, NoteUtils.props.note.id), content, true));
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
    autoSaveEnabled: PropTypes.bool.isRequired,
    selectedNote: PropTypes.object.isRequired,
    editorText: PropTypes.string.isRequired,
    setEditorText: PropTypes.func.isRequired,
    saveChanges: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    autoSaveEnabled: state.settings.appSettings.autoSave,
    selectedNote: state.app.selectedNote,
    editorText: state.app.editorText || "",
});

export default connect(mapStateToProps, { setEditorText, saveChanges })(
    MceEditor
);
