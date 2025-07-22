import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

export default function ProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    catalogs: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({
      ...form,
      price: parseFloat(form.price),
      catalogs: form.catalogs.split(','),
    }));
    navigate('/');
  };

  return (
    <Container>
      <h2>Add Product</h2>
      <Form onSubmit={handleSubmit}>
        {['id', 'name', 'price', 'description', 'catalogs'].map(field => (
          <Form.Group key={field} className="mb-3">
            <Form.Label>{field}</Form.Label>
            <Form.Control
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
            />
          </Form.Group>
        ))}
        <Button type="submit">Add Product</Button>
      </Form>
    </Container>
  );
}
