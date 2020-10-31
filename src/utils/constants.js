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
    }
};