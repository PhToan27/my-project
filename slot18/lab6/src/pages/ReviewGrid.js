// src/pages/ReviewGrid.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
 
function ReviewGrid() {
  const { questions } = useSelector(state => state.quiz);
  
  return (
    <Container className="mt-4">
      <Card className="text-center mb-4">
        <Card.Body>
          <Card.Title as="h2">Quiz Review</Card.Title>
        </Card.Body>
      </Card>

      <Row className="g-3 justify-content-center">
        {questions.map((q, index) => (
          <Col xs={6} md={3} lg={2} key={q.id}>
            <Card bg="success" text="white" className="p-2">
              <Card.Body className="text-center">
                <div>Question No {index + 1}</div>
                <div><strong>{q.selectedAnswer ? 'Answered' : 'Not Answered'}</strong></div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    </Container>
  );
}

export default ReviewGrid;
