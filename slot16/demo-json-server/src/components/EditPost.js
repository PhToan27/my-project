import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const EditPost = () => {
  const { id } = useParams(); // Lấy id từ URL
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts/${id}`);
        if (response.data) {
          setTitle(response.data.title);
          setContent(response.data.content);
        } else {
          setStatus(`Không tìm thấy bài viết với id ${id}`);
        }
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
        setStatus("Lỗi khi lấy bài viết.");
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setStatus("Tiêu đề và nội dung không được để trống.");
      return;
    }

    const updatedPost = { title, content };

    try {
      const response = await axios.put(`http://localhost:3001/posts/${id}`, updatedPost);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật bài viết:", error);
      setStatus("Có lỗi xảy ra khi cập nhật bài viết.");
    }
  };

  return (
    <Container className="mt-4">
      <h2>Chỉnh sửa bài viết</h2>
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
            placeholder="Nhập nội dung bài viết"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Cập nhật bài viết
        </Button>
      </Form>
    </Container>
  );
};

// (Tùy chọn) Nếu sau này truyền prop từ cha vào thì có thể thêm PropTypes như sau:
EditPost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default EditPost;
