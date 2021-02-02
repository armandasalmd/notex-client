import {
    setLocale,
    loadTranslations,
    syncTranslationWithStore,
} from "react-redux-i18n";
import { default as GlobalUtils } from "./global";

import translationEN from "../assets/locales/en/translation";
import translationLT from "../assets/locales/lt/translation";

const translations = {
    en: translationEN,
    lt: translationLT
};

const languages = {
    en: {
        name: "English",
        value: "en"
    },
    lt: {
        name: "Lithuanian",
        value: "lt"
    }
};

const DEFAULT_LANGUAGE = languages.en.value;
const LOCAL_STORAGE_KEY = "language";

const initAndAttachToStore = (store) => {
    if (store) {
        const language = localStorage.getItem(LOCAL_STORAGE_KEY) || DEFAULT_LANGUAGE;

        syncTranslationWithStore(store);
        store.dispatch(loadTranslations(translations));
        store.dispatch(setLocale(language));
    } else {
        console.error("Cannot attach translations to store");
    }
};

// Language is being selected by this priority
// 1. default language
// 2. localStorage value
// 3. if logged in. Use user settings value
const saveLanguageLocally = (language) => {
    let languageToSet = DEFAULT_LANGUAGE;
    
    if (Object.keys(languages).includes(language)) {
        languageToSet = language;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, languageToSet);
};

const getPreferredLanguage = () => {
    let languageResult = localStorage.getItem(LOCAL_STORAGE_KEY);
    
    if (!Object.keys(languages).includes(localStorage.getItem(LOCAL_STORAGE_KEY))) {
        languageResult = DEFAULT_LANGUAGE;
    }

    return languageResult;
};

const tObject = (i18n, path, defaultResult = {}) => {
    if (i18n && path) {
        let languageKey = GlobalUtils.getValue(i18n, "_locale", DEFAULT_LANGUAGE);

        return GlobalUtils.getValue(translations[languageKey], path, defaultResult);
    }

    return defaultResult;
};

const exportObject = {
    DEFAULT_LANGUAGE,
    LOCAL_STORAGE_KEY,
    initAndAttachToStore,
    getPreferredLanguage,
    languages,
    saveLanguageLocally,
    translations,
    tObject
};

export default exportObject;
