import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

import FadeIn from 'react-fade-in';

function ResumePage(props) {
    const width = 6;
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <Hero title={props.title} width={width} />
            <Content width={width}>
                <p className="paragraph impact-statement">
                    📄 Download a PDF of my <a href="https://drive.google.com/file/d/1-pRAr78uW9v78C29tuOPyQXWrNPQs0eq/view?usp=sharing" target="_blank" rel="noreferrer" className="default">Professional Resume</a> or <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noreferrer" className="default">Creative Resume</a>.
                </p>
                <p className="paragraph">
                    <h2 className="font-weight-bold">
                        Education
                    </h2>
                    <span className="my-blue font-weight-bold">
                        University of Illinois at Urbana-Champaign
                    </span>
                    <br />Anticipated May 2024
                    <br />B.S. Statistics and Computer Science with a minor in Business
                </p>

                <br />
                <hr className="rounded" />

                <p className="paragraph">
                    <h2 className="font-weight-bold">
                        Experience
                    </h2>

                    <span className="my-blue font-weight-bold">
                        User Interface Designer<span className="my-gray">, Design Innovation</span>
                    </span>
                    <br />Sept. 2020 - Present
                    <br />Collaborated with 3 other students to design a website interface on Figma that enables students to code and share Internet of Things projects.

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Web Developer & Content Creator<span className="my-gray">, Daily Awareness Society</span>
                        </span>
                        <br />Sept. 2020 - Present
                        <br />Completed development of dailyawarenesssociety.com website using HTML, CSS, and JavaScript, resulting in 4000+ page hits and 341 website users since August 2020.
                    </p>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Software Developer<span className="my-gray">, Mining for Bias</span>
                        </span>
                        <br />Sept. 2020 - Dec. 2020
                        <br />Utilized Python and React to develop a program that takes the URL of a news article and provides an evaluation of the bias within it.
                    </p>
                </p>

                <br />
                <hr className="rounded" />

                <p className="paragraph">
                    <h2 className="font-weight-bold">
                        Leadership
                    </h2>

                    <span className="my-blue font-weight-bold">
                        Executive<span className="my-gray">, Sexuality and Gender Alliance</span>
                    </span>
                    <br />Aug. 2019 - May 2020
                    <br />Prepared presentations on LGBTQ topics and passed legislation to add pronouns to nameplates inside the TAMS residence hall to promote awareness of gender identities.

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Senior Mentor<span className="my-gray">, Texas Academy of Math and Science</span>
                        </span>
                        <br />Aug. 2019 - May 2020
                        <br />Assisted 20 junior students with their transition and journey at TAMS academically and socially through room checks, wing meetings, and social events.
                    </p>
                </p>

                <br />
                <hr className="rounded" />

                <p className="paragraph">
                    <h2 className="font-weight-bold">
                        Awards
                    </h2>

                    <span className="my-blue font-weight-bold">
                        Winner of Francis & Rose Yuen East Asia Hackathon
                        </span>
                    <br />Dec. 2020
                    <br />Developed an educational and interactive web app in a team of 4 using HTML, CSS, JavaScript, and Python for children to learn about the effects of carbon emissions starting with a new generation.

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Collegiate DECA State Finalist & International Qualifier
                        </span>
                        <br />Feb. 2019
                        <br />State finalist in Financial Statement Analysis team event.
                    </p>
                </p>

                <br />
                <hr className="rounded" />

                <p className="paragraph">
                    <h2 className="font-weight-bold">
                        Skills
                    </h2>

                    <span className="font-weight-bold">
                        Programming Languages
                        </span>
                    <br />Java, C/C++, Python, HTML, CSS, JavaScript

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            Design Tools
                        </span>
                        <br />Figma, Adobe XD, Adobe Lightroom
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            Languages
                        </span>
                        <br />English, Mandarin Chinese
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            Certificates
                        </span>
                        <br />Introduction to User Experience Design (Coursera - Georgia Tech)
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            UIUC Relevant Courses
                        </span>
                        <br />CS 126 Software Design Studio
                        <br />CS 196 Freshman Honors (Semester Project Course)
                        <br />STAT 107 Data Science Discovery
                        <br />MATH 415 Linear Algebra with Computational Applications
                    </p>
                </p>
            </Content>
        </FadeIn>
    );
}

export default ResumePage;