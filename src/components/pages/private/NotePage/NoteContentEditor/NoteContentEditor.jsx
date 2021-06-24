import React, { useEffect, useState, forwardRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Constants, NoteUtils } from "@utils";
import { setEditorDirty } from "@actions/appActions";

import ContentEditor from "##/ContentEditor";

const NoteContentEditor = forwardRef(({ onSave }, ref) => {
    const dispatch = useDispatch();

    const autoSave = useSelector((state) => state.settings.appSettings.autoSave);
    const isDirty = useSelector((state) => state.app.isDirty);
    const selectedNote = useSelector((state) => state.app.selectedNote, shallowEqual);

    const [saveTimeoutId, setSaveTimeoutId] = useState(null);
    const [content, setContent] = useState(NoteUtils.DEFAULT_EDITOR_CONTENT);
    
    const getIsDirty = () => isDirty;
    
    // Bypass initial load onChange trigger. Quick solution, needs refactoring
    const [bypassChange, setBypassChange] = useState(false);
    const beforeRender = () => {
        setBypassChange(true);
        setTimeout(() => {
            setBypassChange(false);
        });
    };

    const onChange = async () => {
        if (bypassChange) return;

        if (isDirty === false) {
            dispatch(setEditorDirty(true));
        }

        if (autoSave === true) {
            triggerAutoSaveTimer();
        }
    };

    const triggerAutoSaveTimer = () => {
        if (saveTimeoutId) {
            clearTimeout(saveTimeoutId);
        }

        setSaveTimeoutId(setTimeout(() => {
            // if user saves manually then auto save request is not needed
            if (getIsDirty() === true) {
                onSave(true);
            }
        }, Constants.autoSaveTime));
    };

    useEffect(() => {
        setContent(NoteUtils.getContentDisplayData(selectedNote));
    }, [selectedNote]);

    useEffect(() => {
        if (isDirty === false) {
            clearTimeout(saveTimeoutId);
        }
        // eslint-disable-next-line
    }, [isDirty]);

    return <ContentEditor
        ref={ref}
        data={content}
        beforeRender={beforeRender}
        onChange={onChange} />;
});

export default NoteContentEditor;