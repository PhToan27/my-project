// components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!username || !password) {
      setError("Username và password không được để trống.");
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3001/useraccounts?username=${username}&password=${password}`);
      if (res.data.length > 0) {
        setSuccess(`Login successfully with username: ${username}`);
        setTimeout(() => navigate("/posts"), 1000);
      } else {
        setError("Đăng nhập thất bại. Sai username hoặc password.");
      }
    } catch (err) {
      setError("Đã xảy ra lỗi khi kết nối đến máy chủ.");
      console.error(err);
    }
  };

  return (
    <Container className="my-4" style={{ maxWidth: "500px" }}>
      <h2 className="text-center">Đăng nhập</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập password"
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="w-100">
          Đăng nhập
        </Button>
      </Form>
    </Container>
  );
};

Login.propTypes = {
  defaultUsername: PropTypes.string,
  defaultPassword: PropTypes.string,
};

export default Login;