import React from 'react';

import Hero from '../components/Hero.js'
import Content from '../components/Content.js';

function IotPage(props) {
    window.scrollTo(0, 0);
    const width = 8;
    return (
        <div>
            <Hero projectName={props.info.name} description={props.info.description} width={width}/>
            <Content width={width}>
                <img src={props.info.imgSrc} alt={props.info.name} className="coverImg center" />
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

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Purpose
                        </h2>
                        Our goal was to design a website where users are able to naturally manage and code Internet of Things projects. Students are also able to share their work with their classmates and the larger community.
                    </p>

                    <iframe title="Internet of Things Playground Demo" className="full-width" width="560" height="560" src="https://www.youtube-nocookie.com/embed/fvJg08nuAVk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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