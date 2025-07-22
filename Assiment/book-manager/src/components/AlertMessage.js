import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertMessage({ message, variant = 'success', onClose }) {
  if (!message) return null;

  return (
    <Alert variant={variant} onClose={onClose} dismissible>
      {message}
    </Alert>
  );
}

export default AlertMessage;
