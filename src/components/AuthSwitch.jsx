import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import AppPublic from "#/AppPublic";
import AppPrivate from "#/AppPrivate";

const AuthSwitch = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={
        (props) => {
            if (auth.isAuthenticated === true) {
                return <AppPrivate {...props} />;
            } else {
                return <AppPublic {...props} />;
            }
        }
    } />
);

AuthSwitch.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(AuthSwitch);
