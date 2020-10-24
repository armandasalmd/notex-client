import React from "react";
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <p>{t("appName")}</p>
        </div>
    );
};

export default LandingPage;
