import React from "react";

import { GlobalUtils } from "@utils";

import "./ContentRenderer.less";
import Blocks from "editorjs-blocks-react-renderer";
import { Empty } from "antd";

const ContentRenderer = ({ data }) => {
    if (!GlobalUtils.hasLength(GlobalUtils.getValue(data, "blocks"))) {
        return <Empty style={{margin: "32px 0"}} description="No content to display" />;
    }

    return (
        <div id="content-renderer-root">
            <Blocks data={data} config={{
                code: {
                    className: "language-js"
                },
                delimiter: {
                    className: "article-hr"
                },
                embed: {
                    className: "styled-iframe"
                },
                header: {
                    className: "lead"
                },
                image: {
                    className: "img-fluid"
                },
                list: {
                    className: "unstyled-list"
                },
                paragraph: {
                    className: "lead"
                },
                quote: {
                    className: "block-quote"
                },
                table: {
                    className: "table"
                }
            }} />
        </div>
    );
};

export default ContentRenderer;