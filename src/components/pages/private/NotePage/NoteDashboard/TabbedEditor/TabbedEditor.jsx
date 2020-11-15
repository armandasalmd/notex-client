import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./TabbedEditor.less";
import MceEditor from "./MceEditor";

const TabbedEditor = props => {
    return (
        <div className="tabbed-editor-root">
            <MceEditor selectedNote={props.app.selectedNote || {}} />
        </div>
    );
};

TabbedEditor.propTypes = {
    app: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    app: state.app
});

export default connect(mapStateToProps, {})(TabbedEditor);
