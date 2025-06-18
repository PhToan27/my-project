import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm xác thực email bằng regex
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const emailValid = validateEmail(email);
    const passwordValid = password.length >= 8;

    setIsEmailValid(email === "" ? null : emailValid);
    setIsPasswordValid(password === "" ? null : passwordValid);
    setFormValid(emailValid && passwordValid);
  }, [email, password]);

  return (
    <Form>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={isEmailValid === false}
          isValid={isEmailValid === true}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ít nhất 8 ký tự"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={isPasswordValid === false}
          isValid={isPasswordValid === true}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu cần ít nhất 8 ký tự.
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" disabled={!formValid}>
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
