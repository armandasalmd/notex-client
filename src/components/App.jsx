import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import Navbar from "#/containers/Navbar";
import Footer from "#/containers/Footer";
import AuthSwitch from "#/auth/AuthSwitch";

import { Layout } from "antd";

const NavbarWithRoute = withRouter(props => <Navbar {...props} />);

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout className="app">
                <NavbarWithRoute />
                <Layout>
                    <AuthSwitch />
                </Layout>
                <Footer />
            </Layout>
        </Router>
    </Provider>
);

export default App;
