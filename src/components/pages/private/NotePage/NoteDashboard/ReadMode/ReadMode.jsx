import React from "react";

// import { useTranslation } from "react-i18next";
import { I18n } from "react-redux-i18n";

const ReadMode = (props) => {
    const { innerHtml } = props;
    
    return (
        <div style={{marginTop: 16}}>
            { !innerHtml && <p className="text text--silent">{I18n.t("dashboard.noteCard.editor.noteEmpty")}</p>}
            <div dangerouslySetInnerHTML={{__html: innerHtml}}></div>
            <p>
                {I18n.t('common.areYouSure')}
            </p>
        </div>
    );
};

export default ReadMode;