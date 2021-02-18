import React from 'react';

import Content from '../components/Content.js';
import ProjectTitle from '../components/ProjectTitle.js';

function Protothon2021Page(props) {
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
                        <b>Design Tools</b>: Figma
                        <br />
                    </p>
                    <br />
                    <hr class="rounded" />

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Prompt
                        </h2>
                        Your task is to revamp the experience of how a person may seek and select the right type of support (blogs, free consultations, or paid coaching) from the Frantically Speaking public speaking coaching service website.
                    </p>

                    <p className="paragraph">
                        Check out the <a href="https://www.figma.com/file/FNyJnN6a5Txop0WsYcTxO7/FearlesslySpeaking?node-id=3%3A2" target="_blank" rel="noreferrer" className="default">Figma document</a>.
                    </p>

                    <iframe title="Protothon 2021 Figma Wireframe" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="450"  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFNyJnN6a5Txop0WsYcTxO7%2FFearlesslySpeaking%3Fnode-id%3D3%253A2" allowfullscreen></iframe>
                </body>
            </Content>
        </div>
    );
}

export default Protothon2021Page;