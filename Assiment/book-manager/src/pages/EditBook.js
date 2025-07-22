import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', author: '', price: '', description: '', image: '' });
  const [successMsg, setSuccessMsg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/books/${id}`)
      .then(res => setFormData(res.data))
      .catch(() => setError('Không tải được dữ liệu sách'));
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/books/${id}`, { ...formData, price: parseFloat(formData.price) });
    setSuccessMsg('✅ Cập nhật sách thành công!');
    setTimeout(() => navigate(`/books/${id}`), 1500);
  };

  if (error) return <Container><p className="text-danger">{error}</p></Container>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>✏️ Chỉnh sửa sách</Card.Title>
          {successMsg && <Alert variant="success">{successMsg}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Control name="title" value={formData.title} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control name="author" value={formData.author} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control as="textarea" name="description" rows={3} value={formData.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="image" placeholder="Link hình ảnh" value={formData.image} onChange={handleChange} />
            </Form.Group>
            <Button type="submit" variant="primary">Lưu</Button>{' '}
            <Button variant="secondary" onClick={() => navigate(-1)}>Hủy</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EditBook;
