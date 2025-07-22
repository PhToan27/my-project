import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import { Card, Button, Container } from 'react-bootstrap';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/books/${id}`)
      .then(res => setBook(res.data))
      .catch(() => setError('Không tìm thấy sách!'));
  }, [id]);

  if (error) return <Container><p className="text-danger">{error}</p></Container>;
  if (!book) return <Container><p>Đang tải dữ liệu...</p></Container>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
          <Card.Img
  variant="top"
  src={book.image}
  alt={book.title}
  style={{ height: '300px', objectFit: 'cover' }}
/>

          <Card.Text>
            <strong>Giá:</strong> {book.price}k<br />
            <strong>Mô tả:</strong> {book.description}
          </Card.Text>
          <Link to={`/books/${book.id}/edit`}>
            <Button variant="warning" className="me-2">✏️ Chỉnh sửa</Button>
          </Link>
          <Link to="/">
            <Button variant="secondary">← Quay lại</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BookDetail;
