import React from 'react';

import Grid from '../components/Grid';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FadeIn from 'react-fade-in';

import { shake } from 'react-animations';

import styled, { keyframes } from 'styled-components';

// Animation code derived from: https://www.npmjs.com/package/react-animations
const myAnimation = keyframes`${shake}`;
const Animation = styled.div`
  animation: 1s ${myAnimation};
`;

function HomePage(props) {
    const width = 9;
    window.scrollTo(0, 0);
    return (
        <FadeIn delay={400}>
            <Jumbotron className="bg-transparent jumbotron-fluid hero">
                <Container fluid={true}>
                    <Row className="justify-content-center py-5">
                        <Col md={width - 2} sm={12}>
                            {props.animated && <h2 className="display-4"><Animation>{props.animated}</Animation></h2>}
                            {props.title && <h1 className="display-5 font-weight-bolder">{props.title}</h1>}
                            {/* {props.subTitle && <h2 className="display-5 font-weight-normal">{props.subTitle}</h2>} */}
                            <div className="home-positions">
                                <h3 className="font-weight-normal role">UX/UI Design Intern at <a className="link-underline" href="https://www.cargill.com/" target="_blank" rel="noreferrer">Cargill</a></h3>

                                <h3 className="font-weight-normal role">National Operations Strategist at <a className="link-underline" href="https://hack4impact.org/" target="_blank" rel="noreferrer">Hack4Impact</a></h3>

                                <h3 className="font-weight-normal role">Previous Product Design Intern at <a className="link-underline" href="https://trillproject.com/" target="_blank" rel="noreferrer">Trill Project</a></h3>
                                
                                <h3 className="font-weight-normal role">Student at UIUC studying <a className="link-underline" href="https://cs.illinois.edu/academics/undergraduate/degree-program-options/bs-statistics-computer-science" target="_blank" rel="noreferrer">CS + Statistics</a></h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Grid projects={props.projects} />
        </FadeIn >
    );
}

export default HomePage;