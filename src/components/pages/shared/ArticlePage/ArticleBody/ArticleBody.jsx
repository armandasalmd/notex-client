import React from "react";
import { useSelector } from "react-redux";

import { NoteUtils, GlobalUtils } from "@utils";

import "./ArticleBody.less";
import { Skeleton, Image } from "antd";
import ContentRenderer from "##/ContentRenderer";

export const ArticleBody = () => {
    const coverSrc = useSelector((state) => state.reading.body.coverImageSource);
    const loading = useSelector((state) => state.reading.state.loading);
    const text = useSelector((state) => state.reading.body.text);

    const getSkeletons = (skeletonCount) => {
        let skeletons = [];

        for (let i = 0; i < skeletonCount; i++) {
            skeletons.push(<Skeleton key={i} active paragraph={{rows: GlobalUtils.getRandomNumber(2, 8)}}></Skeleton>)
        }

        return skeletons;
    }

    const imageWrapper = <div className="articlePageBody__coverImage">
        <Image alt="cover" src={coverSrc} />
    </div>;

    let editorJsData = { 
        blocks: []    
    };

    try {
        editorJsData = JSON.parse(text);
    } catch {
        editorJsData.blocks.push(NoteUtils.createParagraphBlock(text))
    }

    return (
        <div className="articlePageBody">
            {loading && getSkeletons(4)}
            {!loading && typeof coverSrc === "string" && imageWrapper}
            {!loading && <ContentRenderer data={editorJsData} />} 
        </div>
    );
};

export default ArticleBody;
