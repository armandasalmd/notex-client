import React from "react";

import { ArticleManagementUtils } from "@utils";

import { TreeSelect } from "antd";

const { SHOW_PARENT } = TreeSelect;

const TreeSelectNotes = (props) => {
    const { notebooksMetaData, value, setValue } = props;

    const tProps = {
        treeData: ArticleManagementUtils.sourceNotebooksToTreeData(notebooksMetaData),
        value,
        onChange: setValue,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: "Select existing notes to inherit",
        style: {
            width: "100%",
        },
    };

    return (
        <div>
            <p style={{marginBottom: 8}}>Select existing notes to inherit</p>
            <TreeSelect {...tProps} />
        </div>
    );
};

export default TreeSelectNotes;
