import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="#" active>Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="danger"><FontAwesomeIcon icon={faSearch} /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;