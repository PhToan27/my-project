import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import api from '../services/api';

function BookForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/books', { ...formData, price: parseFloat(formData.price) });
    onSuccess('✅ Thêm sách thành công!');
    setFormData({ title: '', author: '', price: '', description: '', image: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Control name="title" placeholder="Tiêu đề" value={formData.title} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control name="author" placeholder="Tác giả" value={formData.author} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control name="price" type="number" placeholder="Giá" value={formData.price} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control as="textarea" name="description" placeholder="Mô tả" value={formData.description} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control name="image" placeholder="Link ảnh bìa" value={formData.image} onChange={handleChange} />
      </Form.Group>
      <Button type="submit" variant="success">Thêm sách</Button>
    </Form>
  );
}

export default BookForm;
