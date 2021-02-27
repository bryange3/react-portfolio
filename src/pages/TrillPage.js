import React from 'react';

import Content from '../components/Content.js';
import ProjectTitle from '../components/ProjectTitle.js';

function TrillPage(props) {
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
                        <b>Design Tools</b>: Figma
                        <br />
                    </p>
                    <br />
                    <hr class="rounded" />

                    <p className="paragraph">
                        I am currently a product design intern for Trill Project and am under an NDA. My work consists of ideation, wireframing, and prototyping new Trill mobile app features, as well as conducting user research and developing beta tester relations.
                    </p>
                </body>
            </Content>
        </div>
    );
}

export default TrillPage;