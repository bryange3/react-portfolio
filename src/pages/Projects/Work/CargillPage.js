import React from 'react';
import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';

function CargillPage(props) {
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
                        <b>Design Tools</b>: Figma, FigJam
                    </p>

                    <hr class="rounded" />

                    <p>
                        As the sole UX/UI Design Intern in my project team at Cargill, I lead our product's discovery, user research, wireframing, and prototyping efforts. The internship has provided me the opportunity to directly interact with clients through demos, discovery sessions, and shadowing sessions. These meetings have helped me identify our problem space and what the client finds most valuable.
                    </p>

                    <p>
                        I've also learned how to collaborate and communicate with software engineers through daily standup, clarifications regarding designs, creating a style sheet, and utilizing Material UI and React components for easy handoff and quick developer prototyping.
                    </p>

                    <p>
                        In fact, I also ran a mini design sprint with the developers in my team to view our product and problem space from a variety of angles. Collectively writing out how-might-we statements and noticing the similarities and differences in them helped us discover edge cases and potential features for our dashboard that could greatly benefit our target users.
                    </p>

                    <p>
                        More details to come!
                    </p>
                </body>
            </Content>
        </div>
    );
}

export default CargillPage;