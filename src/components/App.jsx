import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";
import { AuthUtils } from "@utils";

import Navbar from "#/containers/Navbar";
import AuthSwitch from "#/auth/AuthSwitch";
import { Layout } from "antd";

AuthUtils.resetAuthTokenFromStorage();

const NavbarWithRoute = withRouter(props => <Navbar {...props} />);

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout className="app">
                <NavbarWithRoute />
                <Layout>
                    <AuthSwitch />
                </Layout>
            </Layout>
        </Router>
    </Provider>
);

export default App;
