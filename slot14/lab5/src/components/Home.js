// src/components/Home.js
import React from 'react';
import { Carousel, Container,Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/slide1.jpg" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/slide2.jpg" alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/slide3.jpg" alt="Slide 3" />
        </Carousel.Item>
      </Carousel>
     

      {/* Small circle images */}
      <Row className="mt-3 text-center">
        {[
          'menu-01.jpg',
          'menu-02.jpg',
          'menu-03.jpg',
          'menu-04.jpg',
          'menu-05.jpg',
          'menu-06.jpg',
          
        ].map((img, index) => (
          <Col xs={4} md={2} key={index}>
            <img
              src={`/images/${img}`}
              alt={`Food ${index + 1}`}
              className="img-fluid rounded-circle border"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </Col>
        ))}
      </Row>
       {/* Text title */}
       <h2 className="text-danger mt-4">This is Home Page</h2>
    </Container>
  );
}

export default Home;
