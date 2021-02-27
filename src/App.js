import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import leaf from './assets/leaf.png';
import leafproject from './assets/project/leafproject.png';
import iot from './assets/iot.png';
import iotproject from './assets/project/iot/iotproject.png';
import das from './assets/dascover.png';
import dasproject from './assets/project/dasproject.png';
import mfb from './assets/miningforbias.png';
import mfbproject from './assets/project/mfbproject.png';
import trill from './assets/trill.png';
import trillcover from './assets/project/trillcover.png';

import taskcal from './assets/taskcal.png';
import taskcalcover from './assets/project/taskcal/taskcalcover.png';

import bglogo from './assets/BGlogo.svg';

import Footer from './components/Footer';
import ScrollArrow from './components/ScrollArrow';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import LeafPage from './pages/LeafPage.js';
import DasPage from './pages/DasPage.js';
import MiningForBiasPage from './pages/MiningForBiasPage.js';
import IotPage from './pages/IotPage.js';
import TrillPage from './pages/TrillPage.js';
import TaskCalPage from './pages/TaskCalPage.js';
import PhotographyPage from './pages/PhotographyPage';
import PlayPage from './pages/PlayPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bryan Ge | Portfolio",
      home: {
        animated: '👋🏻',
        title: 'Hi! I\'m Bryan Ge.',
        subTitle: 'I am a programmer, designer, and photographer.',
        description: 'Currently @ UIUC studying CS + Statistics.'
      },
      play: {
        title: '🤓 Play',
        subTitle: 'Here are some projects I have done for fun!'
      },
      about: {
        title: '🧑🏻‍💻 About Me'
      },
      resume: {
        title: '📎 Resume'
      },
      photography: {
        title: '📸 Photography',
        subTitle: 'Some of my favorite moments I\'ve captured.'
      },
      workProjects: [
        {
          id: 0,
          name: 'Trill Project | Internship',
          description: 'Social media platform that aims to be a safe and inclusive space, enabling people to freely and anonymously express themselves.',
          roles: 'Product Designer',
          imgSrc: trill,
          cover: trillcover,
          path: '/trillproject',
          timeline: 'February 2021 - Present',
          location: 'Remote'
        },
        {
          id: 1,
          name: 'Internet of Things Playground',
          description: 'Website where students can code Internet of Things devices and share them with the world.',
          roles: 'UI Designer',
          imgSrc: iot,
          cover: iotproject,
          path: '/iot-playground',
          teamMembers: '4 designers',
          timeline: 'September 2020 - December 2020',
          location: 'Champaign, IL'
        },
        {
          id: 2,
          name: 'TaskCal',
          description: 'Personal exploration of user interactions in a mobile time-management system for daily tasks and calendar events.',
          roles: 'UI/UX Designer',
          imgSrc: taskcal,
          cover: taskcalcover,
          path: '/taskcal',
          timeline: '2 weeks',
        },
        {
          id: 3,
          name: 'Winner of Francis Yuen East Asia Hackathon',
          description: 'Interactive educational web app for the future generation to learn about their carbon footprint.',
          roles: 'UI/UX Designer, Frontend Developer',
          imgSrc: leaf,
          cover: leafproject,
          path: '/hackathon-leaf',
          teamMembers: 'Connie Xu, Dhruv Baid, Cherry Ying',
          timeline: 'December 15, 2020 - December 17, 2020',
          location: 'Remote'
        },
        {
          id: 4,
          name: 'Daily Awareness Society',
          description: 'Blog dedicated to spreading awareness on social issues.',
          roles: 'UI Designer, Web Developer, Content Creator',
          imgSrc: das,
          cover: dasproject,
          path: '/daily-awareness-society',
          teamMembers: 'Connie Xu, Rachel Qian, Bryan Ge, Kate Liang, Helen Xia',
          timeline: 'September 2019 - Present',
          location: 'Denton, TX'
        },
        {
          id: 5,
          name: 'Mining for Bias',
          description: 'Program that gives users bias information on news articles.',
          roles: 'Software Developer',
          imgSrc: mfb,
          cover: mfbproject,
          path: '/mining-for-bias',
          teamMembers: 'Aileen Long, Bryan Ge, Serena Behera, Aditya Joshi, Riya Jain, Michal Juskinski',
          timeline: 'September 2020 - December 2020',
          location: 'Champaign, IL'
        }
      ],
      playProjects: [
        
      ]
    }
  }

  render() {
    return (
      <Router>
        <Container className="p=0 my-font end-to-end" fluid={true} style={{ minHeight: "100vh" }}>
          <Navbar className="top-bar fixed" expand="lg">
            <Navbar.Brand><Link className="nav-link default" to="/"><img src={bglogo} className="header-logo" alt="Bryan Ge Logo" /></Link></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link default" to="/">Work</Link>
                {/* <Link className="nav-link default" to="/play">Play</Link> */}
                <Link className="nav-link default" to="/photography">Photography</Link>
                <Link className="nav-link default" to="/about">About</Link>
                <Link className="nav-link default" to="/resume">Resume</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage animated={this.state.home.animated} title={this.state.home.title} subTitle={this.state.home.subTitle} description={this.state.home.description} projects={this.state.workProjects} />} />
          {/* <Route path="/play" exact render={() => <PlayPage title={this.state.play.title} subTitle={this.state.play.subTitle} projects={this.state.playProjects} />} /> */}
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/photography" exact render={() => <PhotographyPage title={this.state.photography.title} subTitle={this.state.photography.subTitle} />} />
          <Route path="/resume" exact render={() => <ResumePage title={this.state.resume.title} />} />

          <Route path={this.state.workProjects[0].path} render={() => <TrillPage info={this.state.workProjects[0]} />} />
          <Route path={this.state.workProjects[1].path} render={() => <IotPage info={this.state.workProjects[1]} />} />
          <Route path={this.state.workProjects[2].path} render={() => <TaskCalPage info={this.state.workProjects[2]} />} />
          <Route path={this.state.workProjects[3].path} render={() => <LeafPage info={this.state.workProjects[3]} />} />
          <Route path={this.state.workProjects[4].path} render={() => <DasPage info={this.state.workProjects[4]} />} />
          <Route path={this.state.workProjects[5].path} render={() => <MiningForBiasPage info={this.state.workProjects[5]} />} />

          <ScrollArrow />
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
