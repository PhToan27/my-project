import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: '2 + 2 equals?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  }
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    const correctAnswer = quizData[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleReplay = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {showResult ? (
        <Result score={score} total={quizData.length} onReplay={handleReplay} />
      ) : (
        <Question
          data={quizData[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default QuizApp;
