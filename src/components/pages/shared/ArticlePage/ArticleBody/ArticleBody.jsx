import React from "react";
import { useSelector } from "react-redux";

import { GlobalUtils } from "@utils";

import "./ArticleBody.less";
import { Skeleton, Image } from "antd";
import TextRendering from "##/TextRendering";

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

    return (
        <div className="articlePageBody">
            {loading && getSkeletons(4)}
            {!loading && typeof coverSrc === "string" && <Image className="articlePageBody__coverImage" alt="cover" src={coverSrc} />}
            {!loading && <TextRendering source={text} />} 
        </div>
    );
};

export default ArticleBody;
