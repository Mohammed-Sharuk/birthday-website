import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Questions.css';

const questionsData = [
  { question: "1. Have you ever thought of someone you stopped talking to, but they never left your mind?" },
  { question: "2. Have you ever missed someone but chose to stay silent?" },
  { question: "3. What's the most meaningful gift you've received that didn't have a price tag?" },
  { question: "4. What would you say to someone who always had something to say... but never said it?" },
  { question: "5. What's something you wish people understood about you — but never asked?" }
];

const Questions = ({ next }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answer, setAnswer] = useState('');
  const [sending, setSending] = useState(false);

  const handleNext = async () => {
    const currentQuestion = questionsData[currentQ].question;
    const response = answer.trim();
    if (!response) return;

    setSending(true);

    try {
      await axios.post('http://localhost:5000/api/answers', {
        question: currentQuestion,
        answer: response
      });

      // Optionally show a toast or alert
      console.log("Answer sent!");

      setAnswer('');
      if (currentQ < questionsData.length - 1) {
        setCurrentQ((prev) => prev + 1);
      } else {
        next(); // move to next page
      }
    } catch (error) {
      console.error("Error sending answer:", error);
      alert("There was a problem sending your answer. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="questions-container">
      <h1 className="mystery-heading">💌 Someone wants to ask you something…<br /><span className="subtle">Please answer truly, from your heart.</span></h1>

      <div className="question-card">
        <h2 className="question-text">{questionsData[currentQ].question}</h2>
        <textarea
          className="answer-box"
          rows="5"
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button className="next-btn" onClick={handleNext} disabled={sending || !answer.trim()}>
          {sending ? 'Sending...' : 'Next ➡️'}
        </button>
      </div>
    </div>
  );
};

Questions.propTypes = {
  next: PropTypes.func.isRequired
};

export default Questions;
