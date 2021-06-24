import React from "react";
import { useSelector } from "react-redux";

import { GlobalUtils, NoteUtils } from "@utils";

import ContentRenderer from "##/ContentRenderer";
import { Empty } from "antd";

const NoteContentRenderer = () => {
    const selectedNote = useSelector((state) => state.app.selectedNote);
    const content = NoteUtils.getContentDisplayData(selectedNote);

    if (GlobalUtils.hasLength(GlobalUtils.getValue(content, "blocks"))) {
        return <ContentRenderer data={content} />;
    } else {
        return <Empty style={{margin: "32px 0"}} description="No content to display" />;
    }
};

export default NoteContentRenderer;