import React from 'react';

import Content from '../components/Content.js';
import ProjectTitle from '../components/ProjectTitle.js';

import leafzoom from '../assets/project/leafzoom.png';

function LeafPage(props) {
    window.scrollTo(0, 0);
    const width = 7;
    return (
        <div>
            <ProjectTitle info={props.info} width={width}/>
            <Content width={width}>
                <body>
                    <p>
                        <b>Role</b>: {props.info.roles}
                        <br />
                        <b>Timeline</b>: {props.info.timeline}
                        <br />
                        <b>Team Members</b>: {props.info.teamMembers}
                        <br />
                        <b>Design Tools</b>: Figma, Adobe Illustrator, Adobe After Effects, Procreate
                        <br />
                        <b>Tech Stack</b>: Python, HTML, CSS, JavaScript
                        <br />
                        <br />
                        <i>This is our winning submission for UChicago's Francis Yuen East Asia 2020 Hackathon!</i>
                    </p>
                    <br />
                    <hr class="rounded" />

                    <p className="paragraph impact-statement">
                        🐻 LEAF is an educational web app tailored towards children (age 9+) with the goal of mitigating the effects of carbon emissions starting with a new generation.
                    </p>

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Challenge
                        </h2>
                        Mapping Personal Carbon Footprint - little changes can make a big difference in climate change. We can all be a part of the environmental solution. Your challenge is to innovate sustainable solutions to climate change by mapping personal carbon emissions. Your solution may aid policy makers, scientists, businesses, government agencies, and/or individual consumers, in their global or local decision-making and plans for the future.
                    </p>

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Solution
                        </h2>
                        LEAF is an interactive and education app with the goal of educating children about what the carbon footprint is and how they can take measures directly from home. Users can upload an image of their room and click on various household items in the photo to learn about the items' carbon footprint. At the end of the program, users are able to calculate their own carbon footprint, utilizing the CoolClimate carbon footprint calculator.
                    </p>

                    <p className="paragraph">
                        View our 7-minute pitch + demo video below:
                    </p>

                    <iframe title="Leaf YouTube Presentation" className="full-width" width="560" height="560" src="https://www.youtube-nocookie.com/embed/ja3pEDzQraI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <p className="paragraph">
                        The image segmentation is done using <a href="https://aws.amazon.com/rekognition/?blog-cards.sort-by=item.additionalFields.createdDate&blog-cards.sort-order=desc" target="_blank" rel="noreferrer" className="default">Amazon Rekognition</a> software which uses machine learning to identify objects in an image and provide labels for them. We used these labels to provide relevant carbon footprint reducing suggestions. For example, if there is a water bottle in the photo uploaded, LEAF would tell the user:
                        <blockquote>
                            "Ah, I see you drink from bottles like a civilized person! Just remember, these bottles do end up in landfills eventually, and producing them also takes so much energy! Try to switch to reusable bottles, if possible."
                        </blockquote>
                    </p>

                    <p className="paragraph">
                        Check out our <a href="https://www.figma.com/file/G80m0m41vCR5qC5GoZ3QMO?node-id=0:1" target="_blank" rel="noreferrer" className="default">Figma document</a> and our <a href="https://github.com/dhruvbaid/UChicagoHackathon" target="_blank" rel="noreferrer" className="default">GitHub repository</a>.
                    </p>

                    <iframe title="Leaf Figma Wireframe" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FG80m0m41vCR5qC5GoZ3QMO%2FUCHI-HACKATHON-WIREFRAME%3Fnode-id%3D0%253A1" allowfullscreen></iframe>

                    <br />
                    <hr class="rounded" />
                    
                    <img src={leafzoom} alt="Leaf Zoom Screenshot" className="captionedImg center" />
                    <p className="image-caption">
                        Shake your hands if you enjoyed the hackathon!
                    </p>

                    <p className="paragraph">
                        <i>Special thanks to Zicheng Zhen and Kate Liang for being so helpful during office hours!</i>
                    </p>

                </body>
            </Content>
        </div>
    );
}

export default LeafPage;