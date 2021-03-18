import { Constants, GlobalUtils } from "@utils";
import axios from "axios";

function resolveHostName() {
    let host = Constants.env === "development" ? Constants.activeHost : Constants.apiHostName;

    return host.replace(/\/*$/, "");
}

var RouteUtils = {
    hostName: resolveHostName(),
    api: {
        auth: {
            login: {
                path: "/api/users/login",
                method: "POST",
            },
            register: {
                path: "/api/users/register",
                method: "POST",
            },
            verifyAuth: {
                path: "/api/auth/verify",
                method: "POST",
            },
        },
        note: {
            addNote: {
                path: "/api/backpack/note/add",
                method: "POST",
            },
            deleteNote: {
                path: "/api/backpack/note",
                method: "DELETE",
            },
            evictNote: {
                path: "/api/backpack/note/evict",
                method: "PUT",
            },
            renameNote: {
                path: "/api/backpack/note/rename",
                method: "PUT",
            },
            saveNote: {
                path: "/api/backpack/note/save",
                method: "PUT",
            },
        },
        notebook: {
            addNotebook: {
                path: "/api/backpack/notebook/add",
                method: "POST",
            },
            deleteNotebook: {
                path: "/api/backpack/notebook",
                method: "DELETE",
            },
            getAll: {
                path: "/api/backpack/notebook",
                method: "GET",
            },
            renameNotebook: {
                path: "/api/backpack/notebook/rename",
                method: "PUT",
            },
        },
        settings: {
            autoSaveChange: {
                path: "/api/settings/autoSaveChange",
                method: "POST",
            },
            backpackExport: {
                path: "/api/settings/backpack/export",
                method: "GET",
            },
            backpackImport: {
                path: "/api/settings/backpack/import",
                method: "POST",
            },
            changeLanguage: {
                path: "/api/settings/changeLanguage",
                method: "POST",
            },
            changePassword: {
                path: "/api/settings/changePassword",
                method: "POST",
            },
            closeOnClickChange: {
                path: "/api/settings/closeOnClickChange",
                method: "POST",
            },
            deleteAccount: {
                path: "/api/settings/account",
                method: "DELETE",
            },
            deleteBackpack: {
                path: "/api/settings/backpack",
                method: "DELETE",
            },
            getUserSettings: {
                path: "/api/settings",
                method: "GET",
            },
            savePersonalDetails: {
                path: "/api/settings/savePersonalDetails",
                method: "POST",
            },
            unlinkSocialAccount: {
                path: "/api/auth/unlinkSocialAccount",
                method: "POST",
            },
            uploadAvatar: {
                path: "/api/settings/uploadAvatar",
                method: "POST",
            },
        },
    },
    app: {
        auth: {
            login: {
                link: "/auth/login",
                navTextKey: "navText.login",
                titleTextKey: "titleText.login",
            },
            logout: {
                link: "/auth/logout",
                navTextKey: "navText.logout",
                titleTextKey: "titleText.logout",
            },
            register: {
                link: "/auth/register",
                navTextKey: "navText.register",
                titleTextKey: "titleText.register",
            },
            socialLogin: {
                link: "/auth/setToken",
                queryNames: {
                    token: "token",
                },
            },
        },
        public: {
            about: {
                link: "/about",
                navTextKey: "navText.about",
                titleTextKey: "titleText.about",
            },
            landing: {
                link: "/",
                navTextKey: "navText.home",
                titleTextKey: "titleText.home",
            },
            tutorial: {
                link: "/tutorial",
                navTextKey: "navText.tutorial",
                titleTextKey: "titleText.tutorial",
            },
        },
        private: {
            main: {
                link: "/",
                navTextKey: "navText.main",
                titleTextKey: "titleText.main",
            },
            note: {
                link: "/",
                queryNames: {
                    note: "note",
                },
                navTextKey: "navText.note",
                titleTextKey: "titleText.note",
            },
            settings: {
                link: "/settings",
                navTextKey: "navText.settings",
                titleTextKey: "titleText.settings",
            },
        },
        shared: {
            article: {
                link: "/article",
                titleTextKey: "titleText.search",
                queryNames: {
                    id: "id",
                }
            },
            search: {
                link: "/search",
                navTextKey: "navText.search",
                titleTextKey: "titleText.search",
            },
        },
    },
};

const resolveUrl = (path) => {
    if (path === null) {
        return undefined;
    }

    if (typeof path === "object" && path.path !== undefined) {
        path = path.path;
    }

    if (GlobalUtils.hasLength(path)) {
        return path.startsWith("http") ? path : RouteUtils.hostName + path;
    }
};

const getMenuItems = (isAuth) => {
    const offlineLinks = [
        RouteUtils.app.public.landing,
        RouteUtils.app.shared.search,
        RouteUtils.app.public.about,
        RouteUtils.app.auth.login,
        RouteUtils.app.auth.register,
    ];
    const onlineLinks = [RouteUtils.app.private.main, RouteUtils.app.shared.search, RouteUtils.app.private.settings];

    return isAuth ? onlineLinks : offlineLinks;
};

const sendApiRequest = (apiRoute, bodyData) => {
    return axios({
        method: apiRoute.method || "GET",
        url: resolveUrl(apiRoute.path) || "/",
        data: bodyData || {},
    });
};

const downloadFile = async (apiRoute) => {
    await axios({
        method: apiRoute.method,
        url: resolveUrl(apiRoute.path),
        responseType: "blob",
    })
        .then((response) => {
            let fileName = response.headers["content-disposition"].split("filename=")[1];
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                // IE variant
                window.navigator.msSaveOrOpenBlob(
                    new Blob([response.data], {
                        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    }),
                    fileName
                );
            } else {
                const url = window.URL.createObjectURL(
                    new Blob([response.data], {
                        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    })
                );
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", response.headers["content-disposition"].split("filename=")[1]);
                document.body.appendChild(link);
                link.click();
            }
        })
        .catch((err) => {
            console.error("Cannot download file");
            console.error(err);
        });
};

export default {
    ...RouteUtils,
    downloadFile,
    sendApiRequest,
    getMenuItems,
    resolveHostName,
    resolveUrl,
};
