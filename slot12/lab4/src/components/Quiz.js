import React, { useState, useEffect, useContext } from 'react';
import { QuizContext } from './QuizContext';

export const quizData = [
  {
    question: 'What is ReactJS?',
    answers: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system'
    ],
    correctAnswer: 'A JavaScript library for building user interfaces'
  },
  {
    question: 'What is JSX?',
    answers: [
      'A programming language',
      'A file format',
      'A syntax extension for JavaScript'
    ],
    correctAnswer: 'A syntax extension for JavaScript'
  }
];

function Quiz() {
  const { selectedAnswers, setSelectedAnswers } = useContext(QuizContext);
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswers, setNewAnswers] = useState(['', '', '']);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState('');

  // Gọi khi load lần đầu để set dữ liệu mặc định
  useEffect(() => {
    setQuestions(quizData);
  }, []);

  // Chọn câu trả lời
  const handleSelect = (qIndex, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [qIndex]: answer
    }));
  };

  // Thêm câu hỏi mới
  const handleAddQuestion = () => {
    if (newQuestion && newAnswers.every(a => a) && newCorrectAnswer) {
      const newQ = {
        question: newQuestion,
        answers: newAnswers,
        correctAnswer: newCorrectAnswer
      };
      setQuestions(prev => [...prev, newQ]);
      setNewQuestion('');
      setNewAnswers(['', '', '']);
      setNewCorrectAnswer('');
    }
  };

  return (
    <div>
      <h2>Quiz</h2>

      {/* Form nhập câu hỏi mới */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Add a new question</h3>
        <input
          type="text"
          placeholder="Enter question"
          value={newQuestion}
          onChange={e => setNewQuestion(e.target.value)}
        />
        {newAnswers.map((a, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Answer ${i + 1}`}
            value={a}
            onChange={e => {
              const updated = [...newAnswers];
              updated[i] = e.target.value;
              setNewAnswers(updated);
            }}
          />
        ))}
        <input
          type="text"
          placeholder="Correct Answer"
          value={newCorrectAnswer}
          onChange={e => setNewCorrectAnswer(e.target.value)}
        />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>

      {/* Hiển thị danh sách câu hỏi */}
      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p><strong>{q.question}</strong></p>
          {q.answers.map((a, i) => (
            <div key={i}>
              <input
                type="radio"
                name={`q${index}`}
                value={a}
                checked={selectedAnswers[index] === a}
                onChange={() => handleSelect(index, a)}
              />
              {a}
            </div>
          ))}
          {selectedAnswers[index] && (
            <p style={{ color: selectedAnswers[index] === q.correctAnswer ? 'green' : 'red' }}>
              {selectedAnswers[index] === q.correctAnswer ? 'Correct!' : 'Incorrect'}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Quiz;