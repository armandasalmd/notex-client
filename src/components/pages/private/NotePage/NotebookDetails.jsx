import React from "react";

const DemoBox = props => <p className={`height-${props.value}`} style={{backgroundColor: props.color}}>{props.children}</p>;


const NotebookDetails = () => {
    return (
        <div>
            <DemoBox value={100} color="red">col-4</DemoBox>

        </div>
    );
};

export default NotebookDetails;
