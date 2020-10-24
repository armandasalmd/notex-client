import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./assets/locales/en/translation";
import translationLT from "./assets/locales/lt/translation";

const resources = {
    en: {
        translation: translationEN
    },
    lt: {
        translation: translationLT
    }
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: ".", // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;

// Change language docs
// https://www.i18next.com/overview/api#changelanguage