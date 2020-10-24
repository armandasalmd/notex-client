const hostName = "https://notex-api.herokuapp.com";

export default {
    hostName: hostName,
    api: {
        auth: {
            login: {
                path: hostName + "/api/users/login",
                method: "POST"
            },
            register: {
                path: hostName + "/api/users/register",
                method: "POST"
            }
        },
        note: {
            addNote: {
                path: hostName + "/api/backpack/note/add",
                method: "POST"
            },
            deleteNote: {
                path: hostName + "/api/backpack/note",
                method: "DELETE"
            },
            renameNote: {
                path: hostName + "/api/backpack/note/rename",
                method: "PUT"
            },
            saveNote: {
                path: hostName + "/api/backpack/note/save",
                method: "PUT"
            }
        },
        notebook: {
            addNotebook: {
                path: hostName + "/api/backpack/notebook/add",
                method: "POST"
            },
            deleteNotebook: {
                path: hostName + "/api/backpack/notebook",
                method: "DELETE"
            },
            getAll: {
                path: hostName + "/api/backpack/notebook",
                method: "GET"
            },
            renameNotebook: {
                path: hostName + "/api/backpack/notebook/rename",
                method: "PUT"
            }
        }
    },
    app: {
        auth: {
            login: { 
                link: "/auth/login",
                navTextKey: "navText.login",
                titleTextKey: "titleText.login"
            },
            logout: {
                link: "/auth/logout",
                navTextKey: "navText.logout",
                titleTextKey: "titleText.logout"
            },
            register: {
                link: "/auth/register",
                navTextKey: "navText.register",
                titleTextKey: "titleText.register"
            }
        },
        public: {
            landing: {
                link: "/",
                navTextKey: "navText.home",
                titleTextKey: "titleText.home"
            },
            about: {
                link: "/about",
                navTextKey: "navText.about",
                titleTextKey: "titleText.about"
            }
        },
        private: {
            main: {
                link: "/",
                navTextKey: "navText.main",
                titleTextKey: "titleText.main"
            },
            note: {
                link: "/note",
                navTextKey: "navText.note",
                titleTextKey: "titleText.note"
            },
            settings: {
                link: "/settings",
                navTextKey: "navText.settings",
                titleTextKey: "titleText.settings"
            }
        }
    }
};