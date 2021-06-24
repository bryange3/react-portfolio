import React from 'react';
import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';
import grouppic from '../../../assets/project/trill/group.png';

function TrillPage(props) {
    window.scrollTo(0, 0);
    const width = 6;
    return (
        <div>
            <ProjectTitle info={props.info} width={width} />
            <Content width={width}>
                <body>
                    <p>
                        <div className="project-card-type">{props.info.type}</div>
                        <br />
                        <br />
                        <b>Role</b>: {props.info.roles}
                        <br />
                        <b>Timeline</b>: {props.info.timeline}
                        <br />
                        <b>Design Tools</b>: Figma, Procreate
                    </p>

                    <hr class="rounded" />

                    <p>
                        As a Design Intern for Trill Project, I developed features for the mobile app, revamped the Trill Project website, and created graphics for partnerships. My work consisted of ideation, wireframing, and prototyping new mobile app features, as well as conducting user research and developing beta tester relations.
                    </p>

                    <p>
                        I lead the creation of designs used for Mental Wealth Month, a campaign done in collaboration with Tumblr. These designs were displayed on the top of Tumblr's feed and used to promote awareness for mental health and relevant apps.
                    </p>

                    <p>
                        Here is the website I designed in Webflow as part of this campaign:
                    </p>

                    <iframe className="project-img center" width="500" height="500" src="https://www.youtube-nocookie.com/embed/29cF85m_jjE?autoplay=1&mute=1&loop=1&playlist=29cF85m_jjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <br />
                    <p>
                        For more details, contact me at <a href="mailto:bryange3@gmail.com" target="_blank" rel="noreferrer" className="default" alt="Email">bryange3@gmail.com</a>!
                    </p>

                    <hr class="rounded" />

                    <img src={grouppic} alt="Trill Group Photo" className="captionedImg center" />
                    <p className="image-caption">
                        Here's a group pic from our final meeting! Will definitely miss this team. :,)
                    </p>
                </body>
            </Content>
        </div>
    );
}

export default TrillPage;