var NavHighscores = document.querySelector(".View-Highscores");
var NavTime = document.querySelector(".Time");
var Container0 = document.querySelector(".container");
var StartQuiz = document.querySelector(".start-quiz");
var correct = document.querySelector(".correct");
var choices = document.querySelector(".choices");
var choiceA =document.getElementById("A");
var choiceB =document.getElementById("B");
var choiceC =document.getElementById("C");
var choiceD = document.getElementById("D");
var Submit =document.querySelector(".submit-button");
var question =document.querySelector("question");




var codingQuestions = [

    {

        question:"Commonly used Data Types do not include:",
        choiceA: "Strings",
        choiceB: "Booleans",
        choiceC: "Alerts",
        choiceD: "Numbers",
        correct: "C",

    },

    {

        question:"The condition in an if/else statement is enclosed within__________.",
        choiceA: "Quotes",
        choiceB: "Curly brackets",
        choiceC: "Parenthesis",
        choiceD: "Square brackets",
        correct: "B",

    },

    {

        question:"Arrays in Javascript can be used to store __________.",
        choiceA: "Numbers and strings",
        choiceB: "Other arrays",
        choiceC: "Booleans",
        choiceD: "All of the above",
        correct: "D",

    },

    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choiceA: "Commas",
        choiceB: "Curly brackets",
        choiceC: "Quotes",
        choiceD: "Parenthesis",
        correct: "C",
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "Javascript",
        choiceB: "Terminal/bash",
        choiceC: "For loops",
        choiceD: "Console.log",
        correct: "D",
    },

]



var questionIndex = 0;
var endQuestion = codingQuestions.length -1;
var counter = 0
var secondsStart = 75;
var Interval = 0;
var timeDeduction = 15;

//need to create a eventlistener to start quiz

StartQuiz.addEventListener("click", start);  

function start() {
    container.getElementsByClassName.display = "block";
    choices.getElementsByClassName.display = "block";

    SecondsStart = 75;
    getQuestion();
    NavTimer();
}

 

function NavTimer() {
if (Interval == 0) {
    interval = setInterval(function () {
        secondsStart--;
        StartQuiz = "Time: " + secondsStart;

        if (secondsStart <= 0) {
            clearInterval(Interval);
            Finished ();
            StartQuiz = "Your out of Time";
        }
    }, 1000);
}
// return(question);
// };


function getQuestion() {
    var choices = codingQuestions [questionIndex];

  A.textcontent = codingQuestions[0].choices[0];
  B.textcontent = codingQuestions[1].choices[1];
  C.textcontent = codingQuestions[2].choices[2];
  D.textcontent = codingQuestions[3].choices[3];  

  for (var i = 0; i < lastQuestion; i++) {

  }
}

for (let i = 0; i < choicesDiv.length; i++) {
    choicesDiv[i].addEventListener('click', function () {
        var Answer = codingQuestions[questionIndex].correct;

        console.log('click');
        if (Answer === this.getAttribute('onclick')) {
            MessageChannel.textContent = 'correct!';
            count = count + 10
            localStorage.setItem("count", count);
            //window.localStorage.setItem ('score + 5')?
        } else {
            MessageChannel.textContent = 'incorrect';
            timerCount = timerCount - 10;
            if (count > 0) {
                count= count - 3
                localStorage.setItem("count", count);
            }
            //window.localStorage.setItem('score - 2')
            }
        })
        }
        questionIndex++;
        getQuestion();
    }
    

