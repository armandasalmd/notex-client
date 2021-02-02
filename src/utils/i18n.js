import {
    setLocale,
    loadTranslations,
    syncTranslationWithStore,
} from "react-redux-i18n";

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

const exportObject = {
    DEFAULT_LANGUAGE,
    LOCAL_STORAGE_KEY,
    initAndAttachToStore,
    languages,
    translations,
    saveLanguageLocally
};

export default exportObject;
