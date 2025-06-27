import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../context/QuizContext';
import { Button, Card, Form } from 'react-bootstrap';

function Quiz() {
  const {
    quizData,
    currentQuestion,
    selectedAnswers,
    checkAnswer,
    next,
    isCompleted,
    addQuestion 
  } = useContext(QuizContext);

  const [currentQ, setCurrentQ] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false); 
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswers, setNewAnswers] = useState(['', '', '']);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState('');

  useEffect(() => {
    if (quizData.length > 0) {
      setCurrentQ(quizData[currentQuestion]);
    }
  }, [quizData, currentQuestion]);

  if (!currentQ) return <p>Loading...</p>;

  if (isCompleted) {
    const score = Object.keys(selectedAnswers).filter(
      (i) => quizData[i]?.correctAnswer === selectedAnswers[i]
    ).length;
    return (
      <div className="container mt-4 text-center">
        <h2>Quiz Completed!</h2>
        <h4>Your Score: {score} / {quizData.length}</h4>
        
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Question {currentQuestion + 1}</Card.Title>
          <Card.Text>{currentQ.question}</Card.Text>

          <Form>
            {currentQ.answers.map((ans, i) => (
              <Form.Check
                key={i}
                type="radio"
                name="answer"
                label={ans}
                value={ans}
                checked={selectedAnswers[currentQuestion] === ans}
                onChange={() => checkAnswer(currentQuestion, ans)}
              />
            ))}
          </Form>

          <Button
            variant="danger"
            onClick={next}
            disabled={!selectedAnswers[currentQuestion]}
            className="mt-3"
          >
            {currentQuestion + 1 < quizData.length ? 'Next' : 'Submit'}
          </Button>

          <div className="mt-3">
            <Button
              variant="secondary"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? 'Hide Add Question' : 'Add New Question'}
            </Button>
          </div>
        </Card.Body>
      </Card>

      {showAddForm && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Add New Question</Card.Title>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  !newQuestion ||
                  newAnswers.some((a) => !a) ||
                  !newCorrectAnswer
                ) {
                  alert('Please fill in all fields.');
                  return;
                }

                addQuestion({
                  question: newQuestion,
                  answers: newAnswers,
                  correctAnswer: newCorrectAnswer
                });

                setNewQuestion('');
                setNewAnswers(['', '', '']);
                setNewCorrectAnswer('');
                alert('New question added!');
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Question</Form.Label>
                <Form.Control
                  type="text"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                />
              </Form.Group>

              {newAnswers.map((ans, idx) => (
                <Form.Group className="mb-3" key={idx}>
                  <Form.Label>Answer {idx + 1}</Form.Label>
                  <Form.Control
                    type="text"
                    value={ans}
                    onChange={(e) => {
                      const newArr = [...newAnswers];
                      newArr[idx] = e.target.value;
                      setNewAnswers(newArr);
                    }}
                  />
                  <Form.Check
                    type="radio"
                    name="correctAnswer"
                    label="Correct Answer"
                    checked={newCorrectAnswer === ans}
                    onChange={() => setNewCorrectAnswer(ans)}
                  />
                </Form.Group>
              ))}

              <Button type="submit" variant="success">
                Add Question
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Quiz;
