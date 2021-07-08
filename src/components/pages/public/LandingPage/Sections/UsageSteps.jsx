import React from "react";
import "./UsageSteps.less";

const STEPS = [
    {
        id: 1,
        title: "1. Create private note",
        description: "Login to Notex and create your first notebook (collection of notes). Using intuitive editor this process is made easy.",
        image: "/images/landing/step-1.png"
    },
    {
        id: 2,
        title: "2. Convert note to an article",
        description: "Notes are just for you. If you want to share this, create an article from a note text. Article management page provides easy interface to manage your publications.",
        image: "/images/landing/step-2.png"
    },
    {
        id: 3,
        title: "3. Publish your article",
        description: "Articles can be searched by the anyone and link is sharable. If you want to change content, you have to sync article with note text in management page.",
        image: "/images/landing/step-3.png"
    }
];

const UsageStep = (props) => {
    const IMAGE_SIZE = 164;

    return (
        <div className="usageSteps__step">
            <img width={IMAGE_SIZE} height={IMAGE_SIZE} src={props.image} alt={props.title} />
            <h1 className="usageSteps__stepTitle">{props.title}</h1>
            <p className="usageSteps__stepDescription">{props.description}</p>
        </div>
    );
};

const UsageSteps = () => {
    
    const steps = STEPS.map(({id, ...rest}) => <UsageStep key={id} {...rest} />)

    return (
        <section className="usageSteps">
            <h1 className="usageSteps__title">How does Notex work?</h1>
            <div className="usageSteps__steps">
                {steps}
            </div>
        </section>
    );
};

export default UsageSteps;