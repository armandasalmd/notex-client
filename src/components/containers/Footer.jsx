import React from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="separator" />
            <p>{t("footerText")}</p>
        </footer>
    );
};

export default Footer;
