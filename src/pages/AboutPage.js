import React from 'react';

import AOS from 'aos';

import aboutpic from '../assets/aboutprofpic.jpg';

import Hero from '../components/Hero';
import Content from '../components/Content';

import Container from 'react-bootstrap/Container';

import FadeIn from 'react-fade-in';

function AboutPage(props) {
    AOS.init();
    const width = 8;
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <Hero title={props.title} width={width - 2} />
            <Container fluid={true} class="full-width">
                <div class="content">
                    <div class="left" data-aos="fade-right">
                        <img
                            class="profile-image"
                            alt="Profile"
                            src={aboutpic}
                        />
                    </div>
                    <div class="right">
                        <p className="about-subtitle">
                            Hi there! I'm Bryan Ge.
                        </p>

                        <p>
                            I’m currently a freshman at the University of Illinois at Urbana-Champaign majoring in <a className="link-underline" target="_blank" rel="noreferrer" href="https://cs.illinois.edu/academics/undergraduate/degree-program-options/bs-statistics-computer-science">Statistics and Computer Science</a> and minoring in Business and Informatics. I am heavily involved in the design community on campus, especially through <a className="link-underline" target="_blank" rel="noreferrer" href="https://www.designinnovationillinois.com/">Design Innovation</a> and <a className="link-underline" target="_blank" rel="noreferrer" href="http://wcs.illinois.edu/">Women in Computer Science</a> student organizations.
                        </p>

                        <p className="about-subtitle">
                            What am I up to right now?
                        </p>

                        <p>
                            I am a Product Design Intern at <a className="link-underline" target="_blank" rel="noreferrer" href="https://trillproject.com/">Trill Project</a> ideating, wireframing, and prototyping features for mobile and web apps. I am also involved in the user research committee and have worked on developing beta tester relations to gain a better understanding of our customers' wants.
                        </p>

                        <p>
                            I am also currently a Course Assistant for <a className="link-underline" target="_blank" rel="noreferrer" href="https://stat107.hknguyen.org/">Data Science Discovery</a>, a course I enjoyed last semester. As a CA, I hold weekly office hours where I answer students’ statistical concepts, programming, and homework questions. I also lead discussion sections where students work on Python labs that help solidify their understanding of statistical methods through programming.
                        </p>

                        <p className="about-subtitle">
                            Outside of school, I enjoy...
                        </p>

                        <p>
                            🎞️ watching thrillers with friends
                            <br />📸 going on photoshoots
                            <br />👨‍🍳 baking blueberry crumble & cranberry brie tarts
                            <br />🐶 spending time with my sister and her corgi (Denzel Corgiton)
                        </p>

                        <p>
                            I'm always down to chat! Feel free to email me at <a className="link-underline" href="mailto:bryanjg2@illinois.edu">bryanjg2@illinois.edu</a>.
                        </p>
                    </div>
                </div>
                <Content width={width - 2}>
                    <hr class="rounded" />
                    <p className="about-subtitle">
                        Shoutout to my mentors and design moms!
                    </p>
                    <p>
                        I've received a ton of support from my friends and members of the design community. Their guidance and mentorship has been incredibly impactful and I am beyond appreciative of them. Thank you. 🥰
                        <p className="paragraph">
                            <ul>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/takarasatone/">Takara Satone</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.amandahe.com/">Amanda He</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://athenatang.com/">Athena Tang</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://riyajain.me/">Riya Jain</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ayushis3/">Ayushi Singh</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/meichen-ge-9a980441/">Meichen Ge</a> (best sister!)</li>
                            </ul>
                        </p>
                    </p>
                </Content>
            </Container>
        </FadeIn>
    );
}

export default AboutPage;