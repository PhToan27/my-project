import React, { createContext, useState } from 'react';

// Tạo context
export const QuizContext = createContext();

// Provider chứa state chung cho toàn bộ quiz
export const QuizProvider = ({ children }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const value = {
    selectedAnswers,
    setSelectedAnswers
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};