import React from "react";

const DemoBox = props => <p className={`height-${props.value}`} style={{backgroundColor: props.color}}>{props.children}</p>;

const Editor = () => {
    return (
        <div>
            <DemoBox value={100} color="green">col-4</DemoBox>

        </div>
    );
};

export default Editor;
