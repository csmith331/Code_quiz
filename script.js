var NavHighscores = document.querySelector(".View-Highscores");
var NavTime = document.querySelector(".Time");
var Container0 = document.querySelector(".container");
var StartQuiz = document.querySelector(".start-quiz");
var Answers = document.querySelector(".answers");
var Choices = document.querySelector("question-color");
var A =document.getElementById("A");
var B =document.getElementById("B");
var C =document.getElementById("C");
var D = document.getElementById("D");
var Submit =document.querySelector(".submit-button");
var question =document.querySelector("question");




var array = [

    {

        questions:"Commonly used Data Types do not include:",

        choices:["String", "Booleans", "Alerts", "Numbers"],

        answers: "Booleans",

    }

    ,{

        questions:"The condition in an if/else statement is enclosed within__________.",

        choices: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
        
        answers: "Curly brackets",

    }

    ,{

        questions:"Arrays in Javascript can be used to store __________.",

        choices: ["Numbers and strings", "Other arrays", "Booleans", "All the above"],

        answers: "Booleans",

    }

    ,{
        questions: "String values must be enclosed within _______ when being assigned to variables.",

        choices: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],

        answers: "Curly brackets",
    }

    ,{
        questions: "A very useful tool used during development and debugging for printing content to the debugger is:",

        choices: ["Javascript", "Terminal/bash", "For loops", "Console.log"],

        answers: "For loops",
    }

]



var questionIndex = 0;

var counter = 0
var secondsStart = 75;
var Interval = 0;
var timeDeduction = 15;

//need to create a timer function

NavTime.addEventListener("click", function () {
if (interval == 0) {
    interval = setInterval(function () {
        secondsStart--;
        StartQuiz = "Time: " + secondsStart;

        if (secondsStart <= 0) {
            clearInterval(interval);
            Finished ();
            StartQuiz = "Your out of Time";
        }
    }, 1000);
}
return(question);
});



startbtn.addEventListener("click", function () {
intro.style.display

presentaquestiontouser();
}

function startGame() {
    console.log(".start-quiz");
    timerCount = 75;
    // Prevents start button from being clicked when round is in progress
    StartQuiz.enabled = true;
    startTimer()
  }

function start() {
    let timerid = setinterval(secondsTask, 1000);
    NavTime.textContent = secondsStart;
    presentaquestiontouser(); StartQuiz.setAttribute("class", );
}

function presentaquestiontouser() {
  A.textcontent = array[0].choices[0];
  B.textcontent = array[1].choices[1];
  C.textcontent = array[2].choices[2];
  D.textcontent = array[3].choices[3];  
}



