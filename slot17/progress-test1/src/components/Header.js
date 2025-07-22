// components/Header.js
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Laptop Shop</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/laptops">Laptops</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
