import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setToken } from "@actions/authActions";
import { RouteUtils, HistoryUtils } from "@utils";

const SetTokenPage = props => {
    const query = HistoryUtils.useQuery();
    const token = query.get(RouteUtils.app.auth.socialLogin.queryNames.token);

    useEffect(() => {
        if (token) {
            props.setToken(token);
        }
    });

    const redirectLink = !!token 
        ? RouteUtils.app.private.main.link
        : RouteUtils.app.auth.login.link;

    return <Redirect to={redirectLink} />;
};

SetTokenPage.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default connect(null, { setToken })(SetTokenPage);
