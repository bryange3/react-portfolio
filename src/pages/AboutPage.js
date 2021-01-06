import React from 'react';

import AOS from 'aos';

import aboutpic from '../assets/aboutprofpic.jpg';

import Hero from '../components/Hero';

import Container from 'react-bootstrap/Container';

import FadeIn from 'react-fade-in';

function AboutPage(props) {
    AOS.init();
    const width = 8;
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <Hero title={props.title} width={width} />
            <Container fluid={true}>
                <div class="content">
                    <div class="left" data-aos="fade-right">
                        <img
                            class="profile-image"
                            alt="Profile"
                            src={aboutpic}
                        />
                    </div>
                    <div class="right about-text">
                        <p>
                            Hi there! I'm Bryan and I am currently based in Dallas, TX and Champaign, IL. I am a freshman at the University of Illinois at Urbana-Champaign, majoring in Statistics and Computer Science and minoring in Business.
                        </p>

                        <p>
                            Outside of school, I enjoy:
                            <br />🎞️ watching thrillers with friends
                            <br />📸 going on photoshoots (pre-covid)
                            <br />👨‍🍳 baking blueberry crumble & cranberry brie tarts
                            <br />🐶 spending time with my sister and her corgi (Denzel)
                        </p>

                        <p>
                            Some of my favorite TV shows include Kim's Convenience, Superstore, and The Bachelor. I enjoy listening to lo-fi beats, BTS piano, and Ariana Grande. I'm always down to chat! Feel free to email me at <a className="default" href="mailto:bryanjg2@illinois.edu">bryanjg2@illinois.edu</a>.
                        </p>

                        <p>
                            Thanks for checking out my portfolio!
                        </p>
                    </div>
                </div>
            </Container>
        </FadeIn>
    );
}

export default AboutPage;