/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Banner2 from "./Banner2";
import Content0 from "./Content0";
import Feature4 from "./Feature4";
import Footer from "#/containers/Footer";

import { Content00DataSource, Feature40DataSource, Banner20DataSource } from "./data.source";
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
        const children = [
            <Banner2 id="Banner2_0" key="Banner2_0" dataSource={Banner20DataSource} isMobile={this.state.isMobile} />,
            <Content0 id="Content0_0" key="Content0_0" dataSource={Content00DataSource} isMobile={this.state.isMobile} />,
            <Feature4 id="Feature4_0" key="Feature4_0" dataSource={Feature40DataSource} isMobile={this.state.isMobile} />,
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
