import { Constants } from "@utils";
import axios from "axios";

function resolveHostName() {
    let host = Constants.env === "development" 
        ? Constants.activeHost
        : Constants.apiHostName;

    return host.replace(/\/*$/, "");
}

var RouteUtils = {
    hostName: resolveHostName(),
    api: {
        auth: {
            login: {
                path: "/api/users/login",
                method: "POST"
            },
            register: {
                path: "/api/users/register",
                method: "POST"
            },
            verifyAuth: {
                path: "/api/auth/verify",
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
            evictNote: {
                path: "/api/backpack/note/evict",
                method: "PUT"
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
        },
        settings: {
            autoSaveChange: {
                path: "/api/settings/autoSaveChange",
                method: "POST"
            },
            changeLanguage: {
                path: "/api/settings/changeLanguage",
                method: "POST"
            },
            changePassword: {
                path: "/api/settings/changePassword",
                method: "POST"
            },
            closeOnClickChange: {
                path: "/api/settings/closeOnClickChange",
                method: "POST"
            },
            deleteAccount: {
                path: "/api/settings/account",
                method: "DELETE"
            },
            deleteBackpack: {
                path: "/api/settings/backpack",
                method: "DELETE"
            },
            getUserSettings: {
                path: "/api/settings",
                method: "GET"
            },
            savePersonalDetails: {
                path: "/api/settings/savePersonalDetails",
                method: "POST"
            },
            unlinkSocialAccount: {
                path: "/api/auth/unlinkSocialAccount",
                method: "POST"
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
            },
            socialLogin: {
                link: "/auth/setToken",
                queryNames: {
                    token: "token"
                },
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
                link: "/",
                queryNames: {
                    note: "note"
                },
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

const getMenuItems = isAuth => {
    const offlineLinks = [RouteUtils.app.public.landing, RouteUtils.app.public.about, RouteUtils.app.auth.login, RouteUtils.app.auth.register];
    const onlineLinks = [RouteUtils.app.private.main, RouteUtils.app.private.settings, RouteUtils.app.auth.logout];

    return isAuth ? onlineLinks : offlineLinks;
};

const sendApiRequest = (apiRoute, bodyData) => {
    let url = apiRoute.path.startsWith("http") ?
        apiRoute.path :
        RouteUtils.hostName + apiRoute.path;

    return axios({
        method: apiRoute.method || "GET",
        url: url || "/",
        data: bodyData || {}
    });
};

export default {
    ...RouteUtils,
    sendApiRequest,
    getMenuItems,
    resolveHostName
};