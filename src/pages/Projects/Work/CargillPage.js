import React from 'react';
import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';

import timeline from '../../../assets/project/cargill/Timeline.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CargillPage(props) {
    window.scrollTo(0, 0);
    const width = 8;
    return (
        <div>
            <ProjectTitle info={props.info} width={width} />
            <Content width={width}>
                <body>
                    <Row>
                        <Col sm>
                            <b>Role</b>
                            <br />UX Design
                            <br />UI Design
                            <br />User Research
                            <br />User Testing
                            <br />Client Presentation
                        </Col>
                        <Col sm>
                            <b>Timeline</b>
                            <br />
                            11 weeks
                        </Col>
                        <Col sm>
                            <b>Team Members</b>
                            <br />
                            1 UX/UI Design Intern
                            <br />3 Software Engineering Interns
                            <br />1 Product Coach
                            <br />1 Technical Coach
                        </Col>
                        <Col sm>
                            <b>Client</b>
                            <br />
                            Cargill's McDonald's Business Unit
                        </Col>
                        <Col sm>
                            <b>Design Tools</b>
                            <br />Figma
                            <br />FigJam
                        </Col>
                    </Row>

                    <hr class="rounded" />

                    <p className="paragraph">
                        <p className="section">
                            Summary
                        </p>
                        As the <b>sole designer</b> in my project team at Cargill, I lead our product's discovery, user research, wireframing, and prototyping efforts. The internship has provided me the opportunity to directly interact with clients through discovery and shadowing sessions, demos, and feedback calls. These meetings  helped me identify our problem space as well as what the client values.
                        <p className="paragraph">
                            I am unable to display my work due to <b>NDA restrictions</b>, so please contact me at <a className="link-underline" href="mailto:bryange3@gmail.com">bryange3@gmail.com</a> if you want to find out more!
                        </p>
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Process
                        </p>

                        <img src={timeline} alt="Timeline" className="project-img" />
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Reflections
                        </p>

                        <h3 className="subsection">
                            I've learned how to collaborate and communicate within a cross-functional team in an Agile environment.
                        </h3>
                        This included daily standup, clarifications regarding designs, creating a style sheet, and utilizing Material UI and React components for easy handoff and quick developer prototyping.

                        <h3 className="subsection">
                            Being open-minded and maintaining a culture where all team members are involved increases communication and efficiency.
                        </h3>

                        <p className="paragraph">
                            I ran a mini design sprint with the developers in my team to view our product and problem space from a variety of angles. Collectively writing out how-might-we statements and noticing the similarities and differences in them helped us discover edge cases and potential features for our dashboard that could greatly benefit our target users.
                        </p>
                    </p>
                </body>
            </Content>
        </div>
    );
}

export default CargillPage;