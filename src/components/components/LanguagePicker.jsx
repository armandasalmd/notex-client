import React from "react";
import { I18nUtils } from "@utils";
import { Button, Dropdown, Menu } from "antd";
import { GlobalOutlined } from '@ant-design/icons';

const LanguagePicker = () => {
    const language = I18nUtils.getPreferredLanguage().toUpperCase();

    const onChange = (e) => {
        if (language !== e.key) {
            I18nUtils.saveLanguageLocally(e.key);
            window.location.reload();
        }
    };

    const languageMenuItems = Object.values(I18nUtils.languages).map(language => {
        return <Menu.Item key={language.value}>{language.value.toUpperCase()}</Menu.Item>;
    });

    const languageMenu = <Menu onClick={onChange}>{languageMenuItems}</Menu>;

    return (
        <Dropdown overlay={languageMenu}>
            <Button>
                <GlobalOutlined />
                {language.toUpperCase()}
            </Button>
        </Dropdown>
    );
};

export default LanguagePicker;
