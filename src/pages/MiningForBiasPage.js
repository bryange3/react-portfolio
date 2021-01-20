import React from 'react';

import Content from '../components/Content.js';
import ProjectTitle from '../components/ProjectTitle.js';

function MiningForBiasPage(props) {
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
                        <b>Tech Stack</b>: Python, HTML, CSS, JavaScript
                        <br />
                        <br />
                        <i>This is our semester-long project "Mining for Bias", which we created in CS 196 Freshman Honors at UIUC.</i>
                    </p>
                    <br />
                    <hr class="rounded" />

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Problem
                        </h2>
                        In an age of online media and gaining information on current events through social media and online news sources, readers may find articles that attempt to feed the reader a particular narrative. These articles may contain varying levels of bias.
                    </p>

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Solution
                        </h2>
                        We created a webpage where users provide a link to a news article and are given an evaluation of the bias in the article. This is done through the use of <b>Python</b> and <b>sentiment analysis</b>.
                    </p>

                    <iframe title="Mining for Bias Demo" className="full-width" width="560" height="560" src="https://www.youtube-nocookie.com/embed/Y_1Dw3HevWw?autoplay=1&mute=1&loop=1&playlist=Y_1Dw3HevWw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <p className="paragraph">
                        <h2 className="font-weight-bold">
                            Our Work
                        </h2>
                        We used <b>HTML</b>, <b>CSS</b>, <b>React</b>, and <b>Flask</b> to create a web page where the user can provide a link to an article and receive an evaluation of the bias in the article through the metric of a percentage subjectivity level. The lower the percentage, the less bias there is in the article.
                    </p>

                    <p className="paragraph">
                        Check out our <a href="https://github.com/linjia-long/cs196_fall2020_group28" target="_blank" rel="noreferrer" className="default">GitHub repository</a> and our <a href="https://docs.google.com/presentation/d/1KAS5dOUCbRjyIoaJKJKKTejpOx-rC14bENYu8LqrQCk/edit?usp=sharing" target="_blank" rel="noreferrer" className="default">presentation slides</a>.
                    </p>

                </body>
            </Content>
        </div>
    );
}

export default MiningForBiasPage;