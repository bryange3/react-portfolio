import React from 'react';

import Content from '../components/Content.js';
import ProjectTitle from '../components/ProjectTitle.js';

import dasscreenshot from '../assets/project/dasscreenshot.png';

function DasPage(props) {
    window.scrollTo(0, 0);
    const width = 8;
    return (
        <div>
            <ProjectTitle info={props.info}/>
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
                        Check out our website at <a href="https://dailyawarenesssociety.com/" target="_blank" rel="noreferrer" className="default">dailyawarenesssociety.com</a>!
                    </p>

                    <a href="https://dailyawarenesssociety.com/" target="_blank" rel="noreferrer"><img src={dasscreenshot} alt="DAS Website Screenshot" className="project-img-medium center" /></a>

                </body>
            </Content>
        </div>
    );
}

export default DasPage;