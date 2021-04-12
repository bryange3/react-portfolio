import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import FadeIn from 'react-fade-in';

import bench from '../assets/photography/Bench.jpg';
import blb from '../assets/photography/BLB.jpg';
import bluewall from '../assets/photography/BlueWall.jpg';
import bored from '../assets/photography/Bored.jpg';
import canada from '../assets/photography/Canada.jpg';
import city from '../assets/photography/City.jpg';
import coffee from '../assets/photography/Coffee.jpg';
import cone from '../assets/photography/Cone.jpg';
import lake from '../assets/photography/Lake.jpg';
import cvad from '../assets/photography/CVAD.jpg';
import dessert from '../assets/photography/Dessert.jpg';
import distance from '../assets/photography/Distance.jpg';
import dragonfly from '../assets/photography/Dragonfly.jpg';
import fireysunset from '../assets/photography/FireySunset.jpg';
import fork from '../assets/photography/ForkPerspective.jpg';
import gold from '../assets/photography/Gold.jpg';
import joy from '../assets/photography/Joy.jpg';
import lookhere from '../assets/photography/LookHere.jpg';
import night from '../assets/photography/Night.jpg';
import pair from '../assets/photography/Pair.jpg';
import peek from '../assets/photography/Peek.jpg';
import power from '../assets/photography/Power.jpg';
import relaxed from '../assets/photography/Relaxed.jpg';
import smile from '../assets/photography/Smile.jpg';
import sunblock from '../assets/photography/SunBlock.jpg';
import sunset from '../assets/photography/Sunset.jpg';
import washington from '../assets/photography/Washington.jpg';

function PhotographyPage(props) {
    const width = 9;
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <Hero title={props.title} subTitle={props.subTitle} width={width - 2} />
            <Content width={"100%"}>
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col sm={4}>
                            <img src={fireysunset} className="photo" alt="firey sunset"/>
                            <img src={bench} className="photo" alt="bench"/>
                            <img src={coffee} className="photo" alt="coffee" />
                            <img src={bluewall} className="photo" alt="blue wall" />
                            <img src={distance} className="photo" alt="distance" />
                            <img src={fork} className="photo" alt="fork perspective" />
                            <img src={gold} className="photo" alt="gold" />
                            <img src={joy} className="photo" alt="joy" />
                            <img src={smile} className="photo" alt="smile" />
                        </Col>
                        <Col sm={4}>
                            <img src={bored} className="photo" alt="bored" />
                            <img src={canada} className="photo" alt="canada" />
                            <img src={city} className="photo" alt="city" />
                            <img src={lake} className="photo" alt="lake" />
                            <img src={dragonfly} className="photo" alt="dragonfly" />
                            <img src={lookhere} className="photo" alt="look here" />
                            <img src={night} className="photo" alt="red night" />
                            <img src={sunset} className="photo" alt="sunset" />
                            <img src={sunblock} className="photo" alt="block the sun" />
                            <img src={washington} className="photo" alt="washington monument" />
                        </Col>
                        <Col sm={4}>
                            <img src={blb} className="photo" alt="blb portrait" />
                            <img src={cone} className="photo" alt="cone" />
                            <img src={cvad} className="photo" alt="cvad" />
                            <img src={dessert} className="photo" alt="dessert" />
                            <img src={peek} className="photo" alt="peek" />
                            <img src={power} className="photo" alt="power of fire" />
                            <img src={relaxed} className="photo" alt="relaxed" />
                            <img src={pair} className="photo" alt="pair of flowers" />
                        </Col>
                    </Row>
                </Container>
            </Content>
        </FadeIn>
    );
}

export default PhotographyPage;