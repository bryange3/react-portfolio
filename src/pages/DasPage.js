import React from 'react';

import Content from '../components/Content.js';
import ProjectTitle from '../components/ProjectTitle.js';

import dasscreenshot from '../assets/project/dasscreenshot.png';

function DasPage(props) {
    window.scrollTo(0, 0);
    const width = 7;
    return (
        <div>
            <ProjectTitle info={props.info} width={width}/>
            <Content width={width}>
                <body>
                    <p>
                        <b>Role</b>: {props.info.roles}
                        <br />
                        <b>Timeline</b>: {props.info.timeline}
                        <br />
                        <b>Team Members</b>: {props.info.teamMembers}
                        <br />
                        <b>Tech Stack</b>: HTML, CSS, JavaScript
                    </p>
                    <br />
                    <hr class="rounded" />

                    <p className="paragraph">
                        During the fall semester of our last year of high school, some friends and I decided to create Daily Awareness Society (DAS). It started out as a small club where we and other students would get together at club meetings to discuss current events. DAS grew to become a website and community where we would post new articles every Sunday.
                    </p>

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Problem
                        </h2>
                        Young adults may often feel like they are trapped inside a small bubble within their local communities. They may not feel as well connected with issues and events happening in the rest of the country or world. This includes a wide variety of topics including health, modern films, injustice, ethics, and more.
                    </p>

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Solution
                        </h2>
                        Daily Awareness Society aims to tackle this feeling of isolation through coverage of current events in STEM, entertainment, and lifestyle through the form of a published article every week on the dailyawarenesssociety.com website. It is through promotion on social media platforms that we hope to spread awareness on key topics to other young adults.
                    </p>

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            My Work
                        </h2>
                        I wrote articles on topics including self-care, productivity, and current events and published them using <b>HTML</b>. I also utilized <b>CSS</b> for aspects of the user interface including the article view, spacing between elements, and responsivity for mobile and desktop screens. Through weekly posts and social media promotion, dailyawarenesssociety.com has accumulated <b>656 users, 10,748 page views, and 1421 sessions over the course of 5 months</b>.
                    </p>

                    <p className="paragraph">
                        Check out our website at <a href="https://dailyawarenesssociety.com/" target="_blank" rel="noreferrer" className="default">dailyawarenesssociety.com</a>!
                    </p>

                    <a href="https://dailyawarenesssociety.com/" target="_blank" rel="noreferrer"><img src={dasscreenshot} alt="DAS Website Screenshot" className="project-img-medium center" /></a>

                </body>
            </Content>
        </div>
    );
}

export default DasPage;