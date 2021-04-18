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
                    <h2 className="font-weight-bold">
                        Education
                    </h2>
                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            University of Illinois at Urbana-Champaign
                        </span>
                        <br />B.S. Statistics and Computer Science
                        <br />Minors in Business and Informatics
                        <br />Expected May 2024
                    </p>
                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Texas Academy of Math and Science
                        </span>
                        <br />Computer Science Track
                        <br />TAMS is an early college high school program offered at the University of North Texas.
                        <br />May 2018 - August 2020
                    </p>
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <h2 className="font-weight-bold">
                        Experience
                    </h2>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Product Design Intern<span className="my-gray">, Trill Project</span>
                        </span>
                        <br />February. 2021 - Present
                        <br />Trill is a platform that aims to be a safe and inclusive space, enabling people to freely and anonymously express themselves.
                    </p>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Course Assistant<span className="my-gray">, UIUC</span>
                        </span>
                        <br />Jan. 2021 - Present
                    <br />Course Assistant for STAT 107: Data Science Discovery. Leading Python lab discussion sections and holding office hours to answer students' statistics and programming questions.
                    </p>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            UI Designer<span className="my-gray">, Design Innovation</span>
                        </span>
                        <br />Sept. 2020 - Dec. 2020
                        <br />Collaborated with 3 other students to design a website interface on Figma that enables students to code and share Internet of Things projects.
                    </p>
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <h2 className="font-weight-bold">
                        Projects
                    </h2>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Web Developer & Content Creator<span className="my-gray">, Daily Awareness Society</span>
                        </span>
                        <br />Sept. 2020 - Present
                        <br />Completed development of dailyawarenesssociety.com website using HTML, CSS, and JavaScript, resulting in 10,000+ page views and 600+ website users in the span of 5 months.
                    </p>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            UX/UI Designer<span className="my-gray">, Women in Computer Science</span>
                        </span>
                        <br />Jan. 2021 - March 2021
                        <br />Currently developing University SafeWalks app, a way for students to find others to walk with to safely reach their destinations on campus.
                    </p>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Software Developer<span className="my-gray">, Mining for Bias</span>
                        </span>
                        <br />Sept. 2020 - Dec. 2020
                        <br />Utilized Python and React to develop a program that takes the URL of a news article and provides an evaluation of the bias within it.
                    </p>
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <h2 className="font-weight-bold">
                        Involvement
                    </h2>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Executive<span className="my-gray">, Sexuality and Gender Alliance</span>
                        </span>
                        <br />Aug. 2019 - May 2020
                    <br />Prepared presentations on LGBTQ topics and passed legislation to add pronouns to nameplates inside the TAMS residence hall to promote awareness of gender identities.
                    </p>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Senior Mentor<span className="my-gray">, Texas Academy of Math and Science</span>
                        </span>
                        <br />Aug. 2019 - May 2020
                        <br />Assisted 20 junior students with their transition and journey at TAMS academically and socially through room checks, wing meetings, and social events.
                    </p>
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <h2 className="font-weight-bold">
                        Honors
                    </h2>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            1st Place at HackDuke Ideate Designathon
                        </span>
                        <br />Apr. 2021
                        <br />Designed social platform to connect the elderly, focusing on accessibility.
                    </p>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Winner of Francis & Rose Yuen East Asia Hackathon
                        </span>
                        <br />Dec. 2020
                        <br />Developed an educational and interactive web app in a team of 4 using HTML, CSS, JavaScript, and Python for children to learn about the effects of carbon emissions starting with a new generation.
                    </p>

                    <p className="paragraph">
                        <span className="my-blue font-weight-bold">
                            Collegiate DECA State Finalist & International Qualifier
                        </span>
                        <br />Feb. 2019
                        <br />State finalist in Financial Statement Analysis team event.
                    </p>
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <h2 className="font-weight-bold">
                        Skills
                    </h2>

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
        </FadeIn>
    );
}

export default ResumePage;