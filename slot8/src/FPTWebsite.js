import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const FPTWebsite = () => {
  return (
    <>
      {/* Header with logo and title */}
      <Navbar bg="warning" className="flex-column py-4">
        <Container className="text-center">
          <Row className="w-100 justify-content-center">
            <Col md="auto">
              <img
                src="fpt.png"
                alt="FPT Education"
                style={{ maxWidth: '250px', marginBottom: '10px' }}
              />
              
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Navigation bar */}
      <Navbar bg="warning" className="justify-content-center">
        <Nav>
          <Nav.Link href="#home" className="text-white">Home</Nav.Link>
          <Nav.Link href="#about" className="text-white">About</Nav.Link>
          <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
        </Nav>
      </Navbar>

      {/* Main content */}
      <Container className="text-center mt-5 mb-5">
        <section id="about" className="mb-5">
          <h3>About</h3>
          <p>This is the about section of the website.</p>
        </section>
        <section id="contact">
          <h3>Contact</h3>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </Container>

      {/* Footer */}
      <Navbar bg="warning" className="justify-content-center mt-5">
        <Container className="text-center">
          <small className="text-dark">© 2023 Website. All rights reserved.</small>
        </Container>
      </Navbar>
    </>
  );
};

export default FPTWebsite;
