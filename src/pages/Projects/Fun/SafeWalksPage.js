import React from 'react';

import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';

function SafeWalksPage(props) {
    window.scrollTo(0, 0);
    const width = 6;
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
                        This project is conducted under UIUC Women in Computer Science.
                    </p>

                    <hr class="rounded" />

                    <p className="paragraph impact-statement">
                        🚶‍♂️ University Safewalks increases students' safety while walking on campus by connecting users with other students from their school. Walkers choose their start and destination and join walks with other students to safely get across campus.
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Problem
                        </p>

                        <h3 className="subsection">
                            Sometimes, students miss the last running bus or may need to take a walk to a location when in a dire situation. Safety is a concern, especially if it is dark outside or if a student has to walk somewhere  by themselves.
                        </h3>
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Solution
                        </p>

                        <h3 className="subsection">
                            University SafeWalks connects students with each other and helps bring students walking in similar paths together.
                        </h3>

                        By walking in groups, students can feel more comfortable reaching their destinations. To combat the issue of registration of non-students, University SafeWalks requires users to sign in using a valid university email address.
                    </p>

                    <p className="paragraph">
                        Check out our <a href="https://www.figma.com/file/UZqoBsXPYKCFZ35WACCd4z/University-SafeWalks?node-id=0%3A1" target="_blank" rel="noreferrer" className="link-underline">Figma document</a>.
                    </p>

                    <iframe title="University SafeWalks Figma Wireframe" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FUZqoBsXPYKCFZ35WACCd4z%2FUniversity-SafeWalks%3Fnode-id%3D0%253A1" allowfullscreen></iframe>

                </body>
            </Content>
        </div>
    );
}

export default SafeWalksPage;