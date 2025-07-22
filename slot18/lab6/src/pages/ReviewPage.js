// src/pages/ReviewPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card } from 'react-bootstrap';

function ReviewPage() {
  const { questions } = useSelector(state => state.quiz);

  return (
    <Container className="mt-4">
      <Card className="text-center mb-4">
        <Card.Body>
          <Card.Title as="h2">Quiz Result</Card.Title>
        </Card.Body>
      </Card>

      {questions.map((q, index) => {
        const isCorrect = q.selectedAnswer === q.correctAnswer;
        return (
          <Card
            key={q.id}
            className={`mb-3 p-3 ${isCorrect ? 'bg-success bg-opacity-10' : 'bg-danger bg-opacity-10'}`}
          >
            <h5>Q{index + 1}. {q.text}</h5>
            <ul>
              {q.options.map(opt => (
                <li key={opt}>
                  <span
                    style={{
                      fontWeight: opt === q.selectedAnswer ? 'bold' : 'normal',
                      color: opt === q.selectedAnswer
                        ? (isCorrect ? 'green' : 'red')
                        : 'inherit'
                    }}
                  >
                    {opt}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              {isCorrect
                ? <span className="text-success">✅ Correct!</span>
                : <span className="text-danger">❌ Incorrect! Correct answer: <strong>{q.correctAnswer}</strong></span>}
            </p>
          </Card>
        );
      })}
      
    </Container>
  );
}

export default ReviewPage;
