import React from "react";
import { I18n } from "react-redux-i18n";

import { I18nUtils } from "@utils";

import "./Footer.less";
import { Row, Col, Button, Dropdown, Menu } from "antd";
import { TwitterOutlined, FacebookOutlined, LinkedinOutlined, GlobalOutlined } from '@ant-design/icons';

const FooterAbout = () => {
    return (
        <Col sm={24} md={12}>
            <h6>{I18n.t("footer.about.title")}</h6>
            <p className="text-justify">
                {I18n.t("footer.about.description")}
            </p>
        </Col>
    );
};

// const FooterCategories = () => {
//     const categories = I18nUtils.tObject(I18n, "footer.categories.items", []);

//     const items = (categories || []).map((item, i) => (
//         <li key={i}>
//             <a href={item.link}>{I18n.t(item.titleTextKey)}</a>
//         </li>
//     ));

//     return (
//         <Col xs={12} md={6}>
//             <h6>{I18n.t("footer.categories.title")}</h6>
//             <ul className="footer-links">
//                 {items}
//             </ul>
//         </Col>
//     );
// };

const FooterLinks = () => {
    const categories = I18nUtils.tObject(I18n, "footer.quickLinks.items", []);

    const items = (categories || []).map((item, i) => (
        <li key={i}>
            <a href={item.link}>{I18n.t(item.titleTextKey)}</a>
        </li>
    ));

    return (
        <Col xs={12} md={6}>
            <h6>{I18n.t("footer.quickLinks.title")}</h6>
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
                    {I18n.t("footer.copyright")}
                </p>
            </Col>

            <Col md={8} sm={12} xs={24}>
                <ul className="social-icons">
                    <li>
                        <a className="facebook" href="https://www.facebook.com/armandasalmd/">
                            <FacebookOutlined />
                        </a>
                    </li>
                    <li>
                        <a className="twitter" href="https://twitter.com/armandasalmd/">
                            <TwitterOutlined />
                        </a>
                    </li>
                    <li>
                        <a className="linkedin" href="https://www.linkedin.com/in/armandas-barkauskas/">
                            <LinkedinOutlined />
                        </a>
                    </li>
                </ul>
            </Col>
        </>
    );
};

const FooterLanguage = () => {
    const language = I18nUtils.getPreferredLanguage();

    const onChange = (e) => {
        if (language !== e.key) {
            I18nUtils.saveLanguageLocally(e.key);
            window.location.reload();
        }
    }

    const languageMenuItems = Object.values(I18nUtils.languages).map((language) => {
        return (
            <Menu.Item key={language.value} >
                {language.value.toUpperCase()}
            </Menu.Item>
        );
    });

    const languageMenu = <Menu onClick={onChange}>{languageMenuItems}</Menu>;

    return (
        <Col xs={12} md={6}>
            <h6>{I18n.t("footer.languageHeader")}</h6>
            <Dropdown overlay={languageMenu}>
                <Button>
                    <GlobalOutlined />{language.toUpperCase()}
                </Button>
            </Dropdown>
        </Col>
    );
};

const Footer = () => {
    return (
        <footer className="site-footer">
            <Row className="site-footer-main">
                <FooterAbout />
                <FooterLanguage />
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
