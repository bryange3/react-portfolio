import React from 'react';

import Content from '../components/Content.js';
import ProjectTitle from '../components/ProjectTitle.js';

import taskdrag from '../assets/project/taskcal/taskdrag.png';

function TaskCalPage(props) {
    window.scrollTo(0, 0);
    const width = 8;
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
                        <b>Design Tools</b>: Figma
                        <br />
                    </p>
                    <br />
                    <hr class="rounded" />

                    <p className="paragraph">
                        <h3 className="font-weight-bold">
                            Goal
                        </h3>
                        TaskCal creates a seamless calendar + task management experience for users to effectively manage their time. TaskCal extends calendar blocking into its own unique experience, integrating timers and intuitive task control.
                    </p>

                    <p className="paragraph">
                        <h3 className="font-weight-bold">
                            Key Features
                        </h3>
                        <ol>
                            <li>
                                <b>Task creation is made easy and adaptive to the user's schedule.</b> Users can easily drag and drop the add button to create new tasks wherever there is available time. The drag and drop gesture is widely used throughout the app so users can quickly change where tasks are placed on the daily schedule.

                                <iframe title="TaskCal Intro Task Creation" className="full-width project-img" width="560" height="560" src="https://www.youtube-nocookie.com/embed/KiNMoRwBzRY?autoplay=1&mute=1&loop=1&playlist=KiNMoRwBzRY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </li>

                            <li>
                                <b>Users can move existing tasks by dragging and dropping them to a new location on the schedule.</b> There is a subtle shadow that is visible under the task being moved to emulate picking up an object and moving it somewhere else. The shadow signals to the user that it is above the schedule "board" and is free to be moved to a new time slot.
                                <img src={taskdrag} alt="Task Drag Feature" className="project-img center" />
                                Here is a demo of the task dragging interaction:
                                <iframe title="TaskCal Task Drag" className="full-width project-img" width="560" height="560" src="https://www.youtube-nocookie.com/embed/ZkPmp8ur510?autoplay=1&mute=1&loop=1&playlist=ZkPmp8ur510" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </li>
                        </ol>
                    </p>

                    <p className="paragraph">
                        Check out the <a href="https://www.figma.com/file/G80m0m41vCR5qC5GoZ3QMO?node-id=0:1" target="_blank" rel="noreferrer" className="link-underline">Figma document</a>.
                    </p>

                    <iframe title="TaskCal Figma Wireframe" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FnYt5QckHObfi1l3dhE01BM%2FTaskCal-Time-Management-App%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
                </body>
            </Content>
        </div>
    );
}

export default TaskCalPage;