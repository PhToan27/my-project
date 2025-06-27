import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navigation from './component/Navigation';
import { Container } from 'react-bootstrap';
import Post from './component/Post';
import PostDetail from './component/PostDetail';
import Login from './component/Login';
function App() {
  return (
    <div>
      <h1>React Router Example</h1>
      <Navigation/>
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Post />} />  {/* Trang danh sách bài viết */}
        <Route path="/post/:id" element={<PostDetail />} />  {/* Trang chi tiết bài viết */}
        <Route path="/login" element={<Login />} />
      </Routes>
      </Container>
    </div>
  );
}

export default App;
