import React from "react";
import ReactDOM from "react-dom";
import App from "#/App";
import "./styles/Global.less";
import "./i18n";
import "./tinymce";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
