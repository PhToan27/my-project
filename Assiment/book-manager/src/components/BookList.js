import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../services/api';
import AlertMessage from './AlertMessage';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

function BookList() {
  const [books, setBooks] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  


  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const res = await api.get('/books');
    setBooks(res.data);
  };

  const handleDeleteClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await api.delete(`/books/${selectedBook.id}`);
      setBooks(prev => prev.filter(b => b.id !== selectedBook.id));
      setSuccessMsg(`🗑️ Đã xoá "${selectedBook.title}" thành công!`);
      
    } catch {
      alert('Xoá thất bại!');
    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      <h3>📚 Danh sách sách</h3>
      <AlertMessage message={successMsg} onClose={() => setSuccessMsg('')} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Ảnh</td>
            <th>Tiêu đề</th>
            <th>Tác giả</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>
        <img
          src={book.image}
          alt={book.title}
          width="60"
          height="80"
          style={{ objectFit: 'cover' }}
        />
      </td>

              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}k</td>
              <td>
                <Link to={`/books/${book.id}`}>
                  <Button variant="primary" size="sm" className="me-2">Chi tiết</Button>
                </Link>
                <Link to={`/books/${book.id}/edit`}>
                  <Button variant="warning" size="sm" className="me-2">Sửa</Button>
                </Link>
                <Button variant="danger" size="sm" onClick={() => handleDeleteClick(book)}>Xoá</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <DeleteConfirmModal
        show={showModal}
        bookTitle={selectedBook?.title}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
}

export default BookList;
