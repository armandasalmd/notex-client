import React from "react";
import { useSelector } from "react-redux";

import { NoteUtils } from "@utils";

import ContentRenderer from "##/ContentRenderer";

const NoteContentRenderer = () => {
    const selectedNote = useSelector((state) => state.app.selectedNote);
    const content = NoteUtils.getContentDisplayData(selectedNote);

    return <ContentRenderer data={content} />;
};

export default NoteContentRenderer;