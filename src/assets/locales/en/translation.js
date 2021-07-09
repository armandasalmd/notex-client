import { RouteVariables } from "@utils";

export default {
    appName: "Notex",
    about: {
        sectionAbout: {
            title: "What is this site about?",
            paragraphs: [
                `This project is all about exchanging knowledge. You can create 
                your private notes just as textbook but you can also publish 
                your note content. Creating and managing articles is easy.`,

                `Why can't we get rid of textbooks in an era of
                computers? Create an account and make your
                school/university notes online. You are going to be
                using simple file formating - Markdown.`,

                `Take a look at the MarkDown cheatsheet here:
                <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
                    https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
                </a>`
            ]
        },
        sectionAuthor: {
            title: "About the creator of this website",
            paragraphs: [
                "I am <strong>Armandas Barkauskas</strong>, currently studying in Coventry university Bsc Computer Science. I enjoy creating something that's trully.",
                "The idea here was that I didn't want to carry heavy books. I wanted something more simple than Office Word. Something where I could quickly type while sitting in the lectures.",
                "Try this app and see how it works for you. I am quite sure that you going to like it."
            ]
        }
    },
    common: {
        areYouSure: "Are you sure?",
        cancel: "Cancel",
        no: "No",
        ok: "Ok",
        select: "Please select",
        submit: "Submit",
        yes: "Yes",
        unavailable: "unavailable",
        urlCopy: "URL was copied"
    },
    confirm: {
        deleteNotebookTitle: "Are you sure you want to delete notebook?"
    },
    dashboard: {
        introCard: {
            selectNoteText: "Please select a note OR",
            addNotebookButton: "Add new notebook"
        },
        detailsCard: {
            currentNote: "Current note details",
            lastModified: "Last modified: ",
            accessLevel: "Access level: ",
            notebookDetails: "Notebook details",
            noteCount: "Note count: ",
            owner: "Owner: ",
            notebookActions: "Notebook actions",
            buttons: {
                add: "Add new note",
                rename: "Rename notebook",
                export: "Export all notes to PDF",
                delete: "Delete notebook"
            }
        },
        noteCard: {
            editor: {
                noteEmpty: "Note text is empty"
            },
            tabs: {
                editor: "Editor view",
                read: "Read view",
                settings: "Note settings"
            },
            settings: {
                renameNote: {
                    title: "Change note name",
                    tooltip: "Change name of the current note",
                    save: "Save"
                },
                evictNote: {
                    title: "Move to other notebook",
                    save: "Save"
                },
                accessLevel: {
                    title: "Control access level",
                    typeLabel: "Access type",
                    shareTooltip: "Click to copy sharable link",
                    shareLabel: "Share with (when private)",
                    save: "Save changes"
                },
                dangerous: {
                    title: "Dangerous actions",
                    deleteNote: "Delete this note"
                }
            },
            toolbar: {
                save: "Save",
                shareTooltip: "Click to copy sharable link",
                closeNote: "Close note",
                autoSaved: "(Auto saved)",
                notSaved: "(Not saved)"
            }
        }
    },
    errorPage: {
        titlePrefix: "Error",
        description: "Sorry, but page was not found",
        goHomeLink: "Go home"
    },
    footer: {
        about: {
            title: "About this app",
            description: "Why can't we get rid of textbooks in an era of computers? Create an account and make your school/university notes online. You are going to be using simple file formating - Markdown. Don't know how to use MarkDown? Have a quick tutorial:https://www.Markdowntutorial.com"
        },
        categories: {
            title: "Categories",
            items: [
                RouteVariables.app.public.landing
            ]
        },
        quickLinks: {
            title: "Quick links",
            items: [
                RouteVariables.app.public.landing,
                RouteVariables.app.auth.login,
                RouteVariables.app.auth.register,
                RouteVariables.app.public.about
            ]
        },
        copyright: "Copyright © 2020 Coventry, Armandas Barkauskas",
        languageHeader: "App language"
    },
    landing: {
        banner: {
            title: "Take notes online - take notex",
            subtitle: "Login, create your notes online in Markdown editor and access it anywhere",
            buttonText: "Sign Up!"
        },
        features: {
            title: "Notex app feature list",
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
        title: "Please login",
        emailPlaceholder: "Email address",
        passwordPlaceholder: "Password",
        button: "Show my notebooks - login",
        registerTitle: "New to Notex?",
        registerLinkText: "Click here to register",
        orLabel: "or use your account"
    },
    menu: {
        title: "Your backpack",
        addNote: "Add note",
        deleteNotebook: "Delete",
        renameNotebook: "Rename notebook",
        printPdf: "Print to PDF",
        noNotes: "No notes found here",
        noNotebooks: "No notebooks found"
    },
    modals: {
        addNotebook: {
            title: "Add new notebook",
            placeholder: "Enter notebook title"
        },
        addNote: {
            title: "Add new note",
            placeholder: "Enter note title"
        },
        renameNote: {
            title: "Rename notebook",
            placeholder: "Enter new name"
        }
    },
    navText: {
        about: "About us",
        articleManagement: "Article management",
        bookmarks: "My bookmarks",
        error: {
            notFound: "Not found - 404"
        },
        login: "Login",
        logout: "Logout",
        register: "Register",
        home: "Home",
        main: "Dashboard",
        note: "Preview note",
        search: "Article search",
        settings: "Settings",
        tutorial: "Tutorial"
    },
    register: {
        title: "Please register",
        firstnamePlaceholder: "Firstname",
        lastnamePlaceholder: "Lastname",
        emailPlaceholder: "Email address",
        password1Placeholder: "Enter your password",
        password2Placeholder: "Confirm your password",
        button: "Register",
        loginTitle: "Already a member?",
        loginLinkText: "Login here"
    },
    settings: {
        title: "Site settings",
        saving: "Saving changes...",
        sections: {
            personalDetails: {
                title: "Personal details",
                required: "This field is required",
                firstname: "First name",
                lastname: "Last name",
                email: "Email address",
                phone: "Phone number",
                saveButton: "Save changes",
                avatarTitle: "Your avatar",
                avatarUploadButton: "Click to upload",
                placeholders: {
                    firstname: "Enter your name",
                    lastname: "Enter your last name",
                    phone: "Enter your phone number"
                }
            },
            appSettings: {
                title: "App settings",
                labels: {
                    language: "Website language",
                    exportImport: "Export/import backpack",
                    closeAfterClick: "Close backpack menu after item select",
                    autoSave: "Auto save content",
                    actions: "Dangerous actions"
                },
                confirm: {
                    deleteAll: "Are you sure you want to delete everything?"
                },
                exportButton: "Export data",
                importButton: "Import data",
                deleteBackpackButton: "Delete entire backpack"
            },
            securityAndAccount: {
                title: "Security and account",
                labels: {
                    changePassword: "Change password",
                    social: "Link social account",
                    actions: "Dangerous actions"
                },
                google: {
                    link: "Link to Google",
                    unlink: "Unlink Google account"
                },
                facebook: {
                    link: "Link to Facebook",
                    unlink: "Unlink Facebook account"
                },
                passwordWarning: {
                    message: "You cannot change your password",
                    description: "Your account was created using social media account and you have no password set"
                },
                placeholders: {
                    password: "Old password",
                    newPassword1: "New Password",
                    newPassword2: "Repeat password"
                },
                changePasswordButton: "Update password",
                deleteAccountButton: "Delete this account",
                deleteAccountText: "You are about to delete this account with all notes. After this you will be logged out"
            }
        }
    },
    social: {
        signInGoogleText: "Sign in with Google",
        signInFacebookText: "Sign in with Facebook",
        disabledText: "Ups. Not yet! Wait for this feature to arrive"
    },
    titleText: {
        about: "About us page",
        articleManagement: "Article management page",
        error: {
            notFound: "Not found - 404"
        },
        login: "Login page",
        logout: "Logout page",
        register: "Register page",
        home: "Home page",
        main: "Dashboard page",
        note: "Preview note page",
        settings: "Settings page",
        search: "Search for articles",
        tutorial: "Tutorial page",
        editArticle: "Edit article collection"
    }
};
