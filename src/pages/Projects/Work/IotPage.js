import React from 'react';

import Collapsible from 'react-collapsible';

import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';

import landingpage from '../../../assets/project/iot/landingpage.png';
import projectdashboard from '../../../assets/project/iot/projectdashboard.png';
import codinginterface from '../../../assets/project/iot/codinginterface.png';
import dashboard from '../../../assets/project/iot/dashboard.png';
import classintegration from '../../../assets/project/iot/classintegration.png';
import category from '../../../assets/project/iot/category.png';
import drag from '../../../assets/project/iot/drag.png';
import componentinfo from '../../../assets/project/iot/componentinfo.png';
import ideation from '../../../assets/project/iot/ideation.png';
import community from '../../../assets/project/iot/community.png';
import hmwinsight from '../../../assets/project/iot/hmwinsight.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function IotPage(props) {
    window.scrollTo(0, 0);
    const width = 10;
    return (
        <div>
            <ProjectTitle info={props.info} width={7} />
            <Content width={width}>
                <body>
                    <div class="med-text">
                        <Row>
                            <Col sm>
                                <b>Role</b>
                                <br />UI Design
                                <br />User Research
                            </Col>
                            <Col sm>
                                <b>Timeline</b>
                                <br />
                                {props.info.timeline}
                            </Col>
                            <Col sm>
                                <b>Team Members</b>
                                <br />
                                1 Design Lead
                                <br />
                                3 UI Designers
                            </Col>
                            <Col sm>
                                <b>Client</b>
                                <br />
                                Professor Matthew Caesar (UIUC Computer Science Professor)
                            </Col>
                            <Col sm>
                                <b>Design Tools</b>
                                <br />
                                Figma
                            </Col>
                        </Row>
                        
                        <br />
                        This project was conducted at Design Innovation Illinois for Professor Matthew Caesar's website.

                        <hr class="rounded" />

                        <p className="paragraph impact-statement">
                            🧩 IDEofThings is a website where college students can manage and code Internet of Things projects and share them with their classmates and the world.
                        </p>

                        <p className="paragraph">
                            <p className="section">
                                Problem
                            </p>
                            <h3 className="subsection">
                                The existing design is not informational, user-friendly, or practical and is lacking in common features found in competing platforms.
                            </h3>
                            Our job is to improve the existing design's landing page, project dashboard, and coding interface as well as create designs for the account and community page.
                        </p>

                        <p className="paragraph">
                            <p className="section">
                                Solution
                            </p>
                            <h3 className="subsection">
                                IoT's interface is more appealing to students and easier to navigate.
                            </h3>
                            IDEofThings is a refreshing improvement to the original design, as it is more informational, understandable, and modern. The main features include <mark>class integration, project dashboard filtering, improved coding experience, and community sharing</mark>.
                        </p>

                        <p>
                            View the full video demo below:
                        </p>
                    </div>

                    <iframe title="Internet of Things Playground Demo" className="project-img-medium center" width="990" height="560" src="https://www.youtube-nocookie.com/embed/fvJg08nuAVk?autoplay=1&mute=1&loop=1&playlist=fvJg08nuAVk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <p className="paragraph med-text">
                        <br />
                        Check out the side-by-sides of the existing and new designs for the landing page, project dashboard, and coding interface:
                    </p>

                    <img src={landingpage} alt="Landing Page Before & After" className="project-img" />
                    <img src={projectdashboard} alt="Project Dashboard Before & After" className="project-img" />
                    <img src={codinginterface} alt="Coding Interface Before & After" className="project-img" />

                    <p className="paragraph med-text">
                        <hr className="rounded" />
                        <p className="section">
                            Key Features
                        </p>
                        <h3 className="subsection">Informational Landing Page</h3>
                        <p className="line-space">The landing page provides information on what the IDEofThings platform is used for. When the log-in/sign-up overlay is opened, the background is faded to focus the user's attention on the log-in pane.</p>
                        <iframe title="Landing Page/Login" className="project-img center" width="560" height="500" src="https://www.youtube.com/embed/xJuGz0JpZE4?autoplay=1&mute=1&loop=1&playlist=xJuGz0JpZE4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <br />
                        <h3 className="subsection">Intuitive Project Dashboard Filtering</h3>
                        <p className="line-space">Students' ability to view projects that have been submitted for classes or starred for individual use makes navigating projects incredibly simple.</p>
                        <img src={dashboard} alt="Project Dashboard" className="project-img center" />

                        <br />
                        <h3 className="subsection">Upcoming Assignments View</h3>
                        <p className="line-space">To improve the class integration experience, I  developed a feature where students are able to view which projects have been submitted for classwork. This can be seen through the green "Submitted" label located on the bottom right of submitted projects. They can also view deadlines for assignments as well as their submission statuses. The <mark>color-coded "Submitted" and "Incomplete" labels make it easy for students to see what assignments they need to complete</mark>.</p>
                        <p className="line-space">The assignments are shown in chronological order: assignments that are due the soonest at the top and assignments that are due the latest at the bottom.</p>
                        <p className="line-space">Deadline display types:</p>
                        <ul>
                            <li>Assignment 1 uses a red countdown timer to highlight that the deadline is soon.</li>
                            <li>Assignment 2 displays a weekday and time to signify the closeness and relative day of the week that the assignment is due.</li>
                            <li>Assignment 3 shows a date, since the deadline is not near (assignment not due in the following 2 weeks).</li>
                        </ul>
                        <p className="line-space">The use of adaptable deadline display types enables students to better understand and visualize when their assignment is due. <mark>The way deadline information is presented is designed with inspiration from the way humans speak about dates and time.</mark></p>
                    </p>

                    <img src={classintegration} alt="Class Integration" className="project-img center" />

                    <p className="med-text">
                        <br />
                        <h3 className="subsection">Community Page</h3>
                        <p className="line-space">Users can share their projects with their classmates or with other people using IDEofThings. The community page is designed so that students will see shared projects from their classes at the top and other popular projects below. Contributors to projects are shown by the profile pictures displayed in the bottom right of each project card.</p>
                        <img src={community} alt="Community Page" className="project-img center" />

                        <br />
                        <h3 className="subsection">Code Editor</h3>
                        <ul>
                            <li>The coding interface enables users to quickly search for components, view important information about selected components, share their project to the IDEofThings community or Github, and submit their project for classwork.</li>
                            <li>The double-bars graphic on the coding pane signals to the user that they can drag it up and down based on their programming needs. The Internet of Things device (in this case, the Arduino) adapts accordingly.</li>
                        </ul>
                        <iframe title="Code Editor" className="project-img center" width="560" height="500" src="https://www.youtube.com/embed/YgtFoRuD1Hw?autoplay=1&mute=1&loop=1&playlist=YgtFoRuD1Hw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className="image-caption">Shadow is used to highlight the different informational and functional panes. The double-bars at the top of the coding pane signal that it is height-adjustable.</p>
                    </p>

                    <hr class="rounded med-text" />

                    <p className="paragraph med-text">
                        <p className="section">
                            Research
                        </p>
                        We conducted user interviews and competitive analysis to better understand how to improve the existing interface, as well as what students want in an online coding platform.

                        <p className="paragraph">
                            <Collapsible trigger="User Interviews" className="toggle Collpasible__trigger" openedClassName="toggle">
                                <p className="toggle-text">
                                    <p className="line-space">Through our 10 interviews with other college students we discovered the following:</p>

                                    <p>
                                        <p className="line-space">
                                            <b>Landing Page</b>
                                        </p>

                                        <ul>
                                            <li>The sign-in screen is not informative and users don't know what the website is for.</li>
                                        </ul>
                                    </p>

                                    <p>
                                        <p className="line-space">
                                            <b>Project Dashboard</b>
                                        </p>

                                        <ul>
                                            <li>Easy to understand, however not much functionality; unsure how to remove projects.</li>
                                        </ul>
                                    </p>

                                    <p>
                                        <p className="line-space">
                                            <b>Code Editor</b>
                                        </p>

                                        <ul>
                                            <li>Users do not know what the "+" button at the top left is for.</li>
                                            <li>The right pane is confusing; users do not understand what "x" and "y" is or what the trash icon is meant to be used for.</li>
                                            <li>The Arduino does not need to be visible at all times, sometimes the user may want to focus on coding.</li>
                                            <li>The component pane is not very organized; unsure where to get wires.</li>
                                        </ul>
                                    </p>
                                </p>
                            </Collapsible>

                            <Collapsible trigger="Competitive Analysis" className="toggle Collpasible__trigger" openedClassName="toggle">
                                <p className="toggle-text">
                                    <p className="line-space">
                                        We researched competing products such as IntelliJ, SolidWorks, Eclipse, and Arduino Simulator on TinkerCad and took note on their best features.
                                    </p>

                                    <ul>
                                        <li>Connected to GitHub, way to commit and push.</li>
                                        <li>Shortcut for changing the direction of electrical components.</li>
                                        <li>Debugging tool.</li>
                                        <li>Welcome page/explanation of product.</li>
                                        <li>Color coding helps users understand different properties.</li>
                                        <li>Information section for tutorials on how to use product.</li>
                                        <li>Organized, easy to find things.</li>
                                        <li>Able to share projects to an online community so others can view your projects.</li>
                                        <li>Export and save to implement project on real Arduino (or IoT device).</li>
                                        <li>Panes that can be opened and closed.</li>
                                    </ul>
                                </p>
                            </Collapsible>
                        </p>
                    </p>

                    <div className="med-text">
                        <p className="paragraph">
                            <p className="section">
                                Synthesis
                            </p>
                            <h3 className="subsection">
                                After gathering all our research, we identified the problems with the existing design through "How Might We" statements and insight statements.
                            </h3>
                        </p>

                        <img src={hmwinsight} alt="How Might We & Insight Statements" className="project-img-medium center" />

                        <p className="paragraph">
                            <p className="section">
                                Low-fidelity
                            </p>
                            Each of us made low fidelity mockups of the landing page, project dashboard, and coding interface. I sketched the project dashboard in the top-left of the image below to include a cohesive header which contains the main controls and more functional project cards. We then came together and used colored circles to mark individual features we liked and wanted to include in our design.
                        </p>
                    </div>

                    <img src={ideation} alt="Ideation Lo-fi Mockups" className="project-img center" />

                    <div className="med-text">
                        <p className="line-space">
                            Some of the common themes with my decisions for which design elements to include are <mark>ease of use, visibility, and practicality</mark>. Elements such as the new project button or search bar should be easily viewable and understandable by the user. Including categories in the components pane of the coding interface creates a much <mark>cleaner and organized view</mark> compared to the old design.
                        </p>

                        <br />

                        <p className="line-space">
                            For the coding interface, we identified 3 important changes to make to the old design:
                        </p>

                        <h3 className="subsection">1. Components pane should include categorize components for greater organization</h3>

                        <img src={category} alt="Components Categories" className="project-img-small center" />

                        <p className="image-caption smol">
                            When the "+" button is clicked, the category expands out.
                        </p>

                        <h3 className="subsection">2. Coding pane should be height-adjustable, providing more adaptability for the user</h3>
                    </div>

                    <img src={drag} alt="Drag Coding Pane" className="project-img center" />
                    <p className="image-caption-center">
                        The coding pane on the middle-bottom of the interface can be dragged up and down to adjust its height.
                    </p>

                    <div className="med-text">
                        <h3 className="subsection">3. Right-side component information pane should provide usable information</h3>

                        <img src={componentinfo} alt="Component Information Pane" className="project-img center" />

                        <p className="image-caption">
                            The component information pane enables users to change the name of each component used in their project, as well as the ability to flip connections. Users are also provided tips about the component they have selected.
                        </p>
                    </div>

                    <p className="paragraph med-text">
                        Play around with the landing page, project dashboard, community page, account page, and coding interface on our Figma prototype below:
                    </p>

                    <iframe title="IOT Playground Prototype" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5NeueJmeFWk6oWz3mzY6Uo%2FInternet-of-Things-Playground%3Fnode-id%3D513%253A3258%26viewport%3D-47%252C-3148%252C0.27747851610183716%26scaling%3Dscale-down" allowfullscreen></iframe>

                    <div className="med-text">
                        <p className="paragraph">
                            Check out our <a href="https://www.figma.com/file/5NeueJmeFWk6oWz3mzY6Uo/Internet-of-Things-Playground?node-id=509%3A1387" target="_blank" rel="noreferrer" className="link-underline">Figma document</a>.
                        </p>

                        <iframe title="IOT Playground Figma Wireframe" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5NeueJmeFWk6oWz3mzY6Uo%2FInternet-of-Things-Playground%3Fnode-id%3D509%253A1387" allowfullscreen></iframe>
                    </div>
                </body>
            </Content>
        </div>
    );
}

export default IotPage;