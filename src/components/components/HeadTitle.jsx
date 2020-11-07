import React from "react";
import Helmet from "react-helmet";

import { Constants } from "@utils";

const Title = ({ title }) => {
    return (
        <Helmet>
            <title>{title ? title : Constants.defaultTitle}</title>
        </Helmet>
    );
};

const withTitle = ({ component: Comp, title }) => {
    return (props) => {
        return (
            <React.Fragment>
                <Title title={title} />
                <Comp {...props} />
            </React.Fragment>
        );
    };
};

export { Title, withTitle };
