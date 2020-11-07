import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";
import { AuthUtils } from "@utils";

import AuthSwitch from "#/auth/AuthSwitch";
import { Layout } from "antd";

AuthUtils.resetAuthTokenFromStorage();

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout className="app">
                <Layout id="root-container">
                    <AuthSwitch />
                </Layout>
            </Layout>
        </Router>
    </Provider>
);

export default App;
