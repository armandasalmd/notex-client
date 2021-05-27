export default {
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
            uploadCover: {
                path: "/api/upload/image",
                method: "POST"
            }
        },
        articleManagement: {
            getCreateCollectionMetaData: {
                path: "/nexus/articleManagement/getCreateArticleCollectionMetaData",
                method: "GET",
            },
            getCreateArticleMetaData: {
                path: "/nexus/articleManagement/getCreateArticleMetaData",
                method: "GET",
            },
            createCollection: {
                path: "/nexus/articleCollection/create",
                method: "POST"
            },
            search: {
                path: "/nexus/articleManagement",
                method: "POST"
            },
            deleteCollection: {
                path: "/nexus/articleCollection",
                method: "DELETE"
            },
            deleteArticle: {
                path: "/nexus/article",
                method: "DELETE"
            },
            changeAccessLevel: {
                path: "/nexus/articleManagement/changeAccessStatus",
                method: "PUT"
            },
            getEditCollectionPageModel: {
                path: "/nexus/articleManagement/editCollection",
                method: "GET",
                queryNames: {
                    identifier: "identifier",
                }
            },
            getEditArticlePageModel: {
                path: "/nexus/articleManagement/editArticle",
                method: "GET",
                queryNames: {
                    identifier: "identifier",
                    includeMetaData: "includeMetaData"
                }
            },
            updateCollectionDetails: {
                path: "/nexus/articleCollection/updateArticleCollection",
                method: "POST"
            },
            syncCollection: {
                path: "/nexus/articleCollection/sync",
                method: "POST"
            },
            syncArticle: {
                path: "/nexus/article/sync",
                method: "POST"
            },
            createArticle: {
                path: "/nexus/article/create",
                method: "POST"
            },
            saveArticle: {
                path: "/nexus/articleManagement/saveArticleSettings",
                method: "POST"
            }
        },
        articles: {
            search: {
                path: "/nexus/search",
                method: "POST"
            }
        }
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
            articleManagement: {
                link: "/articleManagement",
                navTextKey: "navText.articleManagement",
                titleTextKey: "titleText.articleManagement",
                useStartWithMatch: true
            },
            editArticle: {
                link: "/articleManagement/edit/:collection/:article?",
                navTextKey: "navText.editArticle",
                titleTextKey: "titleText.editArticle",
                paramNames: {
                    collectionIdentifier: "collection",
                    articleIdentifier: "article"
                }
            }
        },
        shared: {
            article: {
                link: "/article/:identifier",
                titleTextKey: "titleText.search",
                paramNames: {
                    identifier: "identifier"
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