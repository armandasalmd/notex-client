import { RouteUtils } from "@utils";

export default {
    appName: "Notex LT",
    about: {
        sectionAbout: {
            title: "What is this site about?",
            paragraphs: [
                `Why can't we get rid of textbooks in an era of
                computers? Create an account and make your
                school/university notes online. You are going to be
                using simple file formating - Markdown.`,

                `Don't know how to use MarkDown? Have a quick tutorial:
                <a href="https://www.markdowntutorial.com/">
                    https://www.Markdowntutorial.com
                </a>`,

                `Take a look at the MarkDown cheatsheet here:
                <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
                    https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
                </a>`
            ]
        },
        sectionAuthor: {
            title: "9About the creator of this website",
            paragraphs: [
                "I am <strong>Armandas Barkauskas</strong>, currently studying in Coventry university Bsc Computer Science. I enjoy creating something that's trully.",
                "The idea here was that I didn't want to carry heavy books. I wanted something more simple than Office Word. Something where I could quickly type while sitting in the lectures.",
                "Try this app and see how it works for you. I am quite sure that you going to like it."
            ]
        }
    },
    common: {
        areYouSure: "9Ar tu tikrai įsitikinęs?",
        cancel: "9Cancel",
        no: "9No",
        ok: "9Ok",
        select: "9Please select",
        submit: "9Submit",
        yes: "9Yes",
        unavailable: "9unavailable",
        urlCopy: "9URL was copied"
    },
    confirm: {
        deleteNotebookTitle: "9Are you sure you want to delete notebook?"
    },
    dashboard: {
        introCard: {
            selectNoteText: "9Please select a note OR",
            addNotebookButton: "9Add new notebook"
        },
        detailsCard: {
            currentNote: "9Current note details",
            lastModified: "9Last modified: ",
            accessLevel: "9Access level: ",
            notebookDetails: "9Notebook details",
            noteCount: "9Note count: ",
            owner: "9Owner: ",
            notebookActions: "9Notebook actions",
            buttons: {
                add: "9Add new note",
                rename: "9Rename notebook",
                export: "9Export all notes to PDF",
                delete: "9Delete notebook"
            }
        },
        noteCard: {
            editor: {
                noteEmpty: "9Note text is empty"
            },
            tabs: {
                editor: "9Editor view",
                read: "9Read view",
                settings: "9Note settings"
            },
            settings: {
                renameNote: {
                    title: "9Change note name",
                    tooltip: "9Change name of the current note",
                    save: "9Save"
                },
                evictNote: {
                    title: "9Move to other notebook",
                    save: "9Save"
                },
                accessLevel: {
                    title: "9Control access level",
                    typeLabel: "9Access type",
                    shareTooltip: "9Click to copy sharable link",
                    shareLabel: "9Share with (when private)",
                    save: "9Save changes"
                },
                dangerous: {
                    title: "9Dangerous actions",
                    deleteNote: "9Delete this note"
                }
            },
            toolbar: {
                save: "9Save",
                shareTooltip: "9Click to copy sharable link",
                closeNote: "9Close note",
                autoSaved: "9(Auto saved)",
                notSaved: "9(Not saved)"
            }
        }
    },
    errorPage: {
        titlePrefix: "9Klaida",
        description: "9Atsiprašome, bet šis puslapis nerastas",
        goHomeLink: "9Grįžti namo"
    },
    footer: {
        about: {
            title: "9About this app",
            description: "9Why can't we get rid of textbooks in an era of computers? Create an account and make your school/university notes online. You are going to be using simple file formating - Markdown. Don't know how to use MarkDown? Have a quick tutorial:https://www.Markdowntutorial.com"
        },
        categories: {
            title: "9Categories",
            items: [
                RouteUtils.app.public.landing
            ]
        },
        quickLinks: {
            title: "9Quick links",
            items: [
                RouteUtils.app.public.landing,
                RouteUtils.app.auth.login,
                RouteUtils.app.auth.register,
                RouteUtils.app.public.about
            ]
        },
        copyright: "9Copyright © 2020 Coventry, Armandas Barkauskas"
    },
    landing: {
        banner: {
            title: "9Take notes online - take notex",
            subtitle: "9Login, create your notes online in Markdown editor and access it anywhere",
            buttonText: "9Sign Up!"
        },
        features: {
            title: "9Notex app feature list",
            cards: [
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Notebooks saved on cloud",
                    description: "Create notes and login anywhere to retrieve them"
                },
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Share the content you create",
                    description: "Make your notebooks and notes public to share a link with your friends"
                },
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Markdown editor",
                    description: "Simple, fast-typed and reliable editor language"
                },
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Simple navigation",
                    description: "Sidebar that helps you to quickly switch over"
                },
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Notebooks saved on cloud",
                    description: "Create notes and login anywhere to retrieve them"
                },
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Share the content you create",
                    description: "Make your notebooks and notes public to share a link with your friends"
                },
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Markdown editor",
                    description: "Simple, fast-typed and reliable editor language"
                },
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Simple navigation",
                    description: "Sidebar that helps you to quickly switch over"
                }
            ]
        }
    },
    login: {
        title: "9Please login",
        emailPlaceholder: "9Email address",
        passwordPlaceholder: "9Password",
        button: "9Show my notebooks - login",
        registerTitle: "9New to Notex?",
        registerLinkText: "9Click here to register"
    },
    menu: {
        title: "9Your backpack",
        addNote: "9Add note",
        deleteNotebook: "9Delete",
        renameNotebook: "9Rename notebook",
        printPdf: "9Print to PDF",
        noNotes: "9No notes found here",
        noNotebooks: "9No notebooks found"
    },
    modals: {
        addNotebook: {
            title: "9Add new notebook",
            placeholder: "9Enter notebook title"
        },
        addNote: {
            title: "9Add new note",
            placeholder: "9Enter note title"
        },
        renameNote: {
            title: "9Rename notebook",
            placeholder: "9Enter new name"
        }
    },
    navText: {
        login: "9Login",
        logout: "9Atsijungti",
        register: "9Register",
        home: "9Home",
        about: "9About us",
        main: "9Dashboard",
        note: "9Preview note",
        settings: "9Nustatymai",
        tutorial: "9Tutorial"
    },
    register: {
        title: "9Please register",
        firstnamePlaceholder: "9Firstname",
        lastnamePlaceholder: "9Lastname",
        emailPlaceholder: "9Email address",
        password1Placeholder: "9Enter your password",
        password2Placeholder: "9Confirm your password",
        button: "9Register",
        loginTitle: "9Already a member?",
        loginLinkText: "9Login here"
    },
    settings: {
        title: "9Site settings",
        saving: "9Saving changes...",
        sections: {
            personalDetails: {
                title: "9Personal details",
                required: "9This field is required",
                firstname: "9First name",
                lastname: "9Last name",
                email: "9Email address",
                phone: "9Phone number",
                saveButton: "9Save changes",
                avatarTitle: "9Your avatar",
                avatarUploadButton: "9Click to upload",
                placeholders: {
                    firstname: "9Enter your name",
                    lastname: "9Enter your last name",
                    phone: "9Enter your phone number"
                }
            },
            appSettings: {
                title: "9App settings",
                labels: {
                    language: "9Website language",
                    exportImport: "9Export/import backpack",
                    closeAfterClick: "9Close backpack menu after item select",
                    autoSave: "9Auto save content",
                    actions: "9Dangerous actions"
                },
                confirm: {
                    deleteAll: "9Are you sure you want to delete everything?"
                },
                exportButton: "9Export data",
                importButton: "9Import data",
                deleteBackpackButton: "9Delete entire backpack"
            },
            securityAndAccount: {
                title: "9Security and account",
                labels: {
                    changePassword: "9Change password",
                    social: "9Link social account",
                    actions: "9Dangerous actions"
                },
                placeholders: {
                    password: "9Old password",
                    newPassword1: "9New Password",
                    newPassword2: "9Repeat password"
                },
                changePasswordButton: "9Update password",
                deleteAccountButton: "9Delete this account",
                deleteAccountText: "9You are about to delete this account with all notes. After this you will be logged out"
            }
        }
    },
    titleText: {
        login: "9Login page",
        logout: "9Logout page",
        register: "9Register page",
        home: "9Home page",
        about: "9About us page",
        main: "9Dashboard page",
        note: "9Preview note page",
        settings: "9Settings page",
        tutorial: "9Tutorial page"
    }
};
