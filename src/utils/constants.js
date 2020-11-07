export default {
    defaultTitle: "Notex",
    apiHostName: "https://notex-api.herokuapp.com",
    authTokenType: "Bearer",

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
            id: "section-details",
            titleKey: "settings.section.details",
            defaultTitle: "Personal details"
        },
        {
            id: "section-app-settings",
            titleKey: "settings.section.appSettings",
            defaultTitle: "App settings"
        },
        {
            id: "section-security",
            titleKey: "settings.section.security",
            defaultTitle: "Security and account"
        },
    ]
};