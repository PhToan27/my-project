import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Container, Spinner, Row, Col, Alert } from "react-bootstrap";

const PostList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  // Hiển thị alert nếu có thông báo từ localStorage
  useEffect(() => {
    const message = localStorage.getItem("alertMessage");
    if (message) {
      setAlertMessage(message);
      localStorage.removeItem("alertMessage");

      // Tự động ẩn alert sau 3 giây
      setTimeout(() => {
        setAlertMessage("");
      }, 3000);
    }
  }, []);

  // Fetch dữ liệu khi component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Hàm xóa bài viết có xác nhận
  const handleDelete = async (id) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa bài viết này?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      setData(data.filter((post) => post.id !== id));
      localStorage.setItem("alertMessage", "🗑️ Bài viết đã được xóa thành công!");
      navigate(0); // reload lại trang hiện tại
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
      setError("Xóa không thành công. Vui lòng thử lại.");
    }
  };

  if (loading) return <Spinner animation="border" className="m-3" />;

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Danh sách bài viết</h2>

      {alertMessage && <Alert variant="success">{alertMessage}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <div className="d-flex justify-content-end mb-3">
        <Button as={Link} to="/create" variant="primary">
          Tạo bài viết mới
        </Button>
      </div>

      <Row>
        {data.map((post) => (
          <Col md={6} lg={4} key={post.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button as={Link} to={`/edit/${post.id}`} variant="warning">
                    Chỉnh sửa
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(post.id)}>
                    Xóa
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostList;
