import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import leaf from './assets/leaf.png';
import iot from './assets/iot.png';
import das from './assets/dascover.png';
import mfb from './assets/miningforbias.png';
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
import PhotographyPage from './pages/PhotographyPage';

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

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
      projects: [
        {
          id: 0,
          name: 'Leaf',
          description: 'Interactive educational web app for the future generation to learn about their carbon footprint.',
          roles: 'UI/UX Designer, Software Developer',
          imgSrc: leaf,
          path: '/leaf',
          teamMembers: 'Connie Xu, Bryan Ge, Dhruv Baid, Cherry Ying',
          timeline: 'December 15, 2020 - December 17, 2020',
          location: 'Remote'
        },
        {
          id: 1,
          name: 'Internet of Things Playground',
          description: 'Website where students can code Internet of Things devices and share them with the world.',
          roles: 'UI Designer',
          imgSrc: iot,
          path: '/iot-playground',
          teamMembers: 'Saud Tahir, Bryan Ge, Siddharth Pyapali, Lin Jiang',
          timeline: 'September 2020 - December 2020',
          location: 'Remote'
        },
        {
          id: 2,
          name: 'Daily Awareness Society',
          description: 'Blog dedicated to spreading awareness on social issues.',
          roles: 'Web Developer, Content Creator',
          imgSrc: das,
          path: '/daily-awareness-society',
          teamMembers: 'Connie Xu, Rachel Qian, Bryan Ge, Kate Liang, Helen Xia',
          timeline: 'September 2019 - Present',
          location: 'Remote'
        },
        {
          id: 3,
          name: 'Mining for Bias',
          description: 'Program that gives users bias information on news articles.',
          roles: 'Software Developer',
          imgSrc: mfb,
          path: '/mining-for-bias',
          teamMembers: 'Aileen Long, Bryan Ge, Serena Behera, Aditya Joshi, Riya Jain, Michal Juskinski',
          timeline: 'September 2020 - December 2020',
          location: 'Remote'
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
                <Link className="nav-link default" to="/photography">Photography</Link>
                <Link className="nav-link default" to="/about">About</Link>
                <Link className="nav-link default" to="/resume">Resume</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage animated={this.state.home.animated} title={this.state.home.title} subTitle={this.state.home.subTitle} description={this.state.home.description} projects={this.state.projects} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/photography" exact render={() => <PhotographyPage title={this.state.photography.title} subTitle={this.state.photography.subTitle} />} />
          <Route path="/resume" exact render={() => <ResumePage title={this.state.resume.title} />} />

          <Route path={this.state.projects[0].path} render={() => <LeafPage info={this.state.projects[0]} />} />
          <Route path={this.state.projects[1].path} render={() => <IotPage info={this.state.projects[1]} />} />
          <Route path={this.state.projects[2].path} render={() => <DasPage info={this.state.projects[2]} />} />
          <Route path={this.state.projects[3].path} render={() => <MiningForBiasPage info={this.state.projects[3]} />} />

          <ScrollArrow />
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
