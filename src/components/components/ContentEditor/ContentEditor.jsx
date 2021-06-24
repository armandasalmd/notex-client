import React, { forwardRef, useEffect, useRef } from "react";
import Undo from "editorjs-undo";

import { GlobalUtils } from "@utils";
import { EDITOR_JS_TOOLS } from "./editorConfiguration";

import "./ContentEditor.less";
import EditorJs from "react-editor-js";

let undo = undefined;

const ContentEditor = forwardRef(({data, onChange, beforeRender}, editorJsRef) => {

    if (!editorJsRef) {
        editorJsRef = useRef(null);
    }

    const handleReady = (editor) => {
        editor.configuration.holder = document.getElementById(editor.configuration.holder);

        undo = new Undo({ editor });
        undo.initialize(data);
    };
    
    const resetUndoHistory = () => {
        undo.clear();
        undo.initialize(data);
    };

    useEffect(() => {
        const setData = (blocks) => {
            editorJsRef.current.isReady.then(() => {
                let blockData = GlobalUtils.getValue(blocks, "blocks", blocks);
    
                GlobalUtils.callIfFunction(beforeRender);

                if (GlobalUtils.hasLength(blockData)) {
                    GlobalUtils.callIfFunction(editorJsRef.current.render, { blocks: Array.isArray(blockData) ? blockData : [] });
                } else {
                    GlobalUtils.callIfFunction(editorJsRef.current.clear);
                }

                resetUndoHistory();
            });
        };

        if (editorJsRef.current != null) {
            setData(data);
        }
        // eslint-disable-next-line
    }, [data, editorJsRef]);

    return (
        <div id="content-editor-root" style={{ margin: "16px" }}>
            <EditorJs
                instanceRef={instance => (editorJsRef.current = instance)}
                placeholder="Start typing what's in your head..."
                tools={EDITOR_JS_TOOLS}
                onChange={onChange}
                data={data}
                onReady={handleReady}
            />
        </div>
    );
});

export default ContentEditor;