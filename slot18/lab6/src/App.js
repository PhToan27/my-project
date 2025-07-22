// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import QuizPage from './pages/QuizPage';
import ReviewPage from './pages/ReviewPage';
import ReviewGrid from './pages/ReviewGrid'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div className="p-4">Welcome to Home Page</div>} />
        <Route path="/about" element={<div className="p-4">About Page</div>} />
        <Route path="/news" element={<div className="p-4">News Page</div>} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/contact" element={<div className="p-4">Contact Page</div>} />
        <Route path="/quiz/result" element={<ReviewPage />} />
        <Route path="/quiz/review" element={<ReviewGrid />} />
      </Routes>
    </Router>
  );
}

export default App;
