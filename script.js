var NavHighscores = document.querySelector(".View-Highscores");
var NavTime = document.querySelector(".Time");
var Container0 = document.querySelector(".container0");
var StartQuiz = document.querySelector("start-quiz");
var Container1 = document.querySelector("container1");
var CorrectAnswer = document.querySelector(".correct");
var WrongAnswer = document.querySelector(".wrong");
var Container2 = document.querySelector(".container2");
var Container3 = document.querySelector(".container3");
var Container4 = document.querySelector(".container4");
var Container5 = document.querySelector(".container5");
var Container6 = document.querySelector(".container6");
var SubmitButton = document.querySelector(".submit-button");
var Container7 = document.querySelector("container7");
var GoBackButton = document.querySelector(".Go-back-button");
var ClearButton = document.querySelector(".clear-button");

var Container1 = [
  { 
    question : "Commonly used Data Types do not include:",
    options : ["Strings", "Booleans", "Alerts", "Numbers"],  
    answer : 2,
    hidden = false,
    visible = true,
  }
]

var Container2 = [
  {
    question : "The condition in an if/else statement is enclosed within _______.",
    options : ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
    answer: 2,
    hidden = false,
    visible = true,
  }
]

var Container3 = [
  {
    question : "Arrays in Javascript can be used to store ________.",
    options : ["Numbers and strings", "Other arrays", "Booleans", "All the above"],
    answer: 3,
    hidden = false,
    visible = true,
  }
]

var Container4 = [
  {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    options : ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    answer : 2,
    hidden = false,
    visible = true,
  }
]

var Container5 = [
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options : ["Javascript", "Terminal/bash", "For loops", "Console.log"],
    answer: 3,
    hidden = false,
    visible = true,
  }
]

var wrong;
var correct;
var highscores;
var timer;
var timecount;


function startquiz() {
    timerCount = 75;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }

  function highscores() {
    High.textContent = highscores;
    localStorage.setItem("highscores", highscores);
  }

  function wrongAnswer() {
    WrongAnswer.textContent = "Wrong";
    
  }

  function correctAnswer() {
    CorrectAnswer.textContent = "Correct";
    
  }