import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Form, Button, Alert, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:3001/UserAccounts?username=${username}&password=${password}`);
      if (res.data.length > 0) {
        setUser(res.data[0]);
        setError('');
        setSuccess(`Welcome, ${username}! Login Successful!`);

        // Tự động chuyển trang sau 1 giây
        setTimeout(() => {
          navigate('/laptops');
        }, 1000);
      } else {
        setSuccess('');
        setError('Invalid username or password!');
      }
    } catch (err) {
      setSuccess('');
      setError('Server error!');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '400px', padding: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
        <h3 className="text-center mb-4">Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>

          {/* Hiển thị thông báo thành công hoặc lỗi */}
          {success && <Alert variant="success" className="mt-3 text-center">{success}</Alert>}
          {error && <Alert variant="danger" className="mt-3 text-center">{error}</Alert>}
        </Form>
      </Card>
    </Container>
  );
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
