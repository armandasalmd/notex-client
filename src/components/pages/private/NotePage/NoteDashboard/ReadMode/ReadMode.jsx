import React from "react";
import { I18n } from "react-redux-i18n";

const ReadMode = (props) => {
    const { innerHtml } = props;

    return (
        <div style={{marginTop: 16}}>
            { !innerHtml && <p className="text text--silent">{I18n.t("dashboard.noteCard.editor.noteEmpty")}</p>}
            <div dangerouslySetInnerHTML={{__html: innerHtml}}></div>
        </div>
    );
};

export default ReadMode;