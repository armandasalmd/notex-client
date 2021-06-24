import React from "react";
import Blocks from "editorjs-blocks-react-renderer";

import "./ContentRenderer.less";

const ContentRenderer = ({ data }) => {
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