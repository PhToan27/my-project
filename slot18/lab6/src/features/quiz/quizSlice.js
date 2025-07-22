// features/quiz/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris',
      selectedAnswer: '',
    },
    {
      id: 2,
      text: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
      selectedAnswer: '',
    },
  ],
  showResult: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer(state, action) {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) question.selectedAnswer = answer;
    },
    showResult(state) {
      state.showResult = true;
    },
  },
});

export const { selectAnswer, showResult } = quizSlice.actions;
export default quizSlice.reducer;
