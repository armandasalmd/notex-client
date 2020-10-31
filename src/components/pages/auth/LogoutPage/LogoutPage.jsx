import React from "react";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "@actions/authActions";

const LogoutPage = props => {
    props.logoutUser();

    return <Redirect to="/" />;
};

LogoutPage.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(LogoutPage);
