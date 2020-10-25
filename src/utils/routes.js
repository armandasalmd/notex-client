import { Constants } from "@utils";
import axios from "axios";

const sendApiRequest = (apiRoute, bodyData) => {
    return axios({
        method: apiRoute.method || "GET",
        url: apiRoute.path || "/",
        data: bodyData
    });
}

export default {
    hostName: Constants.apiHostName,
    api: {
        auth: {
            login: {
                path: "/api/users/login",
                method: "POST"
            },
            register: {
                path: "/api/users/register",
                method: "POST"
            }
        },
        note: {
            addNote: {
                path: "/api/backpack/note/add",
                method: "POST"
            },
            deleteNote: {
                path: "/api/backpack/note",
                method: "DELETE"
            },
            renameNote: {
                path: "/api/backpack/note/rename",
                method: "PUT"
            },
            saveNote: {
                path: "/api/backpack/note/save",
                method: "PUT"
            }
        },
        notebook: {
            addNotebook: {
                path: "/api/backpack/notebook/add",
                method: "POST"
            },
            deleteNotebook: {
                path: "/api/backpack/notebook",
                method: "DELETE"
            },
            getAll: {
                path: "/api/backpack/notebook",
                method: "GET"
            },
            renameNotebook: {
                path: "/api/backpack/notebook/rename",
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
            },
            tutorial: {
                link: "/tutorial",
                navTextKey: "navText.tutorial",
                titleTextKey: "titleText.tutorial"
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
    },
    sendApiRequest
};