import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const FullForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid = name.trim().length >= 2 && gender && country && agree;
    setFormValid(isValid);
  }, [name, gender, country, agree]);

  return (
    <Form>
      <Form.Group>
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={name !== "" && name.trim().length < 2}
        />
        <Form.Control.Feedback type="invalid">
          Tên phải có ít nhất 2 ký tự.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Nam"
            name="gender"
            value="nam"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Nữ"
            name="gender"
            value="nu"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="khác"
            name="gender"
            value="other"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group>
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">-- Chọn quốc gia --</option>
          <option value="vn">Việt Nam</option>
          <option value="us">Hoa Kỳ</option>
          <option value="jp">Nhật Bản</option>
          <option value="ca">Campuchia</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mt-2">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
      </Form.Group>

      <Button type="submit" disabled={!formValid} className="mt-3">
        Gửi
      </Button>
    </Form>
  );
};

export default FullForm;
