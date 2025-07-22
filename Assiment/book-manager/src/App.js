import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import EditBook from './pages/EditBook';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:id" element={<BookDetail />} />
      <Route path="/books/:id/edit" element={<EditBook />} />
    </Routes>
  );
}

export default App;
