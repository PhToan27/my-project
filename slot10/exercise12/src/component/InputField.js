import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

function InputField() {
  const [text, setText] = useState('');

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Controlled Input Field</Card.Title>
        <Form.Group>
          <Form.Label>Type something:</Form.Label>
         <Form.Control
         value={text}
         type="text"
         onChange={(e) =>setText(e.target.value) }
         placeholder="enter here"
         />
        </Form.Group>
        <Card.Text className="mt-2">You typed: {text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InputField;