import { RouteUtils } from "@utils";

export default {
    appName: "Notex EN",
    pageTitles: {},

    navText: {
        login: "Login",
        logout: "Logout",
        register: "Register",
        home: "Home",
        about: "About us",
        main: "Dashboard",
        note: "Preview note",
        settings: "Settings"
    },
    titleText: {
        login: "Login page",
        logout: "Logout page",
        register: "Register page",
        home: "Home page",
        about: "About us page",
        main: "Dashboard page",
        note: "Preview note page",
        settings: "Settings page"
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
    }
};
