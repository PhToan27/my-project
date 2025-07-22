import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import { Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Nav className="mb-4">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/add">Add Product</Nav.Link>
          </Nav.Item>
        </Nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add" element={<ProductForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
