export default {
    appName: "Notex",
    defaultTitle: "Notex",
    apiHostName: "https://notex-api.herokuapp.com",
    authTokenType: "Bearer",
    editorHeight: "560px",

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
            titleKey: "settings.section.details"
        },
        {
            componentName: "SectionAppSettings",
            defaultTitle: "App settings",
            id: "section-app-settings",
            titleKey: "settings.section.appSettings"
        },
        {
            componentName: "SectionSecurityAccount",
            defaultTitle: "Security and account",
            id: "section-security",
            titleKey: "settings.section.security"
        },
    ]
};