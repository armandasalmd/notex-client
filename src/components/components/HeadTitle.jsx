import React, { Component } from "react";
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
    return class TitleComponent extends Component {
        render() {
            return (
                <React.Fragment>
					<Title title={title} />
                    <Comp {...this.props} />
                </React.Fragment>
            );
        }
    };
};

export { Title, withTitle };
