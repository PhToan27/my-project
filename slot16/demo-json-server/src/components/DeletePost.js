import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button, Alert, Row, Col } from "react-bootstrap";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      navigate("/");
    } catch (err) {
      console.error("Lỗi khi xóa bài viết:", err);
      setError("Xóa không thành công. Vui lòng thử lại.");
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Xác nhận xóa bài viết</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <p>Bạn có chắc chắn muốn xóa bài viết này không?</p>

      <Row className="mt-3">
        <Col xs="auto">
          <Button variant="danger" onClick={handleDelete}>
            Xóa
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="secondary" onClick={() => navigate("/")}>
            Hủy
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DeletePost;
