import React from "react";
import { useTranslation } from "react-i18next";

import { Row, Col } from "antd";
import "./Footer.less";

import { TwitterOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';

const FooterAbout = () => {
    const { t } = useTranslation();

    return (
        <Col sm={24} md={12}>
            <h6>{t("footer.about.title")}</h6>
            <p className="text-justify">
                {t("footer.about.description")}
            </p>
        </Col>
    );
};

const FooterCategories = () => {
    const { t } = useTranslation();
    const categories = t("footer.categories.items", { returnObjects: true });

    const items = (categories || []).map((item, i) => (
        <li>
            <a href={item.link}>{t(item.titleTextKey)}</a>
        </li>
    ));

    return (
        <Col xs={12} md={6}>
            <h6>{t("footer.categories.title")}</h6>
            <ul className="footer-links">
                {items}
            </ul>
        </Col>
    );
};

const FooterLinks = () => {
    const { t } = useTranslation();
    const categories = t("footer.quickLinks.items", { returnObjects: true });
    console.log(categories);

    const items = (categories || []).map((item, i) => (
        <li>
            <a href={item.link}>{t(item.titleTextKey)}</a>
        </li>
    ));

    return (
        <Col xs={12} md={6}>
            <h6>{t("footer.quickLinks.title")}</h6>
            <ul className="footer-links">
                {items}
            </ul>
        </Col>
    );
};

const FooterSocial = () => {
    return (
        <>
            <Col md={16} sm={12} xs={24}>
                <p className="copyright-text">
                    Copyright &copy; 2017 All Rights Reserved by
                    <a href="#">Scanfcode</a>.
                </p>
            </Col>

            <Col md={8} sm={12} xs={24}>
                <ul className="social-icons">
                    <li>
                        <a className="facebook" href="#">
                            <FacebookOutlined />
                        </a>
                    </li>
                    <li>
                        <a className="twitter" href="#">
                            <TwitterOutlined />
                        </a>
                    </li>
                    <li>
                        <a className="linkedin" href="#">
                            <LinkedinOutlined />
                        </a>
                    </li>
                </ul>
            </Col>
        </>
    );
};

const Footer = () => {
    return (
        <footer className="site-footer">
            <Row className="site-footer-main">
                <FooterAbout />
                <FooterCategories />
                <FooterLinks />
                <hr />
            </Row>
            <Row>
                <FooterSocial />
            </Row>
        </footer>
    );
};

export default Footer;
