import React from "react";

import { 
    Banner,
    EditorTrial,
    Highlights,
    JoinUsPreFooter,
    UsageSteps
} from "./Sections";
import Footer from "#/containers/Footer";

const LandingPage = () => {
    return (
        <div className="scroll-container" style={{background: "white"}}>
            <Banner />
            <UsageSteps />
            <Highlights />
            <EditorTrial />
            <JoinUsPreFooter />
            <Footer />
        </div>
    );
};

export default LandingPage;
