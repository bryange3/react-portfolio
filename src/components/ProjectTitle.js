import React from 'react';

import Container from 'react-bootstrap/Container';

import Hero from '../components/Hero.js';

// import down from '../assets/down.png';

function ProjectTitle(props) {
    return (
        <Container fluid={true} className="end-to-end">
            <Hero className="hero" projectTitle={props.info.projectTitle} description={props.info.description} width={props.width} />
            <img src={props.info.cover} alt={props.info.title} className="cover-image center" />
            {/* <img src={down} alt="down arrow" className="arrow"/> */}
        </Container>
    );
}

export default ProjectTitle;