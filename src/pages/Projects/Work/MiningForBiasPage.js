import React from 'react';

import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';

function MiningForBiasPage(props) {
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
                        <b>Team Members</b>: {props.info.teamMembers}
                        <br />
                        <b>Tech Stack</b>: Python, HTML, CSS, JavaScript
                        <br />
                        <br />
                        This is our semester-long project "Mining for Bias", which we created in CS 196 Freshman Honors at UIUC.
                    </p>

                    <hr class="rounded" />

                    <p className="paragraph">
                        <p className="section">
                            Problem
                        </p>

                        <h3 className="subsection">
                            Readers of online news sources may find articles that attempt to feed the reader a narrative. These articles may contain bias.
                        </h3>
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Solution
                        </p>

                        <h3 className="subsection">
                            We created a webpage where users provide a link to a news article and are given an evaluation of the bias in the article.
                        </h3>
                        This is done through the use of Python and sentiment analysis.
                    </p>

                    <iframe title="Mining for Bias Demo" className="full-width" width="560" height="560" src="https://www.youtube-nocookie.com/embed/Y_1Dw3HevWw?autoplay=1&mute=1&loop=1&playlist=Y_1Dw3HevWw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <p className="paragraph">
                        <p className="section">
                            Our Work
                        </p>
                        We used HTML, CSS, and React to create a web page where the user can provide a link to an article and receive an evaluation of the bias in the article through the metric of a percentage subjectivity level. The lower the percentage, the less bias there is in the article.
                    </p>

                    <p className="paragraph">
                        Check out our <a href="https://github.com/linjia-long/cs196_fall2020_group28" target="_blank" rel="noreferrer" className="link-underline">GitHub repository</a> and our <a href="https://docs.google.com/presentation/d/1KAS5dOUCbRjyIoaJKJKKTejpOx-rC14bENYu8LqrQCk/edit?usp=sharing" target="_blank" rel="noreferrer" className="link-underline">presentation slides</a>.
                    </p>

                </body>
            </Content>
        </div>
    );
}

export default MiningForBiasPage;