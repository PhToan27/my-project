import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded login info
    if (username === 'admin' && password === '123') {
      navigate('/posts'); // chuyển hướng nếu thành công
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: 400 }}>
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Đăng nhập
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
