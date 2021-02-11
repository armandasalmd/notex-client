import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "@actions/authActions";

const LogoutPage = props => {
    useEffect(() => {
        props.logoutUser();
    });

    return <Redirect to="/" />;
};

LogoutPage.propTypes = {
    logoutUser: PropTypes.func.isRequired
};

export default connect(null, { logoutUser })(LogoutPage);
