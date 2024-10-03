import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function About() {
  return (
    <div>
      <section>
        <Container className="w-100 h-100">
          <Row className="justify-content-center">
            <Col md="auto" className="text-center">
              <h2 className="text-info m-5 p-5 mt-5 fw-bolder" id="about">About</h2>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={6}>
              <div className="border rounded border-info p-4 text-center transform-on-hover">
                <h5 className="fw-bolder text-secondary mb-5 mt-5">
                  I’m passionate about building seamless web applications from front to back. With expertise in both MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) stacks, I create efficient, scalable, and user-friendly solutions.
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
