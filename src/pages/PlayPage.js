import React from 'react';

import Grid from '../components/Grid';
import Hero from '../components/Hero';

import FadeIn from 'react-fade-in';

function PlayPage(props) {
    const width = 9;
    window.scrollTo(0, 0);
    return (
        <FadeIn delay={400}>
            <Hero title={props.title} subTitle={props.subTitle} width={width - 2} />
            <Grid projects={props.projects} />
        </FadeIn>
    );
}

export default PlayPage;