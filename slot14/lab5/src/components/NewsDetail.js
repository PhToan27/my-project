import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function NewsDetail() {
  const { id } = useParams(); // Lấy id từ URL
  const [news, setNews] = useState(null); // Dữ liệu bài viết
  const [loading, setLoading] = useState(true); // Trạng thái loading

  useEffect(() => {
    // Gọi API tới file JSON nằm trong public
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setNews(found);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu:", error);
        setLoading(false);
      });
  }, [id]); // Mỗi lần id thay đổi thì gọi lại

  // Trường hợp đang tải
  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  // Không tìm thấy bài viết
  if (!news) {
    return <p>Không tìm thấy bài viết với id: {id}</p>;
  }

  // Hiển thị thông tin bài viết
  return (
    <div style={{ padding: "2rem" }}>
      <h2>{news.title}</h2>
      <img
        src={news.images}
        alt={news.title}
      />
      <p>{news.description}</p>
      <Link to="/news">← Quay lại danh sách</Link>
    </div>
  );
}

export default NewsDetail;
