import React from 'react';
import { Card, Badge, Button, Row, Col, Container } from 'react-bootstrap';

const pizzas = [
  { name: 'Margherita Pizza', price: 24, oldPrice: 40, img: 'images/menu1.png', tag: 'SALE' },
  { name: 'Mushroom Pizza', price: 25, img: 'images/menu2.png' },
  { name: 'Hawaiian Pizza', price: 30, img: 'images/menu3.png', tag: 'NEW' },
  { name: 'Pesto Pizza', price: 16, oldPrice: 50, img: 'images/menu4.png', tag: 'SALE' },
];

function Menu() {
  return (
    <Container className="my-5 text-white">
      <h2 className="text-center mb-4">Our Menu</h2>
      <Row>
        {pizzas.map((pizza, idx) => (
          <Col md={3} key={idx} className="mb-4">
            <Card className="h-100">
              {pizza.tag && (
                <Badge bg="warning" text="dark" className="position-absolute" style={{ top: 0, left: 0 }}>
                  {pizza.tag}
                </Badge>
              )}
              <Card.Img variant="top" src={pizza.img} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                  {pizza.oldPrice && (
                    <span className="text-decoration-line-through text-muted me-2">${pizza.oldPrice}</span>
                  )}
                  <span className={pizza.price === 30 ? 'text-dark' : 'text-warning'}>
                    ${pizza.price}.00
                  </span>
                </Card.Text>
                <Button variant="dark" className="w-100">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    </Container>
  );
}

export default Menu;