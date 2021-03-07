import { RouteUtils } from "@utils";

export default {
    appName: "Notex",
    about: {
        sectionAbout: {
            title: "Apie ką yra ši svetainė?",
            paragraphs: [
                `Kodėlgi mes negalime atsikratyti užrašų knygutėmis,
                jei mes gyvename kompiuterių eroje? Susikurk paskyrą ir
                kurk užrašus savo mokyklai/universitetui internetu.
                Su šia aplikacija tu gali naudoti intuityvų redagavimo 
                langą. Viskas labai paprasta. Išbandyk!`,
                `Taip pat kviesk draugus prisijungti!`
            ]
        },
        sectionAuthor: {
            title: "Apie šios svetainės kūrėją",
            paragraphs: [
                "Aš esu <strong>Armandas Barkauskas</strong> ir šiuo metu studijuoju Coventry universitete Bsc Computer Science specialybę. Man patinka kurti tai kas padeda kitiems žmonėms",
                "Šio projekto idėja buvo tai, kad universitete aš nenorėjau nešiotis sunkių knygų. Norėjau kažko paprasčiau nei Office Word. Kažko kur galėčiau greitai užsirašyti man kilusias idėjas ir nereikėtų nerimauti dėl sudėtingo Word maketavimo",
                "Išbandyk šią svetainę ir tu! Aš esu visai įsitikinęs, kad tau tai tikrai patiks!"
            ]
        }
    },
    common: {
        areYouSure: "Ar tu tikrai įsitikinęs?",
        cancel: "Atšaukti",
        no: "Ne",
        ok: "Gerai",
        select: "Prašom pasirinkti",
        submit: "Patvirtinti",
        yes: "Taip",
        unavailable: "nėra informacijos",
        urlCopy: "Nuoroda nukopijuota sėkmingai!"
    },
    confirm: {
        deleteNotebookTitle: "Ar tu tikrai nori ištrinti užrašų knygutę?"
    },
    dashboard: {
        introCard: {
            selectNoteText: "Pasirink užrašą ARBA",
            addNotebookButton: "Sukurk naują knygutę"
        },
        detailsCard: {
            currentNote: "Šio užrašo detalės",
            lastModified: "Paskutinis pakeitimas: ",
            accessLevel: "Prieinamumas: ",
            notebookDetails: "Knygutės detalės",
            noteCount: "Užrašų skaičius: ",
            owner: "Priklauso: ",
            notebookActions: "Knygutės veiksmai",
            buttons: {
                add: "Pridėti naują užrašą",
                rename: "Pervadinti knygutę",
                export: "Eksportuoti užrašus į PDF",
                delete: "Ištrinti knygutę"
            }
        },
        noteCard: {
            editor: {
                noteEmpty: "Šis užrašas yra tuščias"
            },
            tabs: {
                editor: "Redagavimo langas",
                read: "Skaitymo langas",
                settings: "Užrašo nustatymai"
            },
            settings: {
                renameNote: {
                    title: "Pakeisti užrašo pavadinimą",
                    tooltip: "Pakeisti pasirinkto užrašo vardą",
                    save: "Išsaugoti"
                },
                evictNote: {
                    title: "Perkelti į kitą knygutę",
                    save: "Išsaugoti"
                },
                accessLevel: {
                    title: "Keisti pasiekiamumo lygį",
                    typeLabel: "Pasiekiamumas",
                    shareTooltip: "Paspausk, jog  nukopijuotum dalinimosi nuorodą",
                    shareLabel: "Dalintis su (tik kai pasiekiamumas privatus)",
                    save: "Išsaugoti pakeitimus"
                },
                dangerous: {
                    title: "Pavojingi veiksmai",
                    deleteNote: "Ištrinti šį užrašą"
                }
            },
            toolbar: {
                save: "Išsaugoti",
                shareTooltip: "Paspausk, jog  nukopijuotum dalinimosi nuorodą",
                closeNote: "Uždaryti užrašą",
                autoSaved: "(Automatiškai išsaugotas)",
                notSaved: "(Neišsaugotas)"
            }
        }
    },
    errorPage: {
        titlePrefix: "Klaida",
        description: "Atsiprašome, bet šis puslapis nerastas",
        goHomeLink: "Grįžti namo"
    },
    footer: {
        about: {
            title: "Apie šią aplikaciją",
            description: 
                `Kodėlgi mes negalime atsikratyti užrašų knygutėmis,
                jei mes gyvename kompiuterių eroje? Susikurk paskyrą ir
                kurk užrašus savo mokyklai/universitetui internetu.
                Su šia aplikacija tu gali naudoti intuityvų redagavimo 
                langą. Viskas labai paprasta. Išbandyk!`
        },
        categories: {
            title: "Kategorijos",
            items: [
                RouteUtils.app.public.landing
            ]
        },
        quickLinks: {
            title: "Svarbios nuorodos",
            items: [
                RouteUtils.app.public.landing,
                RouteUtils.app.auth.login,
                RouteUtils.app.auth.register,
                RouteUtils.app.public.about
            ]
        },
        copyright: "Copyright © 2020 Coventry, Armandas Barkauskas",
        languageHeader: "Svetainės kalba"
    },
    landing: {
        banner: {
            title: "Kurkis užrašus internete - naudok notex",
            subtitle: "Prisijunk, kurkis užrašus internete žaibo greičiu ir pasiek juos visur kur yra internetas",
            buttonText: "Prisijungti!"
        },
        features: {
            title: "Notex programėlės ypatybės",
            cards: [
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Užrašai išsaugoti debesyje",
                    description: "Kurk užrašus ir prieik juos iš betkurios vietos. Ar tai būtų kavinė ar namai."
                },
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Dalinkis turinių kūrį kuri ir gauk atgal",
                    description: "Tu gali padaryti užrašus viešai prieinamus kitiems arba dalintis jais tik su draugais"
                },
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Intuityvus redagavimo langas",
                    description: "Paprasta, lengva maketuoti ir patikima"
                },
                {
                    image: "https://via.placeholder.com/606x400",
                    title: "Paprastas meniu",
                    description: "Meniu kuris yra pritaikytas greitai vaikščioti per užrašus"
                }
            ]
        }
    },
    login: {
        title: "Prašome prisijungti",
        emailPlaceholder: "Elektroninis paštas",
        passwordPlaceholder: "Slaptažodis",
        button: "Rodyti mano užrašus - Prisijungti",
        registerTitle: "Naujas Notex narys?",
        registerLinkText: "Spausk čia ir registruokis",
        orLabel: "arba naudok įprastą paskyrą"
    },
    menu: {
        title: "Tavo kuprinė",
        addNote: "Pridėti užrašą",
        deleteNotebook: "Ištrinti",
        renameNotebook: "Pervadinti knygutę",
        printPdf: "Spausdinti PDF",
        noNotes: "Užrašų nerasta",
        noNotebooks: "Knygučių nerasta"
    },
    modals: {
        addNotebook: {
            title: "Pridėti naują knygutę",
            placeholder: "Įveskite knygutės pavadinimą"
        },
        addNote: {
            title: "Pridėti naują užrašą",
            placeholder: "Įveskite užrašo pavadinimą"
        },
        renameNote: {
            title: "Pervadiniti knygutę",
            placeholder: "Įverkite naują vardą"
        }
    },
    navText: {
        login: "Prisijungti",
        logout: "Atsijungti",
        register: "Registruotis",
        home: "Namai",
        about: "Apie mus",
        main: "Užrašai",
        note: "Peržiūrėti užrašą",
        settings: "Nustatymai",
        tutorial: "Pamoka"
    },
    register: {
        title: "Registracija",
        firstnamePlaceholder: "Vardas",
        lastnamePlaceholder: "Pavardė",
        emailPlaceholder: "Elektroninis paštas",
        password1Placeholder: "Įveskite slaptažodį",
        password2Placeholder: "Patvirtinkite slaptažodį",
        button: "Registruotis",
        loginTitle: "Jau turi paskyrą?",
        loginLinkText: "Prisijunk čia"
    },
    settings: {
        title: "Svetainės nustatymai",
        saving: "Išsaugomi pakeitimai...",
        sections: {
            personalDetails: {
                title: "Asmeninės detalės",
                required: "Šis laukas privalomas",
                firstname: "Vardas",
                lastname: "Pavardė",
                email: "Elektroninis paštas",
                phone: "Telefono numeris",
                saveButton: "Išsaugoti pakeitimus",
                avatarTitle: "Jūsų nuotrauka",
                avatarUploadButton: "Įkelti naują",
                placeholders: {
                    firstname: "Įveskite vardą",
                    lastname: "Įveskite pavardę",
                    phone: "Įveskite telefono numerį"
                }
            },
            appSettings: {
                title: "Bendriniai nustatymai",
                labels: {
                    language: "Svetainės kalba",
                    exportImport: "Eksportuoti/importuoti kuprinę",
                    closeAfterClick: "Uždaryti meniu po paspaudimo (tik telefonams)",
                    autoSave: "Automatiškai išsaugoti",
                    actions: "Pavojingi veiksmai"
                },
                confirm: {
                    deleteAll: "Ar tu įsitikinęs, ir nori ištrinti viską?"
                },
                exportButton: "Eksportuoti užrašus",
                importButton: "Importuoti užrašus",
                deleteBackpackButton: "Ištrinti visą kuprinę"
            },
            securityAndAccount: {
                title: "Apsauga ir paskyra",
                labels: {
                    changePassword: "Keisti slaptažodį",
                    social: "Susieti su socialiniu tinklu",
                    actions: "Pavojingi veiksmai"
                },
                google: {
                    link: "Susieti su Google",
                    unlink: "Atsieti su Google paskyra"
                },
                facebook: {
                    link: "Susieti su Facebook",
                    unlink: "Atsieti su Facebook paskyra"
                },
                passwordWarning: {
                    message: "Slaptažodžio pakeisti negalima",
                    description: "Jūsų paskyra buvo sukurta naudojantis socialinėmis paskyromis, todėl jūs neturite slaptažodžio"
                },
                placeholders: {
                    password: "Senas slaptažodis",
                    newPassword1: "Naujas slaptažodis",
                    newPassword2: "Pakartoti slaptažodį"
                },
                changePasswordButton: "Patvirtinti pakeitimus",
                deleteAccountButton: "Ištrinti šią paskyrą",
                deleteAccountText: "Ar tu tikrai nori ištrinti šią paskyrą su visais užrašais? Po šio veiksmo būsite atjungti."
            }
        }
    },
    social: {
        signInGoogleText: "Prisijungti su Google",
        signInFacebookText: "Prisijungti su Facebook",
        disabledText: "Ups. Dar ne! Kūrėjai dirba su šia funkcija"
    },
    titleText: {
        login: "Prisijungimas",
        logout: "Atsijungimas",
        register: "Registracija",
        home: "Namai",
        about: "Apie mus",
        main: "Pagrindinis puslapis",
        note: "Užrašo peržiūrą",
        settings: "Nustatymai",
        tutorial: "Pamoka"
    }
};
