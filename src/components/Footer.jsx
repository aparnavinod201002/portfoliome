import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-light py-4">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left mb-3 mb-md-0">
            <h5 className='text-info fw-bolder' id='contact'>Get in Touch</h5>
            <p className='text-info'>Feel free to connect with me on social media or drop me an email.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <h5 className='text-info fw-bolder'>Connect</h5>
            <a 
              href="https://github.com/aparnavinod201002" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-info mx-2"
              aria-label="GitHub"
            >
             <img style={{ width:'25px'}} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aparna-vinod-234aa5311" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-info mx-2"
              aria-label="LinkedIn"
            >
              <img style={{ width:'40px'}} src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" />
            </a>
            <a 
              href="aparnavinod083@gmail.com" 
              className="text-info mx-2"
              aria-label="Email"
            >
             <img style={{ width:'25px'}} src="https://www.freeiconspng.com/thumbs/email-icon/email-icon--clipart-best-22.png" alt="" />
            </a>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col className="text-center">
            <p className='text-info'>&copy; {new Date().getFullYear()} Aparna Vinod. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
