import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

// import Navbar from "./components/Navbar/Navbar.js"

import cargill from './assets/cargill.png';
import cargillcover from './assets/project/cargillcover.png';
import leaf from './assets/leaf.png';
import leafproject from './assets/project/leafproject.png';
import iot from './assets/iot.png';
import iotproject from './assets/project/iot/iotproject.png';
import das from './assets/dascover.png';
import dasproject from './assets/project/dasproject.png';
import mfb from './assets/miningforbias.png';
import mfbproject from './assets/project/mfbproject.png';
import trill from './assets/trill.png';
import trillcover from './assets/project/trill/trillcover.png';
import safewalks from './assets/safewalks.png';
import safewalkscover from './assets/project/safewalks/safewalkscover.png';

import taskcal from './assets/taskcal.png';
import taskcalcover from './assets/project/taskcal/taskcalcover.png';
import nour from './assets/nour.png';
import nourcover from './assets/project/nour/nourcover.png';

import bglogo from './assets/BGlogo.svg';

import Footer from './components/Footer';
import ScrollArrow from './components/ScrollArrow';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import LeafPage from './pages/Projects/Work/LeafPage.js';
import SafeWalksPage from './pages/Projects/Fun/SafeWalksPage.js';
import NourPage from './pages/Projects/Work/NourPage.js';
import DasPage from './pages/Projects/Work/DasPage.js';
import MiningForBiasPage from './pages/Projects/Work/MiningForBiasPage.js';
import IotPage from './pages/Projects/Work/IotPage.js';
import TrillPage from './pages/Projects/Work/TrillPage.js';
import CargillPage from './pages/Projects/Work/CargillPage.js';
import TaskCalPage from './pages/Projects/Fun/TaskCalPage.js';
import PhotographyPage from './pages/PhotographyPage';
import PlayPage from './pages/PlayPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bryan Ge | Portfolio",
      home: {
        animated: '👋🏻',
        title: 'Product designer + developer by day, Minecraft gamer playing cake wars by night.',
      },
      play: {
        title: '🤓 For Fun',
        subTitle: 'Here are some of my smaller personal projects.'
      },
      about: {
      },
      resume: {
        title: '📎 Check out my experiences.'
      },
      photography: {
      },
      workProjects: [
        {
          id: 0,
          projectTitle: 'Cargill — UX/UI Design Internship',
          description: 'Culinary innovation dashboard to hold a leading quick service restaurant brand\'s menu item idea portfolio.',
          roles: 'UX/UI Design',
          type: 'Summer 2021 Internship',
          imgSrc: cargill,
          cover: cargillcover,
          path: '/cargill-internship',
          teamMembers: '1 UX/UI Design Intern, 3 Software Engineering Interns, 2 Product Coaches',
          timeline: 'May 2021 - Present',
          location: 'Remote'
        },
        {
          id: 1,
          projectTitle: 'HackDuke Ideate Designathon',
          description: 'Social platform connecting the elderly.',
          roles: 'Product Design',
          type: 'Designathon Project',
          imgSrc: nour,
          cover: nourcover,
          path: '/duke-ideate-designathon',
          teamMembers: '3 Designers, 1 Product Marketer',
          timeline: '24 hours',
          location: 'Remote'
        },
        {
          id: 2,
          projectTitle: 'Trill Project — Design Internship',
          description: 'Social media platform that aims to be a safe and inclusive space, enabling people to freely and anonymously express themselves.',
          roles: 'UI Design, Web Design',
          type: 'Spring 2021 Internship',
          imgSrc: trill,
          cover: trillcover,
          path: '/trillproject-internship',
          timeline: 'February 2021 - May 2021',
          location: 'Remote'
        },
        {
          id: 3,
          projectTitle: 'UChicago Francis & Rose Yuen East Asia Hackathon',
          description: 'Educational web app for the future generation to learn about their carbon footprint.',
          roles: 'Product Design, Frontend Development',
          type: 'Hackathon Project',
          imgSrc: leaf,
          cover: leafproject,
          path: '/uchicago-hackathon',
          teamMembers: '2 Product Designers + Frontend Developers, 1 Backend Developer, 1 Financial Analyst',
          timeline: '2 days',
          location: 'Remote'
        },
        {
          id: 4,
          projectTitle: 'Internet of Things Playground',
          description: 'Website where students can code Internet of Things devices and share them with the world.',
          roles: 'UI Design',
          type: 'Passion Project',
          imgSrc: iot,
          cover: iotproject,
          path: '/iot-playground',
          teamMembers: '1 Design Lead, 3 UI Designers',
          timeline: 'September 2020 - December 2020',
          location: 'Remote'
        },
        {
          id: 5,
          projectTitle: 'Daily Awareness Society',
          description: 'Blog dedicated to spreading awareness on social issues.',
          roles: 'Web Development, UI Design, Content Creation',
          type: 'Passion Project',
          imgSrc: das,
          cover: dasproject,
          path: '/daily-awareness-society',
          teamMembers: '4 team members',
          timeline: 'September 2019 - January 2021',
          location: 'Denton, TX'
        },
        {
          id: 6,
          projectTitle: 'Mining for Bias',
          description: 'Program that gives users bias information on news articles.',
          roles: 'Software Development',
          type: 'Class Project',
          imgSrc: mfb,
          cover: mfbproject,
          path: '/mining-for-bias',
          teamMembers: '1 Project Manager, 5 Software Developers',
          timeline: 'September 2020 - December 2020',
          location: 'Remote'
        }
      ],
      playProjects: [
        {
          id: 0,
          projectTitle: 'TaskCal',
          description: 'Personal exploration of user interactions in a mobile time-management system.',
          roles: 'Interaction Design',
          type: 'Passion Project',
          imgSrc: taskcal,
          cover: taskcalcover,
          path: '/taskcal',
          timeline: '2 weeks',
        },
        {
          id: 1,
          projectTitle: 'University SafeWalks',
          description: 'Mobile app where students can coordinate walks to safely reach their destinations on campus.',
          roles: 'UX/UI Design',
          type: 'Passion Project',
          imgSrc: safewalks,
          cover: safewalkscover,
          path: '/university-safewalks',
          teamMembers: '2 UX/UI designers',
          timeline: 'January 2021 - March 2021',
          location: 'Champaign, IL'
        }
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
                {/* <Link className="nav-link default" to="/for-fun">For Fun</Link> */}
                <Link className="nav-link default" to="/photography">Photography</Link>
                <Link className="nav-link default" to="/about">About</Link>
                <Link className="nav-link default" to="/resume">Resume</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <Navbar /> */}

          <Route path="/" exact render={() => <HomePage animated={this.state.home.animated} title={this.state.home.title} subTitle={this.state.home.subTitle} description={this.state.home.description} projects={this.state.workProjects} />} />
          {/* <Route path="/for-fun" exact render={() => <PlayPage title={this.state.play.title} subTitle={this.state.play.subTitle} projects={this.state.playProjects} />} /> */}
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/photography" exact render={() => <PhotographyPage title={this.state.photography.title} subTitle={this.state.photography.subTitle} />} />
          <Route path="/resume" exact render={() => <ResumePage title={this.state.resume.title} />} />

          <Route path={this.state.workProjects[0].path} render={() => <CargillPage info={this.state.workProjects[0]} />} />
          <Route path={this.state.workProjects[1].path} render={() => <NourPage info={this.state.workProjects[1]} />} />
          <Route path={this.state.workProjects[2].path} render={() => <TrillPage info={this.state.workProjects[2]} />} />
          <Route path={this.state.workProjects[3].path} render={() => <LeafPage info={this.state.workProjects[3]} />} />
          <Route path={this.state.workProjects[4].path} render={() => <IotPage info={this.state.workProjects[4]} />} />
          <Route path={this.state.workProjects[5].path} render={() => <DasPage info={this.state.workProjects[5]} />} />
          <Route path={this.state.workProjects[6].path} render={() => <MiningForBiasPage info={this.state.workProjects[6]} />} />

          <ScrollArrow />
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
