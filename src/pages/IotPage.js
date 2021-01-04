import React from 'react';

import Collapsible from 'react-collapsible';

import Content from '../components/Content.js';
import ProjectTitle from '../components/ProjectTitle.js';

import designprocess from '../assets/project/iot/designprocess.png';
import olddesign from '../assets/project/iot/olddesign.png';
import classintegration from '../assets/project/iot/classintegration.png';
import category from '../assets/project/iot/category.png';
import drag from '../assets/project/iot/drag.png';
import componentinfo from '../assets/project/iot/componentinfo.png';
import coding from '../assets/project/iot/coding.png';
import ideation from '../assets/project/iot/ideation.png';
import community from '../assets/project/iot/community.png';
import hmwinsight from '../assets/project/iot/hmwinsight.png';

function IotPage(props) {
    window.scrollTo(0, 0);
    const width = 7;
    return (
        <div>
            <ProjectTitle info={props.info} width={width} />
            <Content width={width}>
                <body>
                    <p>
                        <b>Role</b>: {props.info.roles}
                        <br />
                        <b>Timeline</b>: {props.info.timeline}
                        <br />
                        <b>Team Members</b>: {props.info.teamMembers}
                        <br />
                        <b>Design Tools</b>: Figma
                        <br />
                        <br />
                        <i>This project was conducted at Design Innovation Illinois for Professor Matthew Caesar's website.</i>
                    </p>
                    <br />
                    <hr class="rounded" />

                    <p className="paragraph impact-statement">
                        🧩 IDEofThings is a website where college students can manage and code Internet of Things projects and share them with their classmates and the world.
                    </p>

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Problem
                        </h2>
                        The existing design is not informational, user-friendly, or practical and is lacking in common features found in competing platforms. Our job is to improve the existing design's landing page, project dashboard, and coding interface as well as create designs for the account and community page.
                    </p>

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Solution
                        </h2>
                        IDEofThings is a refreshing improvement to the original design, as it is more informational, understandable, and modern. The new interface is more appealing to students and easier to navigate. The main features include class integration, project dashboard filtering, improved coding experience, and community sharing.
                    </p>

                    <iframe title="Internet of Things Playground Demo" className="full-width" width="560" height="560" src="https://www.youtube-nocookie.com/embed/fvJg08nuAVk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <h2 className="font-weight-bold paragraph">
                        Design Process
                    </h2>
                    <img src={designprocess} alt="Design Process" className="project-img center" />

                    <hr class="rounded" />

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Research
                        </h2>
                        We conducted user interviews and competitive analysis to better understand how to improve the existing interface, as well as what students want in an online coding platform. Here are the existing designs of the landing page, project dashboard, and coding interface:
                    </p>

                    <img src={olddesign} alt="Old Designs" className="project-img center" />


                    <p className="paragraph">
                        <Collapsible trigger="User Interviews" className="toggle Collpasible__trigger" openedClassName="toggle">
                            <p className="toggle-text">
                                Through our 10 interviews with other college students we discovered the following:
                            <br /><b>Landing Page</b>
                                <ul>
                                    <li>The sign-in screen is not informative and users don't know what the website is for.</li>
                                </ul>
                                <br /><b>Project Dashboard</b>
                                <ul>
                                    <li>Easy to understand, however not much functionality; unsure how to remove projects.</li>
                                </ul>
                                <br /><b>Landing Page</b>
                                <ul>
                                    <li>Users do not know what the "+" button at the top left is for.</li>
                                    <li>The right pane is confusing; users do not understand what "x" and "y" is or what the trash icon is meant to be used for.</li>
                                    <li>The Arduino does not need to be visible at all times, sometimes the user may want to focus on coding.</li>
                                    <li>The component pane is not very organized; unsure where to get wires.</li>
                                </ul>
                            </p>
                        </Collapsible>

                        <Collapsible trigger="Competitive Analysis" className="toggle Collpasible__trigger" openedClassName="toggle">
                            <p className="toggle-text">
                                We researched competing products such as IntelliJ, SolidWorks, Eclipse, and Arduino Simulator on TinkerCad and took note on their best features.
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
                    
                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Synthesis
                        </h2>
                        After gathering all our research, we identified the problems with the existing design through "How Might We" statements and insight statements.
                    </p>

                    <img src={hmwinsight} alt="How Might We & Insight Statements" className="project-img-medium center" />

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Low-fidelity
                        </h2>
                        Each of us made low fidelity mockups of the landing page, project dashboard, and coding interface. We came together and used colored circles to mark individual features we liked and wanted to include in our design.
                    </p>

                    <img src={ideation} alt="Ideation Lo-fi Mockups" className="project-img center" />

                    <p className="paragraph">
                        Some of the common themes with our decisions for which elements to include in our design include ease of use, visibility, and practicality. Elements such as the new project button or search bar should be easily viewable and understandable by the user. Including categories in the components pane of the coding interface creates a much cleaner and organized view compared to the old design.
                    </p>

                    <p className="paragraph">
                        For the coding interface, we identified 3 important changes to make to the old design:
                        <br /><br />1) Components pane should include categories for greater organization of components
                        <img src={category} alt="Components Categories" className="project-img-small center" />
                        <p className="image-caption smol">
                            When the "+" button is clicked, the category expands out.
                        </p>
                        <br />2) Coding pane should be height-adjustable to allow the user to see more code at once
                        <img src={drag} alt="Drag Coding Pane" className="project-img center" />
                        <p className="image-caption">
                            The coding pane on the middle-bottom of the interface can be dragged up and down to adjust its height.
                        </p>
                        <br />3) Right-side component information pane should provide more usable information
                        <img src={componentinfo} alt="Component Information Pane" className="project-img-medium center" />
                        <p className="image-caption med">
                            The component information pane enables users to change the name of each component used in their project, as well as the ability to flip connections. Users are also provided tips about the component they have selected.
                        </p>
                    </p>

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Prototype
                        </h2>
                        We focused on creating a project dashboard that is easy to navigate and includes features targeted towards college students and programmers. Since IDEofThings has class integration, we came up with solutions to improve the experience for students.
                        <img src={classintegration} alt="Class Integration" className="project-img-medium center" />
                        <p className="image-caption med">
                            Students are able to view which projects have been submitted for classwork and which ones have not. They can also view assignments that are due soon and whether or not they have submitted them yet. The color-coded "Submitted" and "Incomplete" markers make it easy for students to see what assignments they need to complete.
                        </p>
                    </p>

                    <p className="paragraph">
                        The community page is designed so that students will see shared projects from their classes at the top.
                        <img src={community} alt="Community Page" className="project-img-medium center" />
                        <p className="image-caption med">
                            Users have the ability to view projects from other classmates as well as the contributors by the profile pictures displayed in the bottom right of each project card.
                        </p>
                    </p>

                    <p className="paragraph">
                        The coding interface enables users to quickly search for components, view important information about selected components, share their project to the IDEofThings community or Github, and submit their project for classwork.
                        <img src={coding} alt="Coding Interface" className="project-img-medium center" />
                    </p>

                    <p className="paragraph">
                        Play around with the landing page, project dashboard, community page, account page, and coding interface on our Figma prototype below:
                    </p>

                    <iframe title="IOT Playground Prototype" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5NeueJmeFWk6oWz3mzY6Uo%2FInternet-of-Things-Playground%3Fnode-id%3D513%253A3258%26viewport%3D-47%252C-3148%252C0.27747851610183716%26scaling%3Dscale-down" allowfullscreen></iframe>

                    <p className="paragraph">
                        Check out our <a href="https://www.figma.com/file/oy9lBpGHw6pJzaMf0wGUMo?embed_host=notion&kind=&node-id=509%3A1387&viewer=1" target="_blank" rel="noreferrer" className="default">Figma document</a>.
                    </p>

                    <iframe title="IOT Playground Figma Wireframe" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5NeueJmeFWk6oWz3mzY6Uo%2FInternet-of-Things-Playground%3Fnode-id%3D509%253A1387" allowfullscreen></iframe>
                </body>
            </Content>
        </div>
    );
}

export default IotPage;