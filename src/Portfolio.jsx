import React from 'react';
import { Nav } from 'react-bootstrap';
import pic from './assets/pic.png';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Aparna from './assets/AparnaVinod.pdf';
import Footer from './components/Footer';

function Portfolio() {

 
  return (
    <>
      <Nav className="justify-content-center" id="nav" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="text-info" href="/home"><b>Home</b></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-info" href="#about"><b>About</b></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-info" href="#Skills"><b>Skills</b></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-info" href="#projects"><b>Projects</b></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-info" href="#contact"><b>Contact</b></Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="intro1 p-4">
              <h5 className="text-secondary mt-3"><b>Hello,</b></h5>
              <h2 className="text-secondary mt-3" id="name">
                <b>I'm </b>
                <span className="text-info"><b>Aparna Vinod</b></span>
              </h2>
              <h2 className="text-secondary mt-4" id="mern">
                <b><span className="text-info">MEA(R)N</span> Stack Web Developer</b>
              </h2>
              <h6 className="text-secondary mt-3">
                <b>Passionate MERN stack developer with a knack for building scalable, full-stack web applications.<br />Skilled in MongoDB, Express, React, and Node.js, I bring creative solutions to complex problems.</b>
              </h6>
            </div>
           
           <button className='btn btn-info'> <a href={Aparna} style={{textDecoration:"none", color:"white"}}>Hire me</a></button>
          </div>
          <div className="col-lg-4 col-md-12 text-center">
            <img src={pic} className="img-fluid mt-4 w-100" alt="Profile" />
          </div>
        </div>
      </div>

      <About />
      
      <Skills />
      <Projects />
      <Footer/>
    </>
  );
}

export default Portfolio;
