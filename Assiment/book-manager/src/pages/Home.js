import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import AlertMessage from '../components/AlertMessage';

function Home() {
  const [successMsg, setSuccessMsg] = useState('');

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}><BookList /></Col>
        <Col md={4}>
          <h4>➕ Thêm sách</h4>
          <AlertMessage message={successMsg} onClose={() => setSuccessMsg('')} />
          <BookForm onSuccess={setSuccessMsg} />
          
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
