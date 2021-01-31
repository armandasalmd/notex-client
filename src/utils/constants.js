export default {
    appName: "Notex",
    defaultTitle: "Notex",
    apiHostName: "https://notex-api.herokuapp.com",
    apiHostNameDev: "http://localhost:3001",
    authTokenType: "Bearer",
    autoSaveTime: 5000,

    accessLevels: {
        public: {
            tKey: "accessLevels.public",
            value: "public",
            name: "Public"
        },
        private: {
            tKey: "accessLevels.private",
            value: "private",
            name: "Private"
        }
    },
    socialButtonTypes: {
        google: {
            title: "Google",
            iconSource: "/images/icons/google_logo.svg",
            loginButtonText: "Sign in with Google",
            backgroundColor: "#FFFFFF",
            textColor: "#6B6B6B"
        },
        facebook: {
            title: "Facebook",
            iconSource: "https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/szGrb_tkxMW.png",
            loginButtonText: "Sign in with Facebook",
            backgroundColor: "#5B7DC1",
            textColor: "#FFFFFF"
        }
    },
    settingsSections: [
        {
            componentName: "SectionPersonalDetails",
            defaultTitle: "Personal details",
            id: "section-details",
            titleKey: "settings.sections.personalDetails.title"
        },
        {
            componentName: "SectionAppSettings",
            defaultTitle: "App settings",
            id: "section-app-settings",
            titleKey: "settings.sections.appSettings.title"
        },
        {
            componentName: "SectionSecurityAccount",
            defaultTitle: "Security and account",
            id: "section-security",
            titleKey: "settings.sections.securityAndAccount.title"
        }
    ],
    languages: {
        en: {
            name: "English",
            value: "en"
        },
        lt: {
            name: "Lithuanian",
            value: "lt"
        },
        ru: {
            name: "Russian",
            value: "ru"
        }
    },
    mceOptions: {
        codesample_languages: [
            { text: "HTML/XML", value: "markup" },
            { text: "JavaScript", value: "javascript" },
            { text: "CSS", value: "css" },
            { text: "Ruby", value: "ruby" },
            { text: "Python", value: "python" },
            { text: "Java", value: "java" },
            { text: "C", value: "c" },
            { text: "C#", value: "csharp" },
            { text: "C++", value: "cpp" }
        ],
        height: "560px",
        menubar: true,
        plugins: [
            "codesample advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen textpattern",
            "insertdatetime media table paste code help wordcount"
        ],
        textpattern_patterns: [
            { start: "#", format: "h2" },
            { start: "##", format: "h3" },
            { start: "###", format: "h4" },
            { start: "####", format: "h5" },
            { start: "#####", format: "h6" },
            { start: "* ", cmd: "InsertUnorderedList" },
            { start: "- ", cmd: "InsertUnorderedList" },
            { start: "1. ", cmd: "InsertOrderedList", value: { "list-style-type": "decimal" } },
            { start: "1) ", cmd: "InsertOrderedList", value: { "list-style-type": "decimal" } },
            { start: "a. ", cmd: "InsertOrderedList", value: { "list-style-type": "lower-alpha" } },
            { start: "a) ", cmd: "InsertOrderedList", value: { "list-style-type": "lower-alpha" } },
            { start: "i. ", cmd: "InsertOrderedList", value: { "list-style-type": "lower-roman" } },
            { start: "i) ", cmd: "InsertOrderedList", value: { "list-style-type": "lower-roman" } },
            { start: "*", end: "*", format: "italic" },
            { start: "**", end: "**", format: "bold" },
            { start: "~", end: "~", cmd: "createLink", value: "" }
        ],
        toolbar:
            "undo redo | code formatselect | bold italic backcolor | fullscreen link image codesample print | bullist numlist outdent indent | removeformat | help",
        toolbar_mode: "sliding"
    }
};
