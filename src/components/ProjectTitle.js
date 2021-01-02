import React from 'react';

import Container from 'react-bootstrap/Container';

import Hero from '../components/Hero.js';

import down from '../assets/down.png';

function ProjectTitle(props) {
    return (
        <Container fluid={true} className="end-to-end">
            <img src={props.info.cover} alt={props.info.name} className="cover-image center" />
            <img src={down} alt="down arrow" className="arrow"/>
            <Hero projectName={props.info.name} description={props.info.description} width={8} />
        </Container>
    );
}

export default ProjectTitle;