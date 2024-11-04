import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/quiz-questions');  // Fetches quiz questions from backend
        setQuestions(response.data.results);
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameFinished(true);
    }
  };

  const handleSubmitQuiz = async () => {
    try {
      await axios.post('http://localhost:3000/api/submit-quiz', { username, score });
      alert(`Quiz submitted! Final Score: ${score}`);
    } catch (error) {
      console.error("Error submitting quiz score:", error);
    }
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameFinished(false);
  };

  return (
    <div>
      <h2>Quiz Game</h2>
      {username ? (
        <>
          <p>Username: {username}</p>
          {questions.length > 0 && !gameFinished ? (
            <div>
              <h3>{questions[currentQuestionIndex].question}</h3>
              <div>
                {questions[currentQuestionIndex].incorrect_answers.map((answer, idx) => (
                  <button key={idx} onClick={() => handleAnswer(false)}>
                    {answer}
                  </button>
                ))}
                <button onClick={() => handleAnswer(true)}>
                  {questions[currentQuestionIndex].correct_answer}
                </button>
              </div>
            </div>
          ) : gameFinished ? (
            <div>
              <p>Quiz finished! Your final score is: {score}</p>
              <button onClick={handleSubmitQuiz}>Submit Quiz</button>
            </div>
          ) : (
            <p>Loading questions...</p>
          )}
        </>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => username && setGameFinished(false)}>Start Quiz</button>
        </div>
      )}
    </div>
  );
}


