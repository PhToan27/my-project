import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer, showResult } from '../features/quiz/quizSlice';
import { Container, Card, Row, Col, Form, ButtonGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function QuizPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, showResult: isSubmitted } = useSelector(state => state.quiz);
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = questions[currentIndex];

  return (
    <Container className="mt-4">
      <Card className="text-center"><Card.Body><Card.Title>JavaScript Quiz</Card.Title></Card.Body></Card>

      <Card className="mt-3 p-3">
        <h5>Q{currentIndex + 1}. {current.text}</h5>
        <Row>
          {current.options.map((option, idx) => (
            <Col md={6} className="mb-2" key={idx}>
              <Form.Check
                type="radio"
                label={option}
                name={`q${current.id}`}
                checked={current.selectedAnswer === option}
                disabled={isSubmitted}
                onChange={() => dispatch(selectAnswer({ questionId: current.id, answer: option }))}
                className="p-2 border rounded bg-light"
              />
            </Col>
          ))}
        </Row>
        {isSubmitted && (
          <p className="mt-2">
            {current.selectedAnswer === current.correctAnswer
              ? <span className="text-success">✅ Correct!</span>
              : <span className="text-danger">❌ Incorrect. Correct: {current.correctAnswer}</span>}
          </p>
        )}
        <div className="text-center mt-3">
        <ButtonGroup className="mb-2">
          <Button onClick={() => setCurrentIndex(0)}>First</Button>
          <Button onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}>Prev</Button>
          <Button onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))}>Next</Button>
          <Button onClick={() => setCurrentIndex(questions.length - 1)}>Last</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup>
          <Button variant="info" onClick={() =>{ dispatch(showResult()); navigate('/quiz/result');}}>Quiz</Button>
          <Button variant="info" onClick={() => navigate('/quiz/review')}>Quiz Review</Button>
          <Button variant="success" onClick={() => dispatch(showResult())}>Submit</Button>
        </ButtonGroup>
      </div>
      </Card>

      
    </Container>
  );
}

export default QuizPage;
