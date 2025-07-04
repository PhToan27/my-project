import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra dữ liệu không được để trống
    if (!title.trim() || !content.trim()) {
      setStatus("Tiêu đề và nội dung không được để trống.");
      return;
    }

    const newPost = { title, content };

    try {
      await axios.post("http://localhost:3001/posts", newPost);
      localStorage.setItem("alertMessage", "✅ Bài viết đã được tạo thành công!");
      navigate("/"); // Chuyển hướng sau khi tạo thành công
    } catch (error) {
      console.error("Lỗi khi tạo bài viết:", error);
      setStatus("Có lỗi xảy ra khi tạo bài viết.");
    }
  };

  return (
    <Container className="mt-4">
      <h2>Thêm bài viết mới</h2>

      {status && <Alert variant="danger">{status}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Nhập nội dung"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Tạo bài viết
        </Button>
      </Form>
    </Container>
  );
};

// Nếu về sau bạn nhận props từ bên ngoài, có thể định nghĩa thêm:
CreatePost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default CreatePost;
