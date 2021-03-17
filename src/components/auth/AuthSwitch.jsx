import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { verifyAuth } from "@actions/authActions";

import AppPublic from "#/AppPublic";
import AppPrivate from "#/AppPrivate";

const AuthSwitch = (props) => {
    const { auth, ...rest } = props;

    useEffect(() => {
        if (auth.isAuthenticated) {
            props.verifyAuth();
        }
    });

    return (
        <Route
            {...rest}
            render={function (props) {
                if (auth.isAuthenticated === true) {
                    return <AppPrivate {...props} />;
                } else {
                    return <AppPublic {...props} />;
                }
            }}
        />
    );
};

AuthSwitch.propTypes = {
    auth: PropTypes.object.isRequired,
    verifyAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { verifyAuth })(AuthSwitch);
