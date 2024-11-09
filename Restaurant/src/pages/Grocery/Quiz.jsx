import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Quiz.css'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [timer, setTimer] = useState(10);
  const [startQuiz, setStartQuiz] = useState(false); // New state to control quiz start
  const navigate = useNavigate()
 

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/quiz-questions');
        setQuestions(response.data.results);
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const answers = [
        ...currentQuestion.incorrect_answers.map((answer) => ({ answer, isCorrect: false })),
        { answer: currentQuestion.correct_answer, isCorrect: true },
      ];
      setShuffledAnswers(shuffleArray(answers));
      setTimer(10); // Reset timer for each question
    }
  }, [questions, currentQuestionIndex]);

  useEffect(() => {
    if (timer === 0) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameFinished(true);
      }
    }
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, currentQuestionIndex, questions.length]);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameFinished(true);
    }
    setTimer(10);
  };

  const handleSubmitQuiz = async () => {
    try {
      await axios.post('http://localhost:3000/api/submit-quiz', { username, score });
      toast(`Quiz submitted! Final Score: ${score}`);
    } catch (error) {
      console.error("Error submitting quiz score:", error);
    }
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameFinished(false);
    navigate('/grocery')
    
  };

  const startQuizHandler = () => {
    if (username.length >= 4) {
      setStartQuiz(true);
    } else {
      alert("Please enter a username with at least 4 characters.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card quiz_card">
        <div className="card-body">
          <h2 className="card-title text-center">Quiz Game</h2>
          {startQuiz ? (
            <>
              <p className="text-muted text-center">Username: {username}</p>
              {questions.length > 0 && !gameFinished ? (
                <div>
                  <h4 className="card-text">{questions[currentQuestionIndex].question}</h4>
                  <p className="text-danger">Time left: {timer} seconds</p>
                  <div className="mt-3">
                    {shuffledAnswers.map((option, idx) => (
                      <button
                        key={idx}
                        className="btn btn-outline-primary m-2"
                        onClick={() => handleAnswer(option.isCorrect)}
                      >
                        {option.answer}
                      </button>
                    ))}
                  </div>
                </div>
              ) : gameFinished ? (
                <div className="text-center">
                  <p className="font-weight-bold">Quiz finished! Your final score is: {score}</p>
                  <button className="btn btn-success mt-3" onClick={handleSubmitQuiz}>Submit Quiz</button>
                </div>
              ) : (
                <p>Loading questions...</p>
              )}
            </>
          ) : (
            <div className="text-center">
              <input
                type="email"
                className="form-control my-3"
                placeholder="Enter your Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button
                className="btn btn-primary"
                onClick={startQuizHandler}
              >
                Start Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
