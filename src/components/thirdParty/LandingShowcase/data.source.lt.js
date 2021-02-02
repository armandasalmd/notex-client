import React from "react";
import { Link } from "react-router-dom";

export const Content00DataSource = {
    wrapper: { className: "home-page-wrapper content0-wrapper" },
    page: { className: "home-page content0" },
    OverPack: { playScale: 0.3, className: "" },
    titleWrapper: {
        className: "title-wrapper",
        children: [
            {
                name: "title",
                children: (
                    <span>
                        <span>
                            <p>Ką mes galime pasiūlyti?</p>
                        </span>
                    </span>
                )
            }
        ]
    },
    childWrapper: {
        className: "content0-block-wrapper",
        children: [
            {
                name: "block0",
                className: "content0-block",
                md: 8,
                xs: 24,
                children: {
                    className: "content0-block-item",
                    children: [
                        {
                            name: "image",
                            className: "content0-block-icon",
                            children: <img src="/images/ira/inbox.svg" alt=""></img>
                        },
                        {
                            name: "title",
                            className: "content0-block-title",
                            children: (
                                <span>
                                    <p>Dalinkis savo užrašais</p>
                                </span>
                            )
                        },
                        {
                            name: "content",
                            children: (
                                <span>
                                    <p>Leisk savo draugams ir studijų bičiuliams mokytis iš tavęs</p>
                                </span>
                            )
                        }
                    ]
                }
            },
            {
                name: "block1",
                className: "content0-block",
                md: 8,
                xs: 24,
                children: {
                    className: "content0-block-item",
                    children: [
                        {
                            name: "image",
                            className: "content0-block-icon",
                            children: <img src="/images/ira/pig.svg" alt=""></img>
                        },
                        {
                            name: "title",
                            className: "content0-block-title",
                            children: (
                                <span>
                                    <span>
                                        <span>
                                            <p>Visiškai nemokama</p>
                                        </span>
                                    </span>
                                </span>
                            )
                        },
                        {
                            name: "content",
                            children: (
                                <span>
                                    <p>Tau nereikia mokėti už naudojimą. Tai visiškai nemokama</p>
                                </span>
                            )
                        }
                    ]
                }
            },
            {
                name: "block2",
                className: "content0-block",
                md: 8,
                xs: 24,
                children: {
                    className: "content0-block-item",
                    children: [
                        {
                            name: "image",
                            className: "content0-block-icon",
                            children: <img src="/images/ira/rocket.svg" alt=""></img>
                        },
                        {
                            name: "title",
                            className: "content0-block-title",
                            children: (
                                <span>
                                    <p>Užrašų knygutės išsaugomos internete</p>
                                </span>
                            )
                        },
                        {
                            name: "content",
                            children: (
                                <span>
                                    <p>Kurkis užrašus ir prisijungęs pasiek juos betkur</p>
                                </span>
                            )
                        }
                    ]
                }
            }
        ]
    }
};
export const Feature40DataSource = {
    wrapper: { className: "home-page-wrapper content6-wrapper" },
    OverPack: { className: "home-page content6" },
    textWrapper: { className: "content6-text", xs: 24, md: 10 },
    titleWrapper: {
        className: "title-wrapper",
        children: [
            {
                name: "title",
                children: (
                    <span>
                        <p>Notex svetainės ypatybės</p>
                    </span>
                ),
                className: "title-h1"
            },
            {
                name: "content",
                className: "title-content",
                children: (
                    <span>
                        <p>Nori sužinoti ką Notex gali tau pasiūlyti?</p>
                    </span>
                )
            }
        ]
    },
    img: {
        children: "/images/undraw/undraw_work_time.svg",
        className: "content6-img",
        xs: 24,
        md: 14
    },
    block: {
        children: [
            {
                name: "block0",
                img: {
                    children: "/images/ira/bag.svg",
                    className: "content6-icon"
                },
                title: {
                    className: "content6-title",
                    children: (
                        <span>
                            <span>
                                <p>Grupuok užrašus į užrašų knygutes</p>
                            </span>
                        </span>
                    )
                },
                content: {
                    className: "content6-content",
                    children: (
                        <span>
                            <p>Tu gali sukurti atskiras knygutes kaip aplankalus ir grupuoti savo užrašus kartu</p>
                        </span>
                    )
                }
            },
            {
                name: "block1",
                img: {
                    className: "content6-icon",
                    children: "/images/ira/computer.svg"
                },
                title: {
                    className: "content6-title",
                    children: (
                        <span>
                            <span>
                                <p>Kontroliuok kas gali matyti tavo turinį</p>
                            </span>
                        </span>
                    )
                },
                content: {
                    className: "content6-content",
                    children: (
                        <span>
                            <p>Padaryk užrašus viešus arba privačius. Pasirenkant viešinti, tu gali pasidalinti nuoroda su savo draugais&nbsp;</p>
                        </span>
                    )
                }
            },
            {
                name: "block2",
                img: {
                    className: "content6-icon",
                    children: "/images/ira/tools.svg"
                },
                title: {
                    className: "content6-title",
                    children: (
                        <span>
                            <p>Intuityvus redagavimas</p>
                        </span>
                    )
                },
                content: {
                    className: "content6-content",
                    children: (
                        <span>
                            <p>
                                Sutelk dėmesį į redagavimą, o ne į teksto formatavimą. Šis lengvai suprantamas redagavimo įrankis leidžia tau kurti žaibo greičiu
                            </p>
                        </span>
                    )
                }
            }
        ]
    }
};
export const Banner20DataSource = {
    wrapper: { className: "banner2" },
    BannerAnim: {
        children: [
            {
                name: "elem0",
                BannerElement: { className: "banner-user-elem" },
                page: { className: "home-page banner2-page" },
                textWrapper: { className: "banner2-text-wrapper" },
                bg: { className: "bg bg0" },
                title: { className: "banner2-title", children: "Kurk užrašus internete - naudok Notex" },
                content: {
                    className: "banner2-content",
                    children: "Prisijunk, kurk užrašus debesyje, kuriuos galėsi pasiekti kada panorėjęs"
                },
                button: { className: "banner2-button", children: <Link to="/auth/register">Noriu išbandyti</Link> }
            }
        ]
    }
};
