import React, { useState, useEffect } from "react";
import "./feedback.css";
import { Link } from "react-router-dom";

const FeedbackForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question:
        "How many of your calendar events are todos (no one else is invited)?",
      options: [
        "3+ per day",
        "1-2 per day",
        "few per week",
        "few per month",
        "I don't schedule my todos",
      ],
    },
    {
      question: "What kind of work do you do?",
      options: [
        "student",
        "sales",
        "marketing",
        "finance/accounting",
        "venture capital",
        "design",
        "executive assistance",
        "operations",
        "recruiting people",
        "engineering",
        "founder",
        "product",
        "other",
      ],
    },
    {
      question: "How big is your company?",
      options: [
        "just me",
        "2-10",
        "11-25",
        "26-50",
        "51-100",
        "101-250",
        "251-500",
        "500+",
      ],
    },
  ];

  useEffect(() => {
    const options = document.querySelectorAll('.options');

    options.forEach(option => {
      option.addEventListener('click', () => {
        options.forEach(opt => {
          opt.classList.remove('selected');
        });
        option.classList.add('selected');
        handleAnswer(option.dataset.option);
      });
    });

    return () => {
      options.forEach(option => {
        option.removeEventListener('click', () => {});
      });
    };
  });

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const renderQuestion = () => {
    const { question, options } = questions[currentQuestion];

    return (
      <div>
        <div className="backbtn" onClick={handleBack}>
          <div className="backarrow">➔</div>
          <div className="backtxt">Back</div>
        </div>
        <span className="highlight">{question}</span>
        <div className="optionsContainer">
          {options.map((option, index) => (
            <div className="options" key={index} data-option={option}>
              <div className="sr">{String.fromCharCode(65 + index)}</div>
              <div className="opText"><b>{option}</b></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <>
          {renderQuestion()}
          <button onClick={handleNext}>Next ➔</button>
        </>
      ) : (
        <div>
          
         { console.log(JSON.stringify(answers)) }
         <div>
         <div className="backbtn" onClick={handleBack}>
          <div className="backarrow">➔</div>
          <div className="backtxt">Back</div>
        </div>
  <div className="testcont">
    <b><p>which emails would you like to connect?</p></b>
    <p>this helps us understand if its multiple personal emails or your work account.</p>
    <input type="text" placeholder="account@refero.design" />
  </div>
 <Link to="/thanks"> <button>Next ➔ </button></Link>
</div>

        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
