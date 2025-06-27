import React, { useReducer, useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

// Initial state for the form
const initialState = {
  name: "",
  age: "",
  email: "",
  phone: "",
  agree: false,
  isSubmitted: false,
};

// Reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

const MyForm2 = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    dispatch({
      type: "SET_FIELD",
      field: name,
      value: type === "checkbox" ? checked : value,
    });
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!state.name || state.name.length < 3 || state.name.length > 50) {
      newErrors.name = "Tên phải có từ 3 đến 50 ký tự!";
    }

    const age = Number(state.age);
    if (!state.age || age < 18 || age > 100) {
      newErrors.age = "Tuổi phải từ 18 đến 100!";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!state.email || !emailRegex.test(state.email)) {
      newErrors.email = "Email không hợp lệ!";
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!state.phone || !phoneRegex.test(state.phone)) {
      newErrors.phone = "Số điện thoại phải từ 10 đến 15 chữ số!";
    }

    if (!state.agree) {
      newErrors.agree = "Bạn phải đồng ý với điều khoản!";
    }

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
    }
  };

  return (
    <Container className="mt-4">
      <h3>{title}</h3>

      {showAlert && (
        <Alert variant="danger">Vui lòng kiểm tra lại các trường nhập!</Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={state.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAgree">
          <Form.Check
            type="checkbox"
            label="Tôi đồng ý với điều khoản"
            name="agree"
            checked={state.agree}
            onChange={handleChange}
            isInvalid={!!errors.agree}
            feedback={errors.agree}
            feedbackType="invalid"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

// PropTypes
MyForm2.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MyForm2;
