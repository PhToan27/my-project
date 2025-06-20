import React, { useEffect, useReducer, useState } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// ----------------- Initial State -----------------
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "",
  highScore: 0,
};

// ----------------- Reducer -----------------
function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return {
        ...state,
        selectedOption: action.payload,
        feedback:
          action.payload === state.questions[state.currentQuestion].answer
            ? "correct"
            : "incorrect",
      };

    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      const newScore = isCorrect ? state.score + 1 : state.score;
      const nextQuestion = state.currentQuestion + 1;
      const isQuizEnd = nextQuestion === state.questions.length;

      if (isQuizEnd && newScore > state.highScore) {
        localStorage.setItem("highScore", newScore);
      }

      return {
        ...state,
        score: newScore,
        currentQuestion: nextQuestion,
        selectedOption: "",
        showScore: isQuizEnd,
        feedback: "",
        highScore: Math.max(newScore, state.highScore),
      };

    case "RESTART_QUIZ":
      const savedHigh = Number(localStorage.getItem("highScore") || 0);
      return { ...initialState, highScore: savedHigh };

    default:
      return state;
  }
}

// ----------------- Component -----------------
function AdvancedQuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, {
    ...initialState,
    highScore: Number(localStorage.getItem("highScore") || 0),
  });

  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    feedback,
    highScore,
  } = state;

  const [timeLeft, setTimeLeft] = useState(10);

  // Đếm ngược thời gian mỗi câu
  useEffect(() => {
    if (showScore) return;

    if (timeLeft === 0) {
      dispatch({ type: "NEXT_QUESTION" });
      setTimeLeft(10);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showScore]);

  // Reset thời gian khi sang câu mới
  useEffect(() => {
    setTimeLeft(10);
  }, [currentQuestion]);

  const handleOptionSelect = (option) => {
    if (!selectedOption) {
      dispatch({ type: "SELECT_OPTION", payload: option });
    }
  };

  const handleNext = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestart = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimeLeft(10);
  };

  const current = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        {showScore ? (
          <div className="text-center">
            <h2>Your Score: {score} / {questions.length}</h2>
            <h4>🏆 High Score: {highScore}</h4>
            <Button variant="primary" onClick={handleRestart}>Restart Quiz</Button>
          </div>
        ) : (
          <>
            <h5>
              Question {currentQuestion + 1} / {questions.length}
            </h5>
            <ProgressBar now={progress} className="mb-3" />

            <h4>{current.question}</h4>

            <div className="mt-3">
              {current.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option
                      ? option === current.answer
                        ? "success"
                        : "danger"
                      : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!selectedOption}
                >
                  {option}
                </Button>
              ))}
            </div>

            {feedback === "correct" && (
              <div className="text-success mt-3">
                <FaCheckCircle className="me-1" /> Correct! 🎉
              </div>
            )}
            {feedback === "incorrect" && (
              <div className="text-danger mt-3">
                <FaTimesCircle className="me-1" /> Incorrect! The correct answer is <strong>{current.answer}</strong>
              </div>
            )}

            <div className={`mt-3 fw-bold ${timeLeft <= 5 ? "text-danger" : ""}`}>
              Time left: {timeLeft}s
            </div>

            {selectedOption && (
              <Button className="mt-3" variant="primary" onClick={handleNext}>
                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            )}
          </>
        )}
      </Card>
    </Container>
  );
}

export default AdvancedQuestionBank;
