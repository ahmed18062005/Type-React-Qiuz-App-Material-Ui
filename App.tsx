import React from 'react';
import QuizData from './components/Quizdata';
import './App.css';

function App() {

  let arr = [
    {
      question: "JS Stands for ______",
      options: ["Js", "JS", "JavaScript", "jS"],
      correctAnswer: "JavaScript",
    },
    {
      question: "RAM Stands for ______",
      options: ["Ram", "RAM", "Random Access Memory", "raM"],
      correctAnswer: "Random Access Memory",
    },
    {
      question: "SQL Stands for ______",
      options: ["SQL", "SQl", "Structured Query Language", "sQL"],
      correctAnswer: "Structured Query Language",
    },
    {
      question: "is HTML is Programming Language?",
      options: ["YES", "NO"],
      correctAnswer: "NO",
    },

  ];
  return (
    <div className="App">
<QuizData data={arr}/>
    </div>
  );
}

export default App;
