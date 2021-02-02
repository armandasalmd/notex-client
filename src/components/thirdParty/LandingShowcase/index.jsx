/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import { I18nUtils } from "@utils";

import Banner2 from "./Banner2";
import Content0 from "./Content0";
import Feature4 from "./Feature4";
import Footer from "#/containers/Footer";

import * as DataSourceEn from "./data.source.en";
import * as DataSourceLt from "./data.source.lt";
import "./less/index.less";

let isMobile;
enquireScreen(b => {
    isMobile = b;
});

const { location = {} } = typeof window !== "undefined" ? window : {};

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port
        };
    }

    componentDidMount() {
        enquireScreen(b => {
            this.setState({ isMobile: !!b });
        });
        if (location.port) {
            setTimeout(() => {
                this.setState({
                    show: true
                });
            }, 500);
        }
    }

    render() {
        let source = {};
        const lang = I18nUtils.getPreferredLanguage();
        if (lang === I18nUtils.languages.lt.value) {
            source = DataSourceLt;
        } else {
            source = DataSourceEn;
        }

        const children = [
            <Banner2 id="Banner2_0" key="Banner2_0" dataSource={source.Banner20DataSource} isMobile={this.state.isMobile} />,
            <Content0 id="Content0_0" key="Content0_0" dataSource={source.Content00DataSource} isMobile={this.state.isMobile} />,
            <Feature4 id="Feature4_0" key="Feature4_0" dataSource={source.Feature40DataSource} isMobile={this.state.isMobile} />,
            <Footer key="Footer" />
        ];
        
        return (
            <div
                className="templates-wrapper"
                ref={d => {
                    this.dom = d;
                }}
            >
                {this.state.show && children}
            </div>
        );
    }
}
