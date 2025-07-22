import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteConfirmModal({ show, onConfirm, onCancel, bookTitle }) {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận xoá</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Bạn có chắc muốn xoá sách <strong>{bookTitle}</strong> không?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Hủy
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Xác nhận xoá
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteConfirmModal;
