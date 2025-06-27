// src/context/QuizContext.js
import React, { createContext, useState, useEffect } from 'react';
import { quizData as initialData } from '../data/quizData';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setQuizData(initialData); // load dữ liệu
  }, []);

  const checkAnswer = (index, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [index]: answer
    }));
  };

  const next = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };
  const addQuestion = (newQuestion) => {
    setQuizData((prev) => [...prev, newQuestion]);
  };
  return (
    <QuizContext.Provider
      value={{
        quizData,
        currentQuestion,
        selectedAnswers,
        isCompleted,
        checkAnswer,
        next,
        addQuestion
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};