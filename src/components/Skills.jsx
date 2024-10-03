

    import React from 'react';
    import { Col, Container, Row, Card } from 'react-bootstrap';
    
    function Skills() {
      return (
        <div>
          <Container className="mt-5">
            <h2 className="text-center mb-4  text-info m-5 p-5 mt-5 fw-bolder" id='Skills'> Skills</h2>
    
            {/* MERN Stack */}
          
            <Row className="justify-content-center">
              {/* MongoDB */}
              <Col xs={6} md={3} className="mb-4 ">
                <Card className="text-center bg-transparent">
                  <Card.Img variant="top" src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" alt="MongoDB" />
                  {/* <Card.Body>
                    <Card.Title className='text-info'>MongoDB</Card.Title>
                  </Card.Body> */}
                </Card>
              </Col>
    
              {/* Express.js */}
              <Col xs={6} md={3} className="mb-4">
                <Card className="text-center bg-transparent">
                  <Card.Img variant="top" src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="Express.js" />
                  {/* <Card.Body>
                    <Card.Title  className='text-info'>Express.js</Card.Title>
                  </Card.Body> */}
                </Card>
              </Col>
    
              {/* React.js */}
              <Col xs={6} md={3} className="mb-4">
                <Card className="text-center bg-transparent">
                  <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175110.png?f=webp&w=256" alt="React.js" />
                  {/* <Card.Body>
                    <Card.Title  className='text-info'>React.js</Card.Title>
                  </Card.Body> */}
                </Card>
              </Col>
    
              {/* Node.js */}
              <Col xs={6} md={3} className="mb-4">
                <Card className="text-center bg-transparent">
                  <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png" alt="Node.js" />
                  {/* <Card.Body>
                    <Card.Title  className='text-info'>Node.js</Card.Title>
                  </Card.Body> */}
                </Card>
              </Col>
            </Row>
    
            {/* MEAN Stack */}
          
            <Row className="justify-content-center">
              {/* MongoDB */}
              <Col xs={6} md={3} className="mb-4">
                <Card className="text-center bg-transparent">
                  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="Angular" />
                  {/* <Card.Body>
                    <Card.Title  className='text-info'>Angular</Card.Title>
                  </Card.Body> */}
                </Card>
              </Col>

              <Col xs={6} md={3} className="mb-4">
                <Card className="text-center bg-transparent">
                  <Card.Img variant="top" src="https://www.vedantu.com/seo/content-images/0c7a192d-61bd-4e70-b94a-6ab7a4085d92.png" alt="MongoDB" />
                  {/* <Card.Body>
                    <Card.Title  className='text-info'>HTML</Card.Title>
                  </Card.Body> */}
                </Card>
              </Col>
    
              {/* Express.js */}
              <Col xs={6} md={3} className="mb-4">
                <Card className="text-center bg-transparent">
                  <Card.Img variant="top" src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png" alt="Express.js" />
                  {/* <Card.Body>
                    <Card.Title  className='text-info'>CSS</Card.Title>
                  </Card.Body> */}
                </Card>
              </Col>
    
              {/* Angular */}
            
    
              {/* Node.js */}
              <Col xs={6} md={3} className="mb-4">
                <Card className="text-center bg-transparent">
                  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="Node.js" />
                  {/* <Card.Body>
                    <Card.Title  className='text-info'>Bootstrap</Card.Title>
                  </Card.Body> */}
                </Card>
              </Col>
              <Col xs={6} md={3} className="mb-4">
                <Card className="text-center bg-transparent">
                  <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/tFxXWFyf9NpTnpA8NHLg8I3JNMj0C6Fs21_LUwILMuMxIrZCPifRqSq-Av4i5D27aLUWP8Fwc4C6z6uzDYZ7Eq69vkUVqM1bK9Ti_g-n-tvRKA" alt="Angular" />
                  {/* <Card.Body>
                    <Card.Title  className='text-info'>Javasript</Card.Title>
                  </Card.Body> */}
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    
    export default Skills;
    



