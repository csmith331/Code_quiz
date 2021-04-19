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