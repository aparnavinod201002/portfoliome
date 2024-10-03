
import React from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import coffe from '../assets/coffe.png';
import budget from '../assets/budget.png';
import season from '../assets/season.png';

function Projects() {
  return (
    <div>


      <Container className="mt-5">

      <Row className="justify-content-center">
            <Col md="auto" className="text-center">
              <h2 className="text-info m-5 p-5 mt-5 fw-bolder" id="projects">Projects</h2>
            </Col>
          </Row> 

        <Row className="justify-content-center">
          {/* Card 1 */}
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100 bg-transparent">
              <Card.Img variant="top" src={coffe} alt="Project 1" />
              <Card.Body>
                <Card.Title className='text-info'></Card.Title>
                <Card.Text className='text-secondary'>
                 
                </Card.Text>
                <Button variant="info" className='text-light' href='https://cupandcoffee.netlify.app/'>View Project</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={6} lg={4} className="mb-4 ">
            <Card className="h-100 bg-transparent">
              <Card.Img variant="top" src={budget} alt="Project 2" />
              <Card.Body>
                <Card.Title className='text-info'></Card.Title>
                <Card.Text className='text-secondary'>
                 
                </Card.Text>
                <Button variant="info" className='text-light'  href='https://budcalculator.netlify.app/'>View Project</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={6} lg={4} className="mb-4">
            <Card className="h-100 bg-transparent">
              <Card.Img variant="top" src={season} alt="Project 3" />
              <Card.Body>
                <Card.Title className='text-info'></Card.Title>
                <Card.Text className='text-secondary'>
               
                </Card.Text>
                <Button variant='info' className='text-light' href='https://seasonsofin.netlify.app/'>View Project</Button>
              </Card.Body>
            </Card>
          </Col>

          
        </Row>
      </Container>
    </div>
  );
}

export default Projects;



