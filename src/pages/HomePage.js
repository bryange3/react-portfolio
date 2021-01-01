import React from 'react';

import Hero from '../components/Hero';
import Grid from '../components/Grid';

import FadeIn from 'react-fade-in';

function HomePage(props) {
    const width = 10;
    window.scrollTo(0, 0);
    return(
        <FadeIn delay={400}>
            <Hero animated={props.animated} title={props.title} subTitle={props.subTitle} small={props.description} width={width}/>
            <Grid projects={props.projects}/>
        </FadeIn>
    );
}

export default HomePage;