import React from "react";

const ReadMode = ({innerHtml}) => {

    return (
        <div style={{marginTop: 16}}>
            { !innerHtml && <p className="text text--silent">Note text is empty</p>}
            <div dangerouslySetInnerHTML={{__html: innerHtml}}></div>
        </div>
    );
};

export default ReadMode;