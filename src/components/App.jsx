import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";
import { AuthUtils, HistoryUtils } from "@utils";

import AuthSwitch from "#/auth/AuthSwitch";
import Message from "##/Message";
import { Layout, message } from "antd";

AuthUtils.resetAuthTokenFromStorage();

message.config({
    top: 66,
    duration: 4,
    maxCount: 3
});

const App = () => (
    <Provider store={store}>
        <Router history={HistoryUtils.history}>
            <Layout className="app">
                <Layout id="root-container">
                    <AuthSwitch />
                    <Message />
                </Layout>
            </Layout>
        </Router>
    </Provider>
);

export default App;
