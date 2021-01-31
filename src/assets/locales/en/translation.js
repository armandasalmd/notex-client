import { RouteUtils } from "@utils";

export default {
    appName: "Notex EN",
    pageTitles: {},

    common: {
        yes: "Yes",
        no: "No",
        areYouSure: "Are you sure?",
        cancel: "Cancel",
        ok: "Ok"
    },
    navText: {
        login: "Login",
        logout: "Logout",
        register: "Register",
        home: "Home",
        about: "About us",
        main: "Dashboard",
        note: "Preview note",
        settings: "Settings",
        tutorial: "Tutorial"
    },
    titleText: {
        login: "Login page",
        logout: "Logout page",
        register: "Register page",
        home: "Home page",
        about: "About us page",
        main: "Dashboard page",
        note: "Preview note page",
        settings: "Settings page",
        tutorial: "Tutorial page"
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
    footer: {
        about: {
            title: "About this app",
            description: "Why can't we get rid of textbooks in an era of computers? Create an account and make your school/university notes online. You are going to be using simple file formating - Markdown. Don't know how to use MarkDown? Have a quick tutorial:https://www.Markdowntutorial.com"
        },
        categories: {
            title: "Categories",
            items: [
                RouteUtils.app.public.landing
            ]
        },
        quickLinks: {
            title: "Quick links",
            items: [
                RouteUtils.app.public.landing,
                RouteUtils.app.auth.login,
                RouteUtils.app.auth.register,
                RouteUtils.app.public.about
            ]
        },
        copyright: "Copyright © 2020 Coventry, Armandas Barkauskas"
    },
    errorPage: {
        titlePrefix: "Error",
        description: "Sorry, but page was not found",
        goHomeLink: "Go home"
    },
    login: {
        title: "Please login",
        emailPlaceholder: "Email address",
        passwordPlaceholder: "Password",
        button: "Show my notebooks - login",
        registerTitle: "New to Notex?",
        registerLinkText: "Click here to register"
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
            title: "About the creator of this website",
            paragraphs: [
                "I am <strong>Armandas Barkauskas</strong>, currently studying in Coventry university Bsc Computer Science. I enjoy creating something that's trully.",
                "The idea here was that I didn't want to carry heavy books. I wanted something more simple than Office Word. Something where I could quickly type while sitting in the lectures.",
                "Try this app and see how it works for you. I am quite sure that you going to like it."
            ]
        }
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
    }
};
