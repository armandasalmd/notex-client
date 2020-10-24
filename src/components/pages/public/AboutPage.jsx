import React from "react";

const About = () => {
    return (
        <section style={{ marginBottom: '48px' }}>
            <h2>What is this site about?</h2>
            <div className="divider" />
            <article>
                <p>
                    Why can't we get rid of textbooks in an era of
                    computers? Create an account and make your
                    school/university notes online. You are going to be
                    using simple file formating - Markdown.
                </p>
                <p>
                    Don't know how to use MarkDown? Have a quick tutorial:
                    <a href="https://www.markdowntutorial.com/">
                        https://www.Markdowntutorial.com
                    </a>
                </p>
                <p>
                    Take a look at the MarkDown cheatsheet here:
                    <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
                        https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
                    </a>
                </p>
            </article>
        </section>
    );
};

export default About;