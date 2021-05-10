import React from 'react';

import AOS from 'aos';

import Hero from '../components/Hero';
import Content from '../components/Content';

import FadeIn from 'react-fade-in';

function ResumePage(props) {
    AOS.init();
    const width = 6;
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <Hero title={props.title} width={width} />
            <Content width={width}>
                <p className="paragraph impact-statement">
                    📄 Download a PDF of my <a href="https://drive.google.com/file/d/1q-DN1mdAKj0zdZgWGs1KtQrXB2qPogue/view?usp=sharing" target="_blank" rel="noreferrer" className="link-underline">professional resume</a> or <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noreferrer" className="link-underline">creative resume</a>.
                </p>
                <p className="paragraph">
                    <p className="section">
                        Education
                    </p>

                    <h3 className="resume-point">
                        University of Illinois at Urbana-Champaign
                    </h3>
                    B.S. Statistics and Computer Science
                    <br />Minors in Business and Informatics
                    <br />Expected May 2024

                    <h3 className="resume-point">
                        Texas Academy of Math and Science
                    </h3>
                    Computer Science Track
                    <br />TAMS is an early college high school program offered at the University of North Texas.
                    <br />May 2018 - August 2020
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <p className="section">
                        Experience
                    </p>

                    <h3 className="resume-point">
                        Product Design Intern<span className="resume-company"> / Trill Project</span>
                    </h3>
                    <p className="resume-date">February 2021 - Present</p>
                    Trill is a platform that aims to be a safe and inclusive space, enabling people to freely and anonymously express themselves.

                    <h3 className="resume-point">
                        Course Assistant<span className="resume-company"> / UIUC</span>
                    </h3>
                    <p className="resume-date">January 2021 - Present</p>
                    Course Assistant for STAT 107: Data Science Discovery. Leading Python lab discussion sections and holding office hours to answer students' statistics and programming questions.
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <p className="section">
                        Involvement
                    </p>

                    <h3 className="resume-point">
                        Operations Strategist<span className="resume-company"> / National Hack4Impact</span>
                    </h3>
                    <p className="resume-date">April 2021 - Present</p>
                    Hack4Impact is an organization that builds nonprofit software for social good. Currently working on internal chapter growth and mentorship initiatives.

                    <h3 className="resume-point">
                        Events Programmer<span className="resume-company"> / TechTogether Chicago</span>
                    </h3>
                    <p className="resume-date">May 2021 - Present</p>
                    TechTogether is the nation's largest initiative to address the gender inequities in the hackathon community.
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <p className="section">
                        Honors
                    </p>

                    <h3 className="resume-point">
                        1st Place at HackDuke Ideate Designathon
                    </h3>
                    <p className="resume-date">April 2021</p>
                    Designed social platform to connect the elderly, focusing on accessibility.

                    <h3 className="resume-point">
                        Winner of Francis & Rose Yuen East Asia Hackathon
                    </h3>
                    <p className="resume-date">December 2020</p>
                    Developed an educational and interactive web app in a team of 4 using HTML, CSS, JavaScript, and Python for children to learn about the effects of carbon emissions starting with a new generation.
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <p className="section">
                        Skills
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            Programming
                        </span>
                        <br />Java, C/C++, Python, HTML, CSS, JavaScript, React.js, R
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            Design
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
                            Personal Coursework
                        </span>
                        <br />Introduction to User Experience Design (Coursera - Georgia Tech)
                        <br />Designing for Conversation (Amazon Alexa)
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            UIUC Coursework
                        </span>
                        <br />CS 225 Data Structures (C++)
                        <br />CS 126 Software Design Studio (Java/C++)
                        <br />CS 196 Freshman Honors - Semester Project Course (Python, React.js)
                        <br />STAT 400 Statistics & Probability I (R)
                        <br />STAT 107 Data Science Discovery (Python)
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            TAMS (UNT) Coursework
                        </span>
                        <br />CSCE 2100 Computing Foundations I - Discrete Structures
                        <br />CSCE 1040 Computer Science II - Object-Oriented Programming (C++)
                        <br />CSCE 1030 Computer Science I (C++)
                    </p>
                </p>
            </Content>
        </FadeIn >
    );
}

export default ResumePage;