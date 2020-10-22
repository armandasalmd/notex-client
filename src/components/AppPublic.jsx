import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { RouteUtilities } from "@utils";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={function (props) {
            if (auth.isAuthenticated === true) {
                return <Component {...props} />;
            } else {
                return <Redirect to={RouteUtilities.app.auth.loginPage || "/auth/login"} />;
            }
        }}
    />
);
PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
