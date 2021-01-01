import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { shake } from 'react-animations';

import styled, { keyframes } from 'styled-components';

// Animation code derived from: https://www.npmjs.com/package/react-animations
const myAnimation = keyframes`${shake}`;
const Animation = styled.div`
  animation: 1s ${myAnimation};
`;

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid hero">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={props.width} sm={12}>
                        {props.animated && <h1 className="display-1"><Animation>{props.animated}</Animation></h1>}
                        {props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h2 className="display-4 font-weight-normal">{props.subTitle}</h2>}
                        {props.projectName && <h2 className="display-4 font-weight-bolder">{props.projectName}</h2>}
                        {props.description && <h3 className="display-5 font-weight-normal project-description">{props.description}</h3>}
                        {props.small && <h3 className="font-weight-normal text-muted mt-4 small-description">{props.small}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;