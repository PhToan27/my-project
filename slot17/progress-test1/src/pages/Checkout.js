// Checkout.js
import { useEffect, useState } from 'react';
import { Container, Form, Button, Alert, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ name: '', address: '', phone: '' });
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.count, 0);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.name || !form.address || !form.phone) {
      alert('Please fill in all fields!');
      return;
    }

    // Simulate order success
    setSuccess('Your order has been placed successfully!');
    localStorage.removeItem('cart');

    setTimeout(() => {
      navigate('/laptops');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <Container className="my-5 text-center">
        <h4>Your cart is empty.</h4>
        <Button variant="primary" onClick={() => navigate('/laptops')}>Back to Laptops</Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h3 className="mb-4">Checkout</h3>

      <Table bordered striped>
        <thead>
          <tr>
            <th>Laptop</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.brand} {item.model}</td>
              <td>{item.count}</td>
              <td>${item.price}</td>
              <td>${(item.count * parseFloat(item.price)).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h5>Total: ${total.toFixed(2)}</h5>

      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="name" value={form.name} onChange={handleInput} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control type="text" name="address" value={form.address} onChange={handleInput} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" name="phone" value={form.phone} onChange={handleInput} required />
        </Form.Group>

        <Button type="submit" variant="success">Place Order</Button>
      </Form>

      {success && <Alert variant="success" className="mt-4">{success}</Alert>}
    </Container>
  );
}

export default Checkout;
