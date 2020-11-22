import React from "react";
import { withTitle } from "##/HeadTitle";
import { Constants } from "@utils";

const RenderPage = (WrappedComponent, title) => {
    const HOC = props => {
        return <WrappedComponent {...props} />;
    };

    const ComponentWithTitle = withTitle({
        component: HOC,
        title: title || Constants.defaultTitle
    });

    return ComponentWithTitle;
};

export default RenderPage;
