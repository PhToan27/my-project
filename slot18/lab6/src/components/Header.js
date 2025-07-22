// components/Header.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="quiz-navbar" />
        <Navbar.Collapse id="quiz-navbar">
          <Nav className="ms-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
            <LinkContainer to="/news"><Nav.Link>News</Nav.Link></LinkContainer>
            <LinkContainer to="/quiz"><Nav.Link>Quiz</Nav.Link></LinkContainer>
            <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
