const constants = {
    appName: "Notex",
    authTokenType: "Bearer",
    autoSaveTime: 5000,
    defaultArticleCover: "/images/default-cover.jpg",
    defaultTitle: "Notex",
    env: process.env.NODE_ENV,

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
            textKey: "social.signInGoogleText",
            backgroundColor: "#FFFFFF",
            textColor: "#6B6B6B",
            path: "/api/google"
        },
        facebook: {
            title: "Facebook",
            iconSource: "https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/szGrb_tkxMW.png",
            textKey: "social.signInFacebookText",
            backgroundColor: "#5B7DC1",
            textColor: "#FFFFFF",
            path: "/api/facebook"
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
    ]
};

export default constants;